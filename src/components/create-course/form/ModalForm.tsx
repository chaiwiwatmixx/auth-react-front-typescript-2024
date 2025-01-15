import React, { useState } from "react";
import Form from "./Form";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CourseType } from "../../../models/course-model";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import {
  createCourse,
  getCoursesAdmin,
} from "../../../redux/features/course/courseSlice";

interface FormProps {
  toggleModal: () => void;
  closeModal: (e: React.MouseEvent) => void;
}

// create schema check with yup
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  originalPrice: yup.number().required("original price is required"),
  price: yup.number().required("Price is required"),
  subDescription: yup.string().required("sub description is required"),
});

const ModalForm = ({ toggleModal, closeModal }: FormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // check form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CourseType>({
    resolver: yupResolver(schema),
  });

  // handleDescriptionChange
  const handleDescriptionChange = (value: string) => {
    setText(value);
  };

  // handleImageChange
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectFile = e.target.files[0];
      setFile(selectFile);

      const imageUrl = URL.createObjectURL(selectFile);
      setImagePreview(imageUrl);
    }
  };

  // submit
  const onSubmit: SubmitHandler<CourseType> = (data) => {
    if (data) {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("originalPrice", data.originalPrice.toString());
      formData.append("price", data.price.toString());
      formData.append("subDescription", data.subDescription);
      formData.append("description", text);
      formData.append("image", file ? file : "");

      dispatch(createCourse(formData));
      reset();
      setText("");
      toggleModal();
    }
  };

  return (
    <div
      className="modal modal-open fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={closeModal} // Detect clicks outside of modal-box
    >
      <div className="modal-box relative max-w-5xl">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={toggleModal}
        >
          ✕
        </button>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Create new event</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Form
            register={register}
            text={text}
            handleImageChange={handleImageChange}
            handleDescriptionChange={handleDescriptionChange}
            imagePreview={imagePreview}
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalForm;

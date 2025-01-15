import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FormProps } from "../../../models/course-model";

const Form = ({
  register,
  text,
  imagePreview,
  handleImageChange,
  handleDescriptionChange,
  onSubmit,
  errors,
}: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
      <div className="col-span-2">
        <label className="block mb-2 text-sm font-medium">Title</label>
        <input
          type="text"
          className="input input-bordered bg-white w-full rounded-lg"
          placeholder="Title"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div className="col-span-2">
        <input
          type="file"
          className="file-input file-input-bordered w-full max-w-xs rounded-lg bg-white"
          onChange={handleImageChange}
        />
      </div>
      {imagePreview && (
        <img className="w-28" src={imagePreview} alt="preview" />
      )}

      <div className="col-span-2">
        <label className="block mb-2 text-sm font-medium">Original Price</label>
        <input
          type="number"
          className="input input-bordered bg-white w-full rounded-lg"
          placeholder="Price"
          {...register("originalPrice")}
        />
      </div>
      {errors.originalPrice && (
        <p className="text-red-500 text-sm mt-1">
          {errors.originalPrice.message}
        </p>
      )}

      <div className="col-span-2">
        <label className="block mb-2 text-sm font-medium">Price</label>
        <input
          type="number"
          className="input input-bordered bg-white w-full rounded-lg"
          placeholder="Price"
          {...register("price")}
        />
      </div>

      <div className="col-span-2">
        <label className="block mb-2 text-sm font-medium">SubDescription</label>
        <textarea
          className="input input-bordered h-16 bg-white w-full rounded-lg"
          placeholder="SubDescription"
          {...register("subDescription")}
        />
      </div>
      {errors.subDescription && (
        <p className="text-red-500 text-sm mt-1">
          {errors.subDescription.message}
        </p>
      )}

      <div className="col-span-2">
        <label className="block mb-2 text-sm font-medium">Description</label>
        <ReactQuill
          className="h-48"
          value={text}
          onChange={handleDescriptionChange}
        />
      </div>

      <div className="col-span-2 text-right mt-12">
        <button className="btn font-bold text-base w-48 text-white background-teal rounded-lg">
          Save Now
        </button>
      </div>
    </form>
  );
};

export default Form;

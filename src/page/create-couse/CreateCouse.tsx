import { useEffect, useState } from "react";
import ModalForm from "../../components/create-course/form/ModalForm";
import Sidebar from "../../components/create-course/Sidebar";
import Card from "../../components/create-course/create-main/Card";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { getCoursesAdmin } from "../../redux/features/course/courseSlice";

const CreateCouse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    dispatch(getCoursesAdmin());
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* <Sidebar /> */}
      <div className="w-full">
        <div className="background-teal text-white p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Create course</h1>
              {/* <p className="text-lg">Introduction about XD</p> */}
            </div>
            <div className="text-right">
              <span className="block text-lg">1 course</span>
            </div>
          </div>
        </div>
        <div className="p-8">
          {/* open Modal*/}
          <button
            className="btn background-teal rounded-lg text-white"
            onClick={toggleModal}
          >
            + &ensp;Create Course
          </button>

          {/* <Form /> */}
          {isOpen && (
            <ModalForm toggleModal={toggleModal} closeModal={closeModal} />
          )}

          {/* show coruse */}
          <div className="min-h-screen bg-gray-100">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCouse;

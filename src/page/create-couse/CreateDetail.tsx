import React, { useState } from "react";
import Detail from "../../components/create-course/create-detail/Detail";


type Props = {};

const CreateDetail = (props: Props) => {


  return (
    <div className="container mx-auto w-4/5 p-6">
      {/* top */}
      <div className="grid grid-cols-1 md:grid-cols-3 h-96 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        {/* Left Section (Image) */}
        <div className="col-span-2 relative">
          <img
            src="https://placehold.co/600x400"
            alt="Course Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section (Details) */}
        <div className="col-span-1 p-6 space-y-4">
          {/* Course Title */}
          <h2 className="text-3xl text-gray-800">
            คอร์สออนไลน์สอนสร้าง RESTful API ด้วยภาษา Go (Golang) และ Gin พร้อม
            Workshop
          </h2>

          {/* Course Description */}
          <p className="text-gray-600 text-lg">
            คอร์สสอนการใช้งานภาษา Go (Golang) ตั้งแต่เริ่มต้น จนสร้าง RESTful
            API ได้ด้วยตนเอง
          </p>

          {/* Pricing */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-500 line-through text-xl">
              5,950 บาท
            </span>
            <span className="text-teal-500 text-3xl font-semibold">
              3,500 บาท
            </span>
          </div>

          {/* Register Button */}
          <button className="btn btn-primary w-full text-gray-800 text-2xl">
            ลงทะเบียน
          </button>
        </div>
      </div>

      {/* detail */}
      <Detail />
    </div>
  );
};

export default CreateDetail;

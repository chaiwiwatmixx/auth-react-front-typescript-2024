import React from "react";
import TabSidebar from "./TabSidebar";

const Sidebar = () => {
  const lessons = [
    { title: "Course 1 : Introduction about XD1", time: "30 mins" },
    { title: "Course 2 : Introduction about XD2", time: "30 mins" },
    { title: "Course 3 : Introduction about XD3", time: "30 mins" },
    { title: "Course 4 : Introduction about XD4", time: "30 mins" },
    // Add more lessons here as needed
  ];

  return (
    <div className="bg-white shadow-md p-4 w-1/4">
      <h3 className="text-lg font-semibold mb-4">Your Course</h3>
      {lessons.map((lesson, index) => (
        <TabSidebar title={lesson.title} index={index} />
      ))}
    </div>
  );
};

export default Sidebar;

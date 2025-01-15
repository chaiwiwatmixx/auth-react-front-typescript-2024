import { FaPlayCircle, FaLock, FaCheck } from "react-icons/fa";

const lessons = [
  {
    id: 1,
    title: "Lessons with video content",
    duration: "12:30",
    isPreview: true,
    isCompleted: true,
  },
  {
    id: 2,
    title: "Lessons with video content",
    duration: "10:05",
    isPreview: true,
    isCompleted: true,
    highlight: true,
  },
  {
    id: 3,
    title: "Lessons with video content",
    duration: "02:25",
    isPreview: true,
    isLocked: true,
  },
];
type Props = {};

const Accordion = (props: Props) => {
  return (
    <div className="w-full">
      {/* Accordion */}
      <div className="collapse collapse-arrow border border-gray-200 rounded-lg mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-medium flex justify-between">
          <span>Lessons With Video Content</span>
          <span className="text-sm text-gray-500">5 วีดีโอ • 45 นาที</span>
        </div>
        <div className="collapse-content">
          {/* Video List */}
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="mb-2 flex justify-between items-center"
            >
              <div className="flex items-center space-x-2">
                <FaPlayCircle className="text-gray-400" />
                <span
                  className={`${
                    lesson.highlight ? "text-orange-500" : "text-black"
                  }`}
                >
                  {lesson.title}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {lesson.isPreview && (
                  <button className="btn btn-sm btn-primary">ดูตัวอย่าง</button>
                )}
                <span className="text-sm text-gray-500">{lesson.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Accordions */}
      <div className="collapse collapse-arrow border border-gray-200 rounded-lg mb-4">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-medium flex justify-between">
          <span>Lessons With Video Content</span>
          <span className="text-sm text-gray-500">5 Lessons • 45 Mins</span>
        </div>
        <div className="collapse-content">
          <p className="text-gray-600">Content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

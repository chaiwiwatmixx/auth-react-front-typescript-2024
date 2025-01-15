import { useState } from "react";
import {
  FaPlayCircle,
  FaVideo,
  FaRegBookmark,
  FaBook,
  FaChalkboard,
} from "react-icons/fa";
import Accordion from "./Accordion";

type Props = {};

const Detail = (props: Props) => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(id); // เปลี่ยนแท็บที่แอคทีฟ
    }
  };
  return (
    <div className="container mx-auto py-6">
      <div className="flex space-x-8">
        {/* left section */}
        <div className="w-8/12 border border-gray-300 rounded-t-xl">
          {/* Menu Tabs */}
          <div className=" h-16 flex justify-between border border-gray-300 p-3 mb-10 rounded-t-xl">
            <button
              onClick={() => handleScroll("overview")}
              className={`px-4 py-2 text-base font-medium hover:text-teal-500 ${
                activeTab === "overview"
                  ? "bg-gray-100 text-teal-500 rounded-md"
                  : ""
              }`}
            >
              รายละเอียดคอร์ส
            </button>
            <button
              onClick={() => handleScroll("curriculum")}
              className={`px-4 py-2 text-base font-medium border-l border-gray-300 hover:text-teal-500 ${
                activeTab === "curriculum"
                  ? "bg-gray-100 text-teal-500 rounded-md"
                  : ""
              }`}
            >
              เนื้อหาบทเรียน
            </button>
            <button
              onClick={() => handleScroll("instructor")}
              className={`px-4 py-2 text-base font-medium border-l border-gray-300 hover:text-teal-500 ${
                activeTab === "instructor"
                  ? "bg-gray-100 text-teal-500 rounded-md"
                  : ""
              }`}
            >
              คอร์สนี้เหมาะสำหรับใคร
            </button>
            <button
              onClick={() => handleScroll("faqs")}
              className={`px-4 py-2 text-base font-medium border-l border-gray-300 hover:text-teal-500 ${
                activeTab === "faqs"
                  ? "bg-gray-100 text-teal-500 rounded-md"
                  : ""
              }`}
            >
              คำถามที่พบบ่อย
            </button>
            <button
              onClick={() => handleScroll("reviews")}
              className={`px-4 py-2 text-base font-medium border-l border-gray-300 hover:text-teal-500 ${
                activeTab === "reviews"
                  ? "bg-gray-100 text-teal-500 rounded-md"
                  : ""
              }`}
            >
              ผู้สอน
            </button>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Overview Section */}
            <div id="overview" className="p-4 rounded-lg shadow-md">
              <h2 className="text-2xl mb-2">รายละเอียดคอร์ส</h2>
              <p className="text-gray-600">
                การเรียนภาษาเยอรมัน เป็นหนึ่งในความได้เปรียบ ทั้งด้านการศึกษา
                และการทํางาน
                แต่ข้อจํากัดที่ผ่านมาในอดีตทําให้การเรียนภาษาเยอรมันอยู่ในวงจํากัด
                เนื่องจากการเรียนภาษาเยอรมันเป็นเรื่องยาก และมีราคาแพง
                แต่เนื่องด้วยเทคโนโลยีในโลกดิจิตอล
                ทําให้เกิดรูปแบบการกระจายความรู้ที่มีประสิทธิภาพในราคาที่เข้าถึงได้
                เราจึงเป็นส่วนหนึ่งที่พร้อมสนับสนุนการเรียนภาษาเยอรมัน
                เพื่อให้เกิดประโยชน์ตามที่กล่าวมาแก่ผู้เรียน
                เรามีหนังสือและคอร์สออนไลน์ที่ออกแบบมาเพื่อคนไทยโดยเฉพาะ
                จึงมั่นใจได้ว่า ทั้งคอร์สเรียนและหนังสือจะเป็นประโยชน์และคุ้มค่า
                สำหรับผู้ที่ตั้งใจเรียนภาษาเยอรมันอย่างแน่นอน
              </p>
            </div>

            {/* Accordion Section */}
            <div id="curriculum" className="p-4 rounded-lg shadow-md">
              <h2 className="text-2xl mb-2">เนื้อหาบทเรียน</h2>
              <Accordion />
            </div>

            {/* Instructor Section */}
            <div id="instructor" className="p-4 rounded-lg shadow-md">
              <h2 className="text-2xl mb-2">คอร์สนี้เหมาะสำหรับใคร</h2>
              <ul className="list-disc pl-5">
                <li className="text-gray-600">
                  Developer ที่ต้องการเรียนรู้วิธีการใช้ภาษา Go ในการทำงานจริง
                  เพื่อสร้าง API Services
                </li>
                <li className="text-gray-600">
                  คนที่เคยศึกษาภาษา Go มาเบื้องต้น และอยากเรียนรู้การใช้งานภาษา
                  Go มากขึ้น
                </li>
                <li className="text-gray-600">
                  คนที่สนใจอยากทำงานเป็น Backend Development โดยเรียนรู้การสร้าง
                  API Services ด้วยภาษา Go
                </li>
              </ul>
            </div>

            {/* FAQs Section */}
            <div id="faqs" className="p-4 rounded-lg shadow-md">
              <h2 className="text-2xl mb-2">คำถามที่พบบ่อย</h2>
              <div className="collapse collapse-plus border border-gray-200 rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                  <span>คอร์สออนไลน์สามารถกลับมาเรียนซ้ำได้หรือไม่</span>
                </div>
                <div className="collapse-content">
                  <p className="text-gray-600">
                    สำหรับคอร์สที่ซื้อในนามบุคคลทั่วไป คอร์สมีอายุตลอดชีพ
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus border border-gray-200 rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title text-lg font-medium">
                  <span>คอร์สออนไลน์สามารถกลับมาเรียนซ้ำได้หรือไม่</span>
                </div>
                <div className="collapse-content">
                  <p className="text-gray-600">
                    สำหรับคอร์สที่ซื้อในนามบุคคลทั่วไป คอร์สมีอายุตลอดชีพ
                  </p>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div id="reviews" className="p-4 rounded-lg shadow-md">
              <h2 className="text-2xl mb-2">ผู้สอน</h2>
              <div className="flex items-center p-4 rounded-lg space-x-4">
                {/* Profile Image */}
                <div className="w-24 h-24">
                  <img
                    src="https://placehold.co/150x150"
                    alt="Instructor"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Text Content */}
                <div>
                  <h3 className="text-lg font-bold">Chaiwiwat Foungpaisarn</h3>
                  <p className="text-gray-600">
                    ที่ปรึกษาด้านเทคโนโลยีและการเขียนโปรแกรมบอร์น
                    ฐานที่แห่งการเผยแพร่ความรู้ด้านวิทยาการ
                  </p>
                  <ul className="list-disc pl-5">
                    <li className="text-gray-600">
                      อดีต Developer, Thoughtworks
                    </li>
                    <li className="text-gray-600">Technical Lead, KTB</li>
                    <li className="text-gray-600">Golang Developer, dtac</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub Detail */}
        <div className="flex flex-col space-y-4 text-gray-800">
          {/* Item 1: วิดีโอ */}
          <div className="flex items-start space-x-4">
            <FaPlayCircle className="text-teal-500 w-8 h-8" />
            <div>
              <p className="font-semibold text-lg">10 ชั่วโมง</p>
            </div>
          </div>

          {/* Item 2: เรียนได้ทุกที่ */}
          <div className="flex items-start space-x-4">
            <FaVideo className="text-teal-500 w-8 h-8" />
            <div>
              <p className="font-semibold text-lg">50 วีดีโอ</p>
            </div>
          </div>

          {/* Item 3: ไฟล์ดาวน์โหลด */}
          <div className="flex items-start space-x-4">
            <FaBook className="text-teal-500 w-8 h-8" />
            <div>
              <p className="font-semibold text-lg">10 บทเรียน</p>
            </div>
          </div>

          {/* Item 4: ประกาศนียบัตร */}
          <div className="flex items-start space-x-4">
            <FaRegBookmark className="text-teal-500 w-8 h-8" />
            <div>
              <p className="font-semibold text-lg">
                ไม่ต้องมีพื้นฐานก็เรียนได้
              </p>
            </div>
          </div>

          {/* Item 5: แบบทดสอบ */}
          <div className="flex items-start space-x-4">
            <FaChalkboard className="text-teal-500 w-8 h-8" />
            <div>
              <p className="font-semibold text-lg">มีโปรเจคให้ลงมือทำจริง</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;

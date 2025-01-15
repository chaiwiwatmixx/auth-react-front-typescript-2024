import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo and Description */}
        <div>
          <div className="text-2xl font-bold text-blue-600 flex items-center space-x-2">
            <span>TechUp</span>
          </div>
          <p className="text-gray-600 mt-2">
            ก้าวสู่สายงาน Software และ Data
            ด้วยคอร์สและคอมมูนิตี้ที่สนับสนุนคุณตลอดเส้นทาง
          </p>
          <p className="text-gray-400 text-sm mt-4">
            © Copyright 2024 TechUp Training Company Limited
          </p>
        </div>

        {/* Additional Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            ข้อมูลเพิ่มเติม
          </h3>
          <ul className="text-gray-600 mt-4 space-y-2">
            <li>คอร์สของเรา</li>
            <li>บทความ</li>
            <li>คำถามที่พบบ่อย</li>
            <li>ร่วมงานกับเรา</li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">นโยบาย</h3>
          <ul className="text-gray-600 mt-4 space-y-2">
            <li>เงื่อนไขและข้อตกลง</li>
            <li>นโยบายส่วนบุคคล</li>
            <li>นโยบายการใช้คุกกี้</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Social Media</h3>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-600 transition-colors"
            >
              <i className="fab fa-line"></i>
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700 transition-colors"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

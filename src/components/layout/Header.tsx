import React from "react";

const Header = () => {
  return (
    <header className="background-teal text-white py-4">
      <div className="container mx-auto w-4/5 flex justify-between items-center ">
        <div className="text-2xl font-bold">M-CODE</div>
        <nav className="space-x-12">
          <a href="#home" className="hover:underline font-light text-base">
            หน้าแรก
          </a>
          <a href="#courses" className="hover:underline font-light text-base">
            คอร์สเรียน
          </a>
          <a href="#careers" className="hover:underline font-light text-base">
            บทความ
          </a>
          <a href="#blog" className="hover:underline font-light text-base">
            เกี่ยวกับผู้สอน
          </a>
          <a href="#about" className="hover:underline font-light text-base">
            ติดต่อ
          </a>
        </nav>
        <div className="space-x-4">
          <button className="btn btn-sm text-base border-none">ลงทะเบียน</button>
          <button className="btn btn-sm text-base bg-opacity-30 text-white border-none">เข้าสู่ระบบ</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

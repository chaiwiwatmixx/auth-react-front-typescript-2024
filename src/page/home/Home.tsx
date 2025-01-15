import BgProgramer from "../../assets/p1.svg";

const Home = () => {
  return (
    <div>
      <div className="relative background-teal text-white">
        {/* Hero Content */}
        <div className="container mx-auto w-4/5 min grid md:grid-cols-2 items-center gap-8 pt-20 h-96">
          {/* Left Section */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              <span className="text-orange-400">เรียนเขียนโปรแกรม</span>{" "}
              ทักษะแห่งอนาคต
            </h1>
            <p className="text-lg mb-6 font-light">
              เว็บไซต์สำหรับเรียนรู้ สู่การเป็น Programmer มืออาชีพ
              รวมทั้งอัพเดท ข่าวสาร บทความ ด้านการเขียนโปรแกรม
            </p>
            <div className="flex items-center space-x-4">
              <button className="btn bg-opacity-30 text-white border-none text-lg">
                ดูคอร์สเรียน
              </button>
              <button className="btn btn-outline text-lg">ติดต่อปรึกษา</button>
            </div>
          </div>

          {/* Right Section */}
          <div className="absolute bottom-[-80px] right-36">
            <img src={BgProgramer} alt="Student" className="rounded-lg" />


          </div>
        </div>
      </div>
      {/* Curved Background */}
      <div className="h-28 background-teal elliptical"></div>
    </div>
  );
};

export default Home;

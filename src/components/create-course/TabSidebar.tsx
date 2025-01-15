interface TitleProp {
  title: string;
  index: number;
}

const TabSidebar = ({ title, index }: TitleProp) => {
  return (
    <div
      key={index}
      className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-2 rounded-lg flex justify-between items-center"
    >
      <div>{title}</div>
    </div>
  );
};

export default TabSidebar;

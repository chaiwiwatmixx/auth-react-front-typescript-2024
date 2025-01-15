import { CardProps } from "../../../models/course-model";

const CardComponent = ({
  title,
  subDescription,
  originalPrice,
  price,
  image,
}: CardProps) => {
  return (
    <div className="card bg-white shadow-xl rounded-lg">
      <figure>
        <img
          src={image}
          alt={title}
          className="rounded-t-lg w-full h-64 object-cover"
        />
      </figure>
      <div className="p-4">
        <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
          <div>
            <span>Design</span>
          </div>
          <div>
            <span>3 Month</span>
          </div>
        </div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">{subDescription}</p>
        <div className="text-right">
          {/* <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/30"
              alt={author}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">{author}</span>
          </div> */}
          <div className="flex justify-end">
            <p className="text-gray-500 line-through mr-4">฿{originalPrice}</p>
            <p className="text-teal-500 font-bold">฿{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

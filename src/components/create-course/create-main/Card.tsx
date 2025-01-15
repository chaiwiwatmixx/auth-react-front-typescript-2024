import { useSelector } from "react-redux";
import CardComponent from "./CardComponent";
import { RootState } from "../../../redux/store";

// const cardData = [
//   {
//     title: "AWS Certified Solutions Architect",
//     price: "80",
//     originalPrice: "100",
//     duration: "3 Month",
//     imageUrl: "https://www.freecodecamp.org/news/content/images/2022/10/golang.png",
//     author: "Lina",
//   },
//   {
//     title: "AWS Certified Solutions Architect",
//     price: "80",
//     originalPrice: "100",
//     duration: "3 Month",
//     imageUrl: "https://www.freecodecamp.org/news/content/images/2022/10/golang.png",
//     author: "Lina",
//   },
//   {
//     title: "AWS Certified Solutions Architect",
//     price: "80",
//     originalPrice: "100",
//     duration: "3 Month",
//     imageUrl: "https://www.freecodecamp.org/news/content/images/2022/10/golang.png",
//     author: "Lina",
//   },
//   {
//     title: "AWS Certified Solutions Architect",
//     price: "80",
//     originalPrice: "100",
//     duration: "3 Month",
//     imageUrl: "https://www.freecodecamp.org/news/content/images/2022/10/golang.png",
//     author: "Lina",
//   },
//   {
//     title: "AWS Certified Solutions Architect",
//     price: "80",
//     originalPrice: "100",
//     duration: "3 Month",
//     imageUrl: "https://www.freecodecamp.org/news/content/images/2022/10/golang.png",
//     author: "Lina",
//   },
//   {
//     title: "AWS Certified Solutions Architect",
//     price: "80",
//     originalPrice: "100",
//     duration: "3 Month",
//     imageUrl: "https://www.freecodecamp.org/news/content/images/2022/10/golang.png",
//     author: "Lina",
//   },
//   {
//     title: "AWS Certified Solutions Architect",
//     price: "80",
//     originalPrice: "100",
//     duration: "3 Month",
//     imageUrl: "https://www.freecodecamp.org/news/content/images/2022/10/golang.png",
//     author: "Lina",
//   },
//   {
//     title: "AWS Certified Solutions Architect",
//     price: "$80",
//     originalPrice: "$100",
//     duration: "3 Month",
//     imageUrl: "https://www.freecodecamp.org/news/content/images/2022/10/golang.png",
//     author: "Lina",
//   },
//   // Add more card data here
// ];

const Card = () => {
  const { courses } = useSelector((state: RootState) => state.course);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((item, index) => (
          <CardComponent
            key={index}
            title={item.title}
            subDescription={item.subDescription}
            originalPrice={item.originalPrice}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;

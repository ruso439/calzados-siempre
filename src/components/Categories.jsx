import { FaGlobe, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { classes } from "./mutualClasses";

const CategoryLink = ({ children }) => {
  <li className="text-white">
    <Link to={"/"}>
      <button className={classes}>{children}</button>
    </Link>
  </li>;
};

export const Categories = () => {
  return (
    <>
      <CategoryLink>
        <FaGlobe />
      </CategoryLink>

      <CategoryLink>
        <FaFacebook />
      </CategoryLink>

      <CategoryLink>
        <FaInstagram />
      </CategoryLink>
    </>
  );
};

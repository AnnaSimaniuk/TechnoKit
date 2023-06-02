import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import { selectProducts } from "../../../../store/slices/products.slice";
import { fetchProducts } from "../../../../store/actionCreator/products.actionCreator";
import ProductCard from "../../../ProductCard/ProductCard";
import { CategoriesProducts } from "../../../Sliders/slidersConfig";
import s from "./ProductsList.module.scss";

const ProductsList = ({ category }) => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [productsCategory, setProductsCategory] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts(""));
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(products).length > 0) {
      const allProductsCategory = products.products.filter(
        (product) => product.categories === category,
      );
      setProductsCategory(allProductsCategory);
    }
  }, [category, products]);

  return (
    <Slider className={s.slider} {...CategoriesProducts}>
      {productsCategory.length > 0 &&
        productsCategory.map((item) => (
          <div key={item.itemNo}>
            <ProductCard
              image={item.imageUrls[0]}
              title=" "
              description={item.name}
              oldPrice={item.previousPrice.toString()}
              currentPrice={item.currentPrice.toString()}
              available={item.quantity > 5}
              rating={item.rating.toString()}
              alt={item.name}
            />
          </div>
        ))}
    </Slider>
  );
};

ProductsList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductsList;
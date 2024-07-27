import { Link } from "react-router-dom";
import { priceBeforeDiscount, convertPrice } from "~/utils/convert";
import { GetProduct } from "~/types";
import styles from "~/styles/Shop/ProductItem.module.scss";
import useLazyImageObserver from "~/hook/useLazyImageObserver";
import altImage from "/public/assets/products/altImage.jpg";

const ProductItem = ({ product }: { product: GetProduct }) => {
  const { imageRef, imageSrc } = useLazyImageObserver(product.thumbnail || "");

  return (
    <Link to={product.id}>
      <li className={styles.productContainer}>
        <div className={styles.productPhotoBox}>
          <img
            ref={imageRef}
            src={imageSrc || altImage}
          />
        </div>
        <div className={styles.productInfo}>
          <strong className={styles.productName}>{product.title}</strong>
        </div>
        <div className={styles.productPriceBox}>
          <p className={styles.priceDiscount}>
            {product.discountRate ? `${product.discountRate}%` : ""}
          </p>
          <strong className={styles.productPrice}>
            ₩{convertPrice(product.price)}
          </strong>
          <p className={styles.priceThrough}>
            {product.discountRate
              ? `₩${convertPrice(
                  priceBeforeDiscount(product.price, product.discountRate)
                )}`
              : ""}
          </p>
        </div>
      </li>
    </Link>
  );
};

export default ProductItem;

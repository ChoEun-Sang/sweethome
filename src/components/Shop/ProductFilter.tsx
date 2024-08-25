import React, { useCallback } from "react";
import styles from "~/styles/Shop/Shop.module.scss";
import { ShopAllProduct } from "~/types";
import { categorys } from "~/utils/constants";

interface ProductFilterProps {
  setAllProducts: React.Dispatch<React.SetStateAction<ShopAllProduct>>;
  originalProducts: ShopAllProduct;
}

function ProductFilter({
  setAllProducts,
  originalProducts
}: ProductFilterProps) {
  // 상품 카테고리별 필터 기능
  const handleCategoryFilter = useCallback(
    (e: React.MouseEvent<HTMLInputElement>) => {
      const category = (e.target as HTMLButtonElement).value;
      if (category === "ALL") {
        setAllProducts(originalProducts);
      } else {
        setAllProducts(
          originalProducts.filter(product => product.tags === category)
        );
      }
    },
    [setAllProducts, originalProducts]
  );

  return (
    <ul className={styles.menu}>
      <li>
        {categorys.map((category, index) => (
          <input
            key={`${category}-${index}`}
            type="button"
            defaultValue={category}
            onClick={handleCategoryFilter}
          />
        ))}
      </li>
    </ul>
  );
}

export default ProductFilter;

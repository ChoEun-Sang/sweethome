import { useState, useEffect } from "react";
import { getAllProducts } from "~/api/products";
import ProductFilter from "~/components/Shop/ProductFilter";
import ProductItem from "~/components/Shop/ProductItem";
import styles from "~/styles/Shop/Shop.module.scss";
import { ShopAllProduct, GetProduct } from "~/types";

const Shop = () => {
  const [allProducts, setAllProducts] = useState<ShopAllProduct>([]);
  const [originalProducts, setOriginalProducts] = useState<ShopAllProduct>([]);

  useEffect(() => {
    spreadAllProducts();
  }, []);

  const spreadAllProducts = async () => {
    try {
      const res = await getAllProducts();
      setAllProducts(res);
      setOriginalProducts(res);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <>
      <section className={styles.shop}>
        <div className={styles.menuWrap}>
          <ProductFilter
            setAllProducts={setAllProducts}
            originalProducts={originalProducts}
          />
        </div>
        <div className={styles.productListWrap}>
          <ul className={styles.productList}>
            {allProducts.map((product: GetProduct) => (
              <ProductItem
                key={product.id}
                product={product}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Shop;

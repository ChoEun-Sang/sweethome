import { useEffect, useState } from "react";
import { getAllProducts } from "~/api/products";
import { Product } from "~/types";
import styles from "~/styles/TheSearchBar.module.scss";

const TheSearchBar = ({ search, onChange }: any) => {
  const [allProducts, setAllProducts] = useState([]);

  // 전체 상품 조회
  const getAllProductsHandler = async () => {
    try {
      const res = await getAllProducts();
      setAllProducts(res);
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getAllProductsHandler();
  }, []);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search.trim() === "") {
      onChange = "";
      return;
    }
    allProducts.map((product: Product) => {
      if (
        product.title
          .replace(" ", "")
          .toLocaleLowerCase()
          .includes(search?.toLocaleLowerCase().replace(" ", ""))
      ) {
        window.location.href = `/shop/${product.id}`;
      } else {
        return;
      }
    });
  };
  const handleRedirection = (id: string) => {
    location.href = `/shop/${id}`;
  };
  return (
    <>
      <div className={styles.searchContainer}>
        <form
          className={styles.search}
          onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="제품을 검색해보세요."
            className={styles.searchBar}
            name="searchText"
            defaultValue={search || ""}
            onChange={e => onChange(e.target.value)}
          />
        </form>
        <div className={`${styles.searchForm} ${styles.none}`}>
          {allProducts.map((product: Product, index: number) =>
            search === "" ? (
              <div key={index}></div>
            ) : product.title
                .replace(" ", "")
                .toLocaleLowerCase()
                .includes(search?.toLocaleLowerCase().replace(" ", "")) ? (
              <div
                className={styles.searchKeyword}
                onClick={() => handleRedirection(product.id)}>
                {product.title}
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};
export default TheSearchBar;

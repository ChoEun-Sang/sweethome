import { useState, useEffect } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { BsPencilSquare } from "react-icons/bs";
import { addProduct, getAllProducts, deleteProduct } from "~/api/products";
import { SELECT_TAGS } from "~/utils/constants";
import { convertPrice } from "~/utils/convert";
import EditProductModal from "~/components/Admin/EditProductModal";
import Select from "~/components/common/Select";
import Loading from "~/components/common/Loading";
import styles from "~/styles/Admin/AdminProduct.module.scss";
import { AllProduct, AddProductBody } from "~/types";

const AdminProduct = () => {
  const [allProducts, setAllProducts] = useState<AllProduct>([]);
  const [productThumb, setProductThumb] = useState<string>("");
  const [productPhoto, setProductPhoto] = useState<string>("");
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    tags: "",
    discountRate: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [watch, setWatch] = useState(false);
  const [productIDX, setProductIDX] = useState(0);

  // 상품 수정 버튼 클릭 시 모달창 오픈
  const showModal = (id: string) => {
    setModalOpen(true);
    setProductId(id);
  };

  useEffect(() => {
    getAllProductsHandler();
  }, [watch]);

  // 전체 상품 목록 조회
  const getAllProductsHandler = async () => {
    setIsLoading(true);
    try {
      const res = await getAllProducts();
      setAllProducts(res);
    } catch (error) {
      alert("상품 출력 실패!");
    }
    setIsLoading(false);
  };

  // 상품 수정 input 핸들러
  const onInputChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  // 상품 등록
  const addProductHandler = async () => {
    const body: AddProductBody = {
      title: product.title,
      price: Number(product.price),
      description: product.description,
      tags: product.tags,
      thumbnailBase64: productThumb,
      photoBase64: productPhoto,
      discountRate: Number(product.discountRate),
      isSoldOut: isChecked
    };

    try {
      setIsLoading(true);
      await addProduct(body);
      setWatch(!watch);
      alert("상품 등록 성공!");
      setProduct({
        title: "",
        price: "",
        description: "",
        tags: "",
        discountRate: ""
      });
      setProductThumb("");
      setProductPhoto("");
    } catch (error) {
      alert("상품 등록 실패!");
    }
    setIsLoading(false);
  };

  // 썸네일 base64 인코딩
  const thumbBase64Handler = (e: React.ChangeEvent) => {
    const target: any = e.target as HTMLInputElement;
    const file = target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>(resolve => {
      reader.onload = () => {
        setProductThumb(reader.result as string);
        resolve();
      };
    });
  };

  // 상세사진 base64 인코딩
  const photoBase64Handler = (e: React.ChangeEvent) => {
    const target: any = e.target as HTMLInputElement;
    const file = target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise<void>(resolve => {
      reader.onload = () => {
        setProductPhoto(reader.result as string);
        resolve();
      };
    });
  };

  // 상품 삭제
  const deleteProductHandler = async (id: any) => {
    try {
      const res = await deleteProduct(id);
      if (res) {
        const updateProduct = allProducts.filter(product => product.id !== id);
        setAllProducts(updateProduct);
      } else {
        alert("상품 삭제 실패하였습니다.");
      }
    } catch (error) {
      alert("상품 삭제 실패하였습니다.");
    }
  };

  return (
    <>
      {isLoading ? <Loading /> : null}
      <section className={styles.adminProduct}>
        <div className={styles.addProductContainer}>
          <div className={styles.addProduct}>
            <div className={styles.title}>
              <h2>상품 등록</h2>
            </div>
            <form>
              <div className={styles.productTitle}>
                <label className={styles.label}>
                  <p>상품명</p>
                  <input
                    type="text"
                    className={styles.input}
                    name="title"
                    defaultValue={product.title}
                    onChange={onInputChangeHandler}
                  />
                </label>
              </div>
              <div className={styles.productPrice}>
                <label className={styles.label}>
                  <p>상품 가격</p>
                  <input
                    type="number"
                    className={styles.input}
                    name="price"
                    defaultValue={product.price}
                    onChange={onInputChangeHandler}
                  />
                </label>
              </div>
              <div className={styles.productDescription}>
                <label className={styles.label}>
                  <p>상품 설명</p>
                  <input
                    type="text"
                    className={styles.input}
                    name="description"
                    defaultValue={product.description}
                    onChange={onInputChangeHandler}
                  />
                </label>
              </div>
              <div className={styles.productTag}>
                <label className={styles.label}>
                  <p>상품 태그</p>
                  <Select
                    name="tags"
                    options={SELECT_TAGS}
                    value={product.tags}
                    onChange={e => onInputChangeHandler(e)}
                  />
                </label>
              </div>
              <div className={styles.productThumbnail}>
                <label className={styles.label}>
                  <p>썸네일 사진</p>
                  <input
                    type="file"
                    className={styles.input}
                    onChange={e => thumbBase64Handler(e)}
                    accept="image/*"
                  />
                </label>
              </div>
              <div className={styles.productPhoto}>
                <label className={styles.label}>
                  <p>상세 사진</p>
                  <input
                    type="file"
                    className={styles.input}
                    onChange={e => photoBase64Handler(e)}
                    accept="image/*"
                  />
                </label>
              </div>
              <div className={styles.productDiscount}>
                <label className={styles.label}>
                  <p>할인율</p>
                  <input
                    type="number"
                    className={styles.input}
                    name="discountRate"
                    defaultValue={product.discountRate}
                    onChange={onInputChangeHandler}
                  />
                </label>
              </div>
              <div className={styles.productIsSoldOut}>
                <label className={styles.label}>
                  <span>품절 여부</span>
                  <input
                    type="checkbox"
                    className={styles.input}
                    onChange={() => setIsChecked(!isChecked)}
                  />
                </label>
              </div>
              <input
                type="button"
                defaultValue="상품 등록"
                className={styles.btn}
                onClick={addProductHandler}
                disabled={isLoading ? true : false}
              />
            </form>
          </div>

          <div className={styles.adminProductList}>
            <div className={styles.title}>
              <p>모든 상품 조회</p>
            </div>
            <div className={styles.allProduct}>
              <div
                className={styles.wrapper}
                key="index">
                <div className={styles.list_nav}>
                  <div className={styles.list_nav_container}>
                    <div>NO.</div>
                    <div>상품 태그</div>
                    <div>상품 이름</div>
                    <div>상품 가격</div>
                    <div>할인율</div>
                    <div>품절 여부</div>
                    <div>수정/삭제</div>
                  </div>
                </div>
                <div className={styles.list}>
                  <ul className={styles.list_container}>
                    {allProducts.map((product, i) => (
                      <li key={product.id}>
                        <div>{i + 1}</div>
                        <div>{product.tags}</div>
                        <div>{product.title}</div>
                        <div>{convertPrice(product.price)}</div>
                        <div>{product.discountRate}</div>
                        <div>{product.isSoldOut ? "⭕️" : "❎"}</div>
                        <div className={styles.icon}>
                          <BsPencilSquare
                            className={styles.modifyBtn}
                            onClick={() => {
                              showModal(product.id);
                              setProductIDX(i);
                            }}
                          />
                          <TiDeleteOutline
                            className={styles.deleteBtn}
                            onClick={() => deleteProductHandler(product.id)}
                          />
                          {modalOpen && (
                            <EditProductModal
                              setModalOpen={setModalOpen}
                              title={`상품 정보 수정`}
                              allProducts={allProducts}
                              setAllProducts={setAllProducts}
                              productId={productId}
                              productIDX={productIDX}
                              watch={watch}
                              setWatch={setWatch}
                            />
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminProduct;

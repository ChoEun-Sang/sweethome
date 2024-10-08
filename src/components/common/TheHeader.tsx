import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { logOut } from "~/api/user";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingBag, FaUserAlt } from "react-icons/fa";
import TheSearchBar from "~/components/common/TheSearchBar";
import styles from "~/styles/TheHeader.module.scss";

const TheHeader = () => {
  const [search, setSearch] = useState("");
  const [searchIsClicked, setSearchIsClicked] = useState(false);
  const logout = useSelector((state: any) => state.logout);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 로그아웃
  const logOutHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT", state: false });
    dispatch({ type: "RETURN", account: {} });
    try {
      await logOut();
      alert("로그아웃 완료되었습니다.");
      navigate("/");
    } catch (error: any) {
      alert(error.message);
    }
  };
  useEffect(() => {
    setSearchIsClicked(false);
  }, [location.pathname]);
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">SWEET HOME</NavLink>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li className={styles.menu}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.active : "menu"
                }>
                ABOUT
              </NavLink>
            </li>
            <li className={styles.menu}>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? styles.active : "")}>
                SHOP
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.subNav}>
          <div className={styles.user}>
            {logout ? (
              <span
                className={styles.userLogout}
                onClick={logOutHandler}>
                Logout
              </span>
            ) : (
              <div>
                <span className={styles.userLogin}>
                  <NavLink to="/login">Login</NavLink>
                </span>
                <span className={styles.userSignUp}>
                  <NavLink to="/signup">Sign-Up</NavLink>
                </span>
              </div>
            )}
          </div>
          <div className={styles.icons}>
            <NavLink to="/mypage">
              <FaUserAlt className={styles.mypage} />
            </NavLink>
            <NavLink to="/cart">
              <FaShoppingBag className={styles.shoppingbag} />
            </NavLink>
            <div className={styles.search}>
              {searchIsClicked && (
                <TheSearchBar
                  className={styles.searchBar}
                  search={search}
                  onChange={(element: any) => setSearch(element)}
                />
              )}
              <AiOutlineSearch
                className={styles.searchIcon}
                onClick={() => setSearchIsClicked(!searchIsClicked)}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default TheHeader;

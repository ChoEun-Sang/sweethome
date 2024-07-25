import { Slider } from "~/routes/Home/Slider";
import styles from "~/styles/Home/Home.module.scss";

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <Slider />
        </div>
      </main>
    </>
  );
};

export default Home;

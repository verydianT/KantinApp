import styles from "../style";
import { data } from "../constants";
import Card from "../Component/Card";
import { Navbar, Cart } from '../Component';

const Home = () => {
return (
<>
    <div className="bg-black w-full h-screen overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
          <Cart/>
        </div>
      </div>

      <div id="home" className={`bg-primary ${styles.flexCenter}  flex-col relative`}>
        <div className={`${styles.boxWidth} ${styles.boxHeight} flex flex-wrap justify-center relative z-[1]`}>
            {data.map((card) => (
                    <Card key={card.id} {...card}/>
            ))}
        </div>
      </div>
    </div>
</>
)};

export default Home;
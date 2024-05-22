import img from "../../images/ilmul-Quran Banner-01.jpg";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <img className="home-banner" src={img} alt="" />

      <Services></Services>
    </div>
  );
};

export default Home;

import MainImage from 'assets/images/main-image.png';
import Navbar from 'components/Navbar';
import './styles.css';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-image-container">
            <img src={MainImage} alt="" />
          </div>
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
        </div>
        <div className="home-card-button">
          <ButtonIcon/>
          <span>Comece agora a navegar</span>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { Link } from 'react-router-dom';
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { changeCategory } from '../redux/Reducer';
import BorderTopHome from './BorderTopHome';
import TontonSommelierTitle from '../Images/TontonSommelierTitle.png';
import QRHome from '../Images/QRHome.png';
import home from '../Images/home.png';
import logout from '../Images/logout.png';

function HomePageContainer({ dispatch }) {
  return (
    <>
      <BorderTopHome />
      <div className="HomeContent">
        <img
          src={TontonSommelierTitle}
          alt="TontonSommelier"
          className="ImgTontonHome"
        />
        <h3 className="TittleHome">Quel est vôtre coffret ?</h3>
        <div>
          <h3 className="TittleHome">
            Scannez le QRcode
            Ou entrez le code :
          </h3>
          <Link className="code QrCodeReaderImg" to="scan">
            <img
              src={QRHome}
              alt="ArrowImgTP"
              className="ImgQr"
            />
          </Link>
          <div className="InputHomeContent">
            <InputGroup>
              <Input placeholder="Entrez vôtre code" />
              <Link className="code" to="/sessionname" onClick={() => dispatch(changeCategory('1'))}>
                <InputGroupAddon addonType="append"><Button color="secondary"><FontAwesomeIcon icon={faCheck} id="IconCheck" /></Button></InputGroupAddon>
              </Link>
            </InputGroup>
          </div>
        </div>
      </div>
      <div className="HomeBottom">
        <div>
          <Link to="/home" className="HomeBottomLink">
            <img
              src={home}
              alt="home"
            />
            &nbsp;Accueil
          </Link>
        </div>
        <div>
          <Link to="/login" className="HomeBottomLink">
            Déconnexion&nbsp;
            <img
              src={logout}
              alt="logout"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

const HomePage = connect()(HomePageContainer);
export default HomePage;

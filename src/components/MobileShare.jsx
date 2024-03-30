import PropTypes from "prop-types";
import fb from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";

const MobileShare = ({ setActive }) => {
  return (
    <div className='share'>
      <div className='share__items'>
        <span>SHARE</span>
        <img src={fb} alt='Facebook Icon' />
        <img src={twitter} alt='Twitter Icon' />
        <img src={pinterest} alt='pInterest Icon' />
      </div>
      <button className='btn share-btn' onClick={() => setActive(false)}>
        <ion-icon name='arrow-redo'></ion-icon>
      </button>
    </div>
  );
};

MobileShare.propTypes = {
  setActive: PropTypes.func,
};

export default MobileShare;

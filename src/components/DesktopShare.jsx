import fb from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";

const DesktopShare = () => {
  return (
    <div className='desktop'>
      <div className='desktop__share'>
        <span>SHARE</span>
        <img src={fb} alt='Facebook Icon' />
        <img src={twitter} alt='Twitter Icon' />
        <img src={pinterest} alt='pInterest Icon' />
      </div>
      <div className='triangle'></div>
    </div>
  );
};

export default DesktopShare;

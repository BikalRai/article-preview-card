import Avatar from "./Avatar";

const CardUser = () => {
  return (
    <div className='user'>
      <Avatar />
      <div className='user__details'>
        <p className='name'>Michelle Appleton</p>
        <p>28 Jun 2020</p>
      </div>
    </div>
  );
};

export default CardUser;

import drawers from "../assets/images/drawers.jpg";

const CardImage = () => {
  return (
    <div className='card__img'>
      <img src={drawers} alt='Drawers image' />
    </div>
  );
};

export default CardImage;

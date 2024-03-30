import CardBody from "./CardBody";
import CardImage from "./CardImage";

const Card = () => {
  return (
    <div className='card'>
      <CardImage />
      {/* <div className="card__details">
        <h1 className="card__details--header">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="card__details--body">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="card__details--info">
          <div className="user">
            <img src="" alt="" className="avatar" />
            <div className="user__details">
              <p>Michelle Appleton</p>
              <p>28 Jun 2020</p>
            </div>
          </div>
          <button className="btn">share</button>
        </div>
      </div> */}
      <CardBody />
    </div>
  );
};

export default Card;

import { useEffect, useState } from "react";
import CardUser from "./CardUser";
import MobileShare from "./MobileShare";
import DesktopShare from "./DesktopShare";

const CardBody = () => {
  const [active, setActive] = useState(false);
  const [windowWidth, setWindoWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindoWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setWindoWidth(window.innerWidth)
      );
    };
  }, []);

  return (
    <div className='card__details'>
      <h1 className='card__details--header'>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p className='card__details--body'>
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>

      {/* {windowWidth >= 600 && active ? (
        <div className='card__details--info'>
          <CardUser />
          <button className='btn share-btn' onClick={() => setActive(!active)}>
            <ion-icon name='arrow-redo'></ion-icon>
          </button>
        </div>
      ) : (
        <MobileShare setActive={setActive} />
      )} */}

      {active ? (
        windowWidth > 600 ? (
          <>
            <div className='card__details--info'>
              <DesktopShare />
              <CardUser />
              <button
                className='btn share-btn'
                onClick={() => setActive(!active)}
                style={{
                  backgroundColor: active
                    ? "hsl(214, 17%, 51%)"
                    : "hsl(210, 46%, 95%)",
                  color: active ? "hsl(210, 46%, 95%)" : "hsl(214, 17%, 51%)",
                }}
              >
                <ion-icon name='arrow-redo'></ion-icon>
              </button>
            </div>
          </>
        ) : (
          <MobileShare setActive={setActive} />
        )
      ) : (
        <div className='card__details--info'>
          <CardUser />
          <button className='btn share-btn' onClick={() => setActive(!active)}>
            <ion-icon name='arrow-redo'></ion-icon>
          </button>
        </div>
      )}
    </div>
  );
};

export default CardBody;

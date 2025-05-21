import { data } from "./data";

const Cards = () => {
  return (
    <div className="cards">
      {data.map((card) => {
        return (
          <section key={card.title} className="card">
            <div
              className={`card-img`}
              style={{ backgroundColor: card.bgColor }}
            >
              <img src={card.image} alt="" />
            </div>

            <section className="card-info">
              <div>
                <p className="card-text--color">{card.title}</p>
                <p>...</p>
              </div>
              <div className="card-info--item2">
                <h2 className="card-text--color">{card.timeframes.weekly.current}hrs</h2>
                <p>Last Week - {card.timeframes.weekly.previous}hrs</p>
              </div>
            </section>
          </section>
        );
      })}
    </div>
  );
};

export default Cards;

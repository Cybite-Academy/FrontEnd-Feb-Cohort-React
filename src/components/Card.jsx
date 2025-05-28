const Card = (props) => {

  return (
    <div className={`card ${props.bgImg}`}>
      <div className="sensor tl"></div>
      <div className="sensor tm"></div>
      <div className="sensor tr"></div>
      <div className="sensor bl"></div>
      <div className="sensor bm"></div>
      <div className="sensor br"></div>
    </div>
  );

};

export default Card;

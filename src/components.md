<main>
        <Card />
        <Card img={'card2'}/>
        <Card img={'card3'}/>
</main>


const Card = (props) => {
console.log(props);
return (

<div className={`card card1 + ${props.img}`}>
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

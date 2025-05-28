import Styles from "./event.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
const EventTime = (props) => {
  return (
    <main className={`${Styles.main}  ${Styles[props.bgColor]}`}>
      <div className={Styles.date}>
        <p>May</p>
        <h2>4</h2>
      </div>

      <p className={Styles.desc}>
        Computer Hardware Desktops And Notebooks And Handhelds Oh My
      </p>

      <section className={Styles.time}>
        <div className={Styles.info}>
          <p>15:00 - 17:00</p>
          <p>online</p>
        </div>
        <FaArrowRightLong className={Styles.arrow} />
      </section>
    </main>
  );
};

export default EventTime;

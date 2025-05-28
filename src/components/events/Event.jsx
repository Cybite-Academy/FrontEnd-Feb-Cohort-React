import Styles from "./event.module.css";
import EventTime from "./EventTime";

const Event = () => {
  return (
    <div className={Styles.container}>
      <EventTime />
      <EventTime bgColor={"bgColor"} />
    </div>
  );
};

export default Event;

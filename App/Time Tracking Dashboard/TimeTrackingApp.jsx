import Cards from "./Cards";
import Profile from "./Profile";
import './TimeTrackingApp.css'

const TimeTrackingApp = () => {
  return (
    <section className="app">
      <Profile/>
      <Cards/>
    </section>
  );
};

export default TimeTrackingApp;

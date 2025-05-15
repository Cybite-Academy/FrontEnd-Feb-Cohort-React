import Navigation from "./components/Navigation/Navigation";
import STYLES from "./main.module.css";

const BrowserExentionsApp = () => {
  const {main} = STYLES;
  return (
    <main className={main}>
      <Navigation />
    </main>
  );
};

export default BrowserExentionsApp;

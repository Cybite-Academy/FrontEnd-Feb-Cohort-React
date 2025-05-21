import Extension from "./components/Extensions/Extension";
import Navigation from "./components/Navigation/Navigation";
import STYLES from "./main.module.css";

const BrowserExentionsApp = () => {
  const {main} = STYLES;
  return (
    <main className={main}>
      <Navigation />
      <Extension/>
    </main>
  );
};

export default BrowserExentionsApp;

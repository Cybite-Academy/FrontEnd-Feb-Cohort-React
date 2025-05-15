import Logo from "../../assets/images/logo.svg";
import DarkModeIcon from "../../assets/images/icon-moon.svg";
import STYLES from "./Navigation.module.css";
import NavLinks from "./NavLinks";
const Navigation = () => {
  const { header, item1, item2, link_list, active } = STYLES;
  return (
    <header className={header}>
      <section className={item1}>
        <img src={Logo} alt="logo" />
        <div>
          <img src={DarkModeIcon} alt="dark mode icon" />
        </div>
      </section>

      <section className={item2}>
        <h1>Extensions List</h1>
        <NavLinks link_list={link_list} active={active} />
      </section>
    </header>
  );
};

export default Navigation;

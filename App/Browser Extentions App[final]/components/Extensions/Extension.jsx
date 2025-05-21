import STYLES from "./Extension.module.css";
import extensionData from "../../data.json";
const Extension = () => {
  const { container, extn, rmbtn, extn_info, extn_func, toggle } = STYLES;
  return (
    <section className={container}>
      {extensionData.map((extension) => {
        return (
          <div className={extn} key={extension.name}>
            <section className={extn_info}>
              <img src={extension.logo} alt={extension.name} />

              <div>
                <h2>{extension.name}</h2>
                <p>{extension.description}</p>
              </div>
            </section>
            <section className={extn_func}>
                <div className={rmbtn}>Remove</div>
                <div className={toggle}>
                    <div></div>
                </div>
            </section>
          </div>
        );
      })}
    </section>
  );
};

export default Extension;

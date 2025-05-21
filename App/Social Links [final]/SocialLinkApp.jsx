import "./SocialLinkApp.css";
const SocialLinkApp = () => {
  return (
    <main>
      <img
        src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        alt="profile image"
      />
      <section className="profile">
        <h2>John Doe</h2>
        <p>London, United Kingdom</p>
      </section>
      <p>"Front-end developer and avid reader."</p>
      <section className="links">
        <a href="">Github</a>
        <a href="">Frontend Mentor</a>
        <a href="">Linkedin</a>
        <a href="">Twitter</a>
        <a href="">Instagram</a>
      </section>
    </main>
  );
};

export default SocialLinkApp;

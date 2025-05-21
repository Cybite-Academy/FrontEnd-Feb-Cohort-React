const Profile = () => {
  return (
    <>
      <section className="profile-container">
        <div className="profile">
          <img
            src="https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg"
            alt="profile"
          />
          <div>
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
          </div>
        </div>

        <section className="time">
          <section>
            <div>Daily</div>
            <div className="active">Weekly</div>
            <div>Monthly</div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Profile;

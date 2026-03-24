function AboutStats() {
  return (
    <section className="aboutStats">
      <div className="about-container">
        {/* LEFT */}
        <div className="about-left">
          <p className="sub">When People Collaborate,</p>
          <h2>Magic Happens</h2>

          <p className="adesc">
            We truly believe that together we achieve more! Working with the
            world's best IT professionals, we build sophisticated agile systems
            that can be customized for your niche.
          </p>

          <button className="btn">LET'S CONNECT</button>
        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div className="stat">
            <h3>2016</h3>
            <p>Founded</p>
          </div>

          <div className="stat">
            <h3>4</h3>
            <p>Locations</p>
          </div>

          <div className="stat">
            <h3>200+</h3>
            <p>Professionals</p>
          </div>

          <div className="stat">
            <h3>50+</h3>
            <p>Clients</p>
          </div>

          <div className="stat">
            <h3>8+</h3>
            <p>Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStats;

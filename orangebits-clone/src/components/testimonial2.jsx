import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import "./Testimonial2.css";

const data = [
  {
    text: "Working with Orangebits was a delightful experience. Their team consistently delivered high-quality solutions and exceeded expectations.",
    name: "Ashish Deshmukh",
    role: "CEO | Aventior, Inc.",
    img: "https://www.orangebitsindia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fashishdeshmukh.c2e3a8c3.jpeg&w=256&q=75",
  },
  {
    text: "I worked with Orangebits teams on enterprise application development. The team was professional and delivered innovative solutions.",
    name: "Jaywant Deshpande",
    role: "Founder | E-Zest",
    img: "https://www.orangebitsindia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjaywantdeshpande.669733ff.jpg&w=256&q=75",
  },
  {
    text: "Orangebits helped us transform our digital strategy. Their expertise and dedication made a significant impact on our growth.",
    name: "Bharat Parakhe",
    role: "Finacial Insurenece Advisor",
    img: "https://www.orangebitsindia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbharath-parkesh.d369a452.jpeg&w=256&q=75",
  },
  {
    text: "The collaboration was smooth and efficient. Orangebits team ensured timely delivery with excellent quality.",
    name: "Neil Salvi",
    role: "Founder| Mumercy for Life",
    img: "https://www.orangebitsindia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fneilsalvi.9c775f46.jpg&w=256&q=75",
  },
  {
    text: "Their innovative approach and strong technical knowledge helped us build scalable solutions for our business.",
    name: "John Lambie",
    role: "Founder | Dexter Singapore",
    img: "https://www.orangebitsindia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjohnlambie.145488dd.jpg&w=256&q=75",
  },
  {
    text: "Orangebits has a great team that understands business requirements and delivers beyond expectations.",
    name: "Fred K",
    role: "CTO | Saas Product",
    img: "https://www.orangebitsindia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffred.d48d4051.jpg&w=256&q=75",
  },
];

function Testimonial2() {
  return (
    <>
      <section className="testi2-section">
        <h2 className="testi2-heading">
          <span>Our Happy</span> Customers
        </h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={40}
          slidesPerView={2} // 🔥 2 cards visible
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="testi2-card">
                {/* QUOTE */}
                <p className="testi2-text">“ {item.text} ”</p>

                {/* PROFILE */}
                <div className="testi2-user">
                  <img src={item.img} alt="" />

                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="join-section">
        {/* LEFT */}
        <div className="join-left">
          <div className="pattern-grid"></div>

          {/* Profile Images */}
          <img
            src="https://media.istockphoto.com/id/1424261447/photo/proud-confident-indian-business-man-isolated-on-gray-headshot-portrait.jpg?s=1024x1024&w=is&k=20&c=6plLDf0s9_zhIFP5K5N_MuYDATGBce9ZD7Xjkw6NKQI="
            className="profile p1"
          />
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="profile p2"
          />
          <img
            src="https://images.unsplash.com/photo-1616325629936-99a9013c29c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="profile p3"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1661304704888-542933309d4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="profile p4"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1682095407277-57335d66ce06?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="profile p5"
          />
        </div>

        {/* RIGHT */}
        <div className="join-right">
          <p className="tag">Join Orangebits!</p>
          <h1>Bring Innovation to Life</h1>

          <p className="desc">
            At Orangebits – we experience limitlessness. With clients from more
            than 8+ countries globally, we celebrate diversity and innovation.
            With numerous projects and exciting opportunities, we are always
            looking for passionate professionals to join our clan.
          </p>

          <button className="cta">WORK WITH ORANGEBITS</button>
        </div>
      </section>
    </>
  );
}

export default Testimonial2;

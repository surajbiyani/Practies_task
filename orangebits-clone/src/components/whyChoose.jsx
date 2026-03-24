import {
  FaBuilding,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// import "./WhyChoose.css";
// import "./Testimonial.css";

function WhyChoose() {
  const data = [
    {
      img: "https://www.orangebitsindia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRajeshSir2.3c255b5e.png&w=3840&q=75",
      text: "Successful entrepreneurs thrive for efficiency, growth and longevity. As you map this journey, an integral part of your company’s growth depends upon having a futuristic approach. It is to deploy sustainable solutions that support your goals and vision and as a leader, you build systems that empower people around you to create a legacy.",
      name: "Rajesh Watkar",
      role: "Founder and CEO | Orangebits",
    },
    {
      img: "https://www.orangebitsindia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fparag_deote.45aff6b3.png&w=750&q=75",
      text: "Working with brilliant minds is challenging and inspiring at the same time. We believe in creating teams that empower others in today’s competitive world. This also implies that recruiting today isn’t about finding the right professional but to work with leaders who inspire others and strive for excellence.",
      name: "Parag Deote",
      role: "Founder and COO | Orangebits",
    },
    {
      img: "https://www.orangebitsindia.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsachin_mahajan.4dcf7a50.png&w=750&q=75",
      text: "Innovation is the key that befriends technology and businesses. The application of innovative solutions helps you set up processes, optimize workforce productivity and maximize profits. Deploying effective enterprise applications helps businesses grow exponentially. Thus, paving the way to high-tech Business Development.",
      name: "Sachin Mahajan",
      role: "CO-Founder and CTO | Orangebits",
    },
  ];

  return (
    <section className="why-section">
      {/* WHY CHOOSE HEADER */}
      <div className="why-header">
        <h2 className="why-subtitle">Why Choose</h2>
        <h3 className="why-title">Orangebits?</h3>

        <p className="why-desc">
          At Orangebits, our values form the bedrock of our culture, innovation,
          integrity, collaboration and client-centricity.
        </p>
      </div>

      {/* CARDS */}
      <div className="why-cards">
        <div className="why-card">
          <div className="why-icon">
            <FaBuilding />
          </div>
          <h3>Experienced Software Engineers Methodology</h3>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <FaChartLine />
          </div>
          <h3>Scalable Enterprise Architecture</h3>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <FaShieldAlt />
          </div>
          <h3>Agile Development Methodology</h3>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <FaUsers />
          </div>
          <h3>Transparent Communication Partnership</h3>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <FaProjectDiagram />
          </div>
          <h3>Industry-focused approach</h3>
        </div>
      </div>

      {/* 🔥 TESTIMONIAL INSIDE SAME SECTION */}
      <div className="testimonial-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={1}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <img src={item.img} alt="person" />

                <div className="content">
                  <p className="text">“ {item.text} ”</p>
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default WhyChoose;

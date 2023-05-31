import Slider from "react-slick";
import styles from "./AboutProductSlider.module.scss";
import "./AboutProduct.scss";
import aboutData from "./AboutProductSliderConfig";

const AboutProductSlider = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-left",
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={styles.about_slider}>
      <Slider {...settings}>
        {aboutData.map((item) => (
          <div key={item.id}>
            <div className={styles.about_container}>
              <img
                className={styles.about_image}
                src={item.img_url}
                alt={item.alt}
              />
              <div className={styles.about_content}>
                <div className={styles.about_title}>{item.header}</div>
                <div className={styles.about_text}>{item.text}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutProductSlider;

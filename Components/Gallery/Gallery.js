import React from "react";
import { Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 80px 0;

  .title {
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
  .slick-slide {
    border: none;
    opacity: 0.6;
  }

  *:focus {
    outline: 0;
    outline: none;
  }
  .slick-center {
    transform: scale(1.1);

    opacity: 1;
  }
  .images-slide {
    object-fit: cover;
    padding: 12px;
  }
  .slick-slide[aria-hidden="true"] {
    padding: 0px;
  }
  .number {
    visibility: hidden;
    margin-top: 15px;
    font-size: 18px;
  }
  .slick-center .number {
    visibility: visible;
    color: #fff;
  }
  @media only screen and (min-width: 1400px) {
    .images-slide .w-100 {
        width: 97.5% !important;
    }
  }
  @media only screen and (max-width: 767px) {
    .title {
      text-align: center;
    }
    .slick-slide {
      border: none;
      opacity: 1;
    }
    .slick-center {
      transform: scale(1);

      opacity: 1;
    }
    .number {
      visibility: visible;
      color: #fff;
    }
  }
`;
const Gallery = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,

    slidesToShow: 5,
    autoplaySpeed: 2500,
    speed: 500,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,

    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToScroll: 1,
          initialSlide: 2,
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToScroll: 1,
          initialSlide: 2,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    {
      img: "./images/slider.png",
      number: "#1000",
    },
    {
      img: "./images/slider.png",
      number: "#2000",
    },
    {
      img: "./images/slider.png",
      number: "#3000",
    },
    {
      img: "./images/slider.png",
      number: "#4000",
    },
    {
      img: "./images/slider.png",
      number: "#5000",
    },
    {
      img: "./images/slider.png",
      number: "#6000",
    },
    {
      img: "./images/slider.png",
      number: "#7000",
    },
  ];
  return (
    <Wrapper id="gallery">
      <Col md={12} className="mx-auto">
        <p className="title">Gallery</p>
        <Slider {...settings}>
          {images.map((el, i) => (
            <div>
              <div className="images-slide text-center" key={i}>
                <img src={el.img} alt="#" className="w-100" />
                <p className="number">{el.number}</p>
              </div>
            </div>
          ))}
        </Slider>
      </Col>
    </Wrapper>
  );
};
export default Gallery;

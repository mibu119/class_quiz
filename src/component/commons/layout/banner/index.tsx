import styled from "@emotion/styled";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 300px;
  background-color: #ff7385;
`;
const StyledSlider = styled(Slider)`
  margin-left: 19%;
  width: 60%;
  text-align: center;

  $wh: #ffffff;
  $bk: #000000;
  $pt: #ffc0cb;

  .slick-arrow {
    z-index: 10;
    width: 50px;
    height: 50px;
    background: rgba(#000000, 0.2);
    border-radius: 50%;
    transition: background 0.5s;
    &:hover {
      background: rgba(#ffffff, 0.9);

      &::before {
        color: rgba(#000000, 0.5);
      }
    }
    &::before {
      color: red;
      font-weight: 900;
      font-size: 49px;
      transition: all 0.5s;
    }
  }

  .slick-prev {
    left: 30px;

    &::before {
      content: "\f137";
    }
  }

  .slick-next {
    right: 20px;

    &::before {
      content: "\f138";
    }
  }
`;

const Slides = styled.div`
  text-align: center;
  position: relative;
`;

const SlidesImage = styled.img`
  width: 500px;
  position: absolute;
  left: 280px;
`;

export default function BannerLayout() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplayspeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
  };
  return (
    <StyledSlider {...settings}>
      <Wrapper>Banner section</Wrapper>
      <Slides>
        <SlidesImage src="/images/whiteBird.jpg" />
        <h3>1</h3>
      </Slides>
      <Slides>
        <SlidesImage src="/images/whiteBird.jpg" />
        <h3>2</h3>
      </Slides>
      <Slides>
        <SlidesImage src="/images/whiteBird.jpg" />
        <h3>3</h3>
      </Slides>
      <Slides>
        <SlidesImage src="/images/whiteBird.jpg" />
        <h3>4</h3>
      </Slides>
    </StyledSlider>
  );
}

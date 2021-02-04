import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./image-slider.css";
import Slider from "react-slick";

const photos = [
    {
        alt: "smiling woman looking to the left",
        image: "../images/eye-for-ebony-3dqSZidOkvs-unsplash.jpg"
    },
    {
        alt: "woman flipping hair",
        image: "../images/valerie-elash-vx-PQnfLDDk-unsplash.jpg"
    },
    {
        alt: "woman smiling an dlooking head on",
        image: "../images/renata-pereira-de-souza-NnzdZwLd8hk-unsplash.jpg"
    },
    {
        alt: "back of woman's hair",
        image: "../images/pocky-lee-nbl0AArhRow-unsplash.jpg"
    },
    {
        alt: "smiling woman looking to the right",
        image: "../images/eye-for-ebony-vYpbBtkDhNE-unsplash.jpg"
    },
    {
        alt: "overhead view of woman looking up",
        image: "../images/honey-yanibel-minaya-cruz-gm5naIg3Fvo-unsplash.jpg"
    }
]


class ImageSlider extends Component {
  render() {
    const settings = {
    //   dots: true,
      fade: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      className: "slider"
    };
    return (
      <div>
        <Slider {...settings}>
          {photos.map((pic=>{
              return (<div>
                  <img src={pic.image} alt={pic.alt} width="100%" />
              </div>
              )
          }))}
        </Slider>
      </div>
    );
  }
}

export default ImageSlider
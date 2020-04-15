import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
// import { Container } from 'react-bootstrap/lib/Tab';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <Carousel className="d-block w-100" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.bonappetit.com/photos/596a58b75df40d1371270626/1:1/w_1600%2Cc_limit/grilled-halibut-and-bok-choy-with-coconut-lime-dressing.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Grilled Halibut and Summer Squash with Pumpkin Seeds</h3>
          <p>If you can only find skin-on halibut, carry on: After the fish is cooked, wiggle a spatula between the skin and the fillet, and it will slip right off.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.bonappetit.com/photos/596a58b75df40d1371270626/1:1/w_1600%2Cc_limit/grilled-halibut-and-bok-choy-with-coconut-lime-dressing.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Grilled Halibut and Summer Squash with Pumpkin Seeds</h3>
          <p>If you can only find skin-on halibut, carry on: After the fish is cooked, wiggle a spatula between the skin and the fillet, and it will slip right off.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.bonappetit.com/photos/596a58b75df40d1371270626/1:1/w_1600%2Cc_limit/grilled-halibut-and-bok-choy-with-coconut-lime-dressing.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Grilled Halibut and Summer Squash with Pumpkin Seeds</h3>
          <p>If you can only find skin-on halibut, carry on: After the fish is cooked, wiggle a spatula between the skin and the fillet, and it will slip right off.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.bonappetit.com/photos/596ccdeeb85671732e0d55a8/1:1/w_1600%2Cc_limit/buckwheat-and-shiitake-mushroom-salad-with-gouda.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Buckwheat and Shiitake Mushroom Salad with Gouda</h3>
          <p>A salad where one of the main ingredients is cheese? Okay yes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.bonappetit.com/photos/596a82e72b659b48a371c338/1:1/w_1600%2Cc_limit/braised-chicken-and-tomatoes.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Lemony Braised Chicken Legs and Tomatoes</h3>
          <p>
            If you are on the fence about cinnamon in savory dishes, this could be the chicken recipe that puts it in your YES column.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
}

export default ControlledCarousel;

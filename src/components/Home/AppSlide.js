import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function AppSlide() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thehill.com/wp-content/uploads/sites/2/2022/03/ca_collegeenrollment_istock.jpg?w=1280&h=720&crop=1"
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.eaie.org/.imaging/mte/eaie-theme/full-width-large/dam/images/blog-images/2022/1000x667_Blog_ESN-Survey-results.jpg/jcr:content/1000x667_Blog_ESN%20Survey%20results.jpg"
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://loyalistcollege.com/wp-content/uploads/2021/08/New-Student-Checklist-Header.jpg"
          alt=""
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AppSlide;

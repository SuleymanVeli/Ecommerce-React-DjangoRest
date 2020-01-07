import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselControl,
  Row, Col
} from 'reactstrap';
import ProductCard from './ProductCard'

let oldcount = 0;
let count = 0;
const setCount=(width)=>{   
  if (width > 992) count = 4;
  else if(width > 768) count = 3;
  else if(width > 576) count = 2;
  else count = 1;
}

const changeItem = (c,data) => {
  let itemsdata = []
  oldcount = c  
  
  let s = 0;
  for (let i = 0; i < data.length/c; i++) {
    let itemdata = [];
    for (let j = 0; j < c; j++){
      itemdata.push(data[s])
      s++;
    }
    let item = { id : i+1 , itemdata}
    itemsdata.push(item)
  }
  return itemsdata
}

const CardSlider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [items, setItems] = useState([]);


  useEffect(() => {    
    const handleResize = () => setWidth(window.innerWidth);        
    window.addEventListener("resize", handleResize);
    setCount(width)
    if(count !== oldcount){      
      setItems(changeItem(count,props.data))
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[]);

 

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag1"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div className='card-slider-cards'>
          <Row>
            {item.itemdata.map((a)=>
              (
                <Col md='3'  key={a.id} >{console.log(a)}
                  <ProductCard product = {a} />
                </Col>                
              )                           
            )}            
          </Row>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div className='card-slider'>
      <style>
        {
          `.custom-tag1 {              
              max-width: 100%;
              height: 600px;              
            }
            .card-slider-indicators li{              
              background-color: #495057;             
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {slides}

        <CarouselIndicators className='card-slider-indicators' items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default CardSlider;
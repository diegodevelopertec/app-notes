import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container } from '../../structure/Container/Index';
import { Image } from '../../structure/Image';

type Props={
  data:string[]
}


export const Slide=({data}:Props)=>{
  return <Container w='55%'>
    <Carousel>
        {data.map((item,index)=>(
         <>
           <div>
            <Image h='250px' key={index} src={item} />
          </div>
         </>
        ))}
  
  </Carousel>

  </Container>
}
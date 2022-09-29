import React, {useEffect,useState} from 'react';
import Image from 'next/image';
import styled from "styled-components";

function getWindowDimensions(){
    const{innerWidth: width, innerHeight: height}= window;
    return{
        width,
        height,
    };
}

function BGImage(){
    const [height, setHeight] = useState<Number>[0];
    
    useEffect(()=>{
        const {width,height} = getWindowDimensions();
        setWidth(width);
        setHeight(height);
    },[]);

    useEffect(() =>{
        function handleResize(){
            const {width,height } = getWindowDimensions();

            setWidth(width);

            setHeight(height);


        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      if(width && height)
      {
        return (
            <Image 
            src={'img\IMG_0668.png'}
            width={width}
            height={height}
            />

        )
      }
      return null 
}

export default BGImage
import React from 'react';
import { useSpring, animated } from 'react-spring';
import './homepage.styles.scss';

const HomePage = () => {
   const props = useSpring({
      from: {opacity: 0},
      opacity: 1
   });
   return(
      <animated.div className = "homepage" style = {props}>
            <h1 className = "title">Hello There!</h1>
            <h1 className = "title">
               This is a very simple deadline tracker made from React using Redux for state management. 
            </h1>
            <p className = "info">
               Fill up a form for a deadline and see how much time u have left. 
            </p>
            <p className = "info">
               You can sort the deadlines by ascending or descending order.
            </p>
      </animated.div>
)};

export default HomePage;
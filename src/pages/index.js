import React from 'react';
import ChooseCard from '../components/Home/ChooseCard'
import AppSlide from '../components/Home/AppSlide';
import Degree from '../components/Home/Degree';
import SEEE from '../components/Home/SEEE';
import Look from '../components/Home/Look';
import Request from '../components/Home/Request';
import Main from '../components/Home/Main';



export const Home = () => {
  return (
    <>
      <AppSlide/>
      <Main/>
      <ChooseCard/>
      <Degree/>
      <SEEE/>
      <Look/>     
      <Request/>
    </>
  );
};

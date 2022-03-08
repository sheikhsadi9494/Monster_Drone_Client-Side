import React from 'react';
import Navbar from '../../Shered/Navbar/Navbar';
import Banner from '../Banner/Banner';
import DroneTypes from '../DroneTypes/DroneTypes';
import Fetures from '../Fetures/Fetures';
import OurServices from '../OurServices/OurServices';

const HomeContainer = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DroneTypes></DroneTypes>
            <Fetures></Fetures>
            <OurServices></OurServices>
        </div>
    );
};

export default HomeContainer;
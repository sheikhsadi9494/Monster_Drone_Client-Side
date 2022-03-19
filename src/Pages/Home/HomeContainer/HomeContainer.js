import React from 'react';
import Footer from '../../Shered/Footer/Footer';
import Navbar from '../../Shered/Navbar/Navbar';
import Banner from '../Banner/Banner';
import DroneDetails from '../DroneDetails/DroneDetails';
import DroneTypes from '../DroneTypes/DroneTypes';
import Feedback from '../Feecback/Feedback';
import Fetures from '../Fetures/Fetures';
import Futured from '../Futured/Futured';
import OurServices from '../OurServices/OurServices';

const HomeContainer = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <DroneTypes></DroneTypes>
            <Fetures></Fetures>
            <OurServices></OurServices>
            <Futured></Futured>
            <Feedback></Feedback>
            <DroneDetails></DroneDetails>
            <Footer></Footer>
        </div>
    );
};

export default HomeContainer;
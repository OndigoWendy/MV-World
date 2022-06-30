import react from "react";
import React, { useState, useEffect } from "react";
//API
import API from '../API';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';

//Image
import NoImage from "../images/no_image.jpg";


const Home = () => {
    const { state, loading, error } = useHomeFetch();
    console.log(state);

    return <div > Home page < /div>
};

export default Home;
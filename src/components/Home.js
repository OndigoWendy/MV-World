import react from "react";
import React, { useState } from "react";
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//Hook


//Image
import NoImage from "../images/no_image.jpg";


const Home = () => {
    //state to hold all movies
    const [state, setState] = useState();
    //state to load
    const [loading, setLoading] = useState(false);
    //state to check if api has error
    const [error, setError] = useState(false);



    return <div > Home Page < /div>;
};

export default Home;
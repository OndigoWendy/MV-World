import react from "react";
import React, { useState, useEffect } from "react";
//API
import API from '../API';

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//Hook


//Image
import NoImage from "../images/no_image.jpg";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
};

export const useHomeFetch = () => {
    //state to hold all movies
    const [state, setState] = useState(initialState);
    //state to load
    const [loading, setLoading] = useState(false);
    //state to check if api has error
    const [error, setError] = useState(false);

    const fetchMovies = async(page, searchTerm = "") => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            console.log(movies);

            setState(prev => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }))
        } catch (error) {
            setError(error);
        }
        setLoading(false);

    };
    //initialrender
    useEffect(() => {
        fetchMovies(1)
    }, [])
    return { state, loading, error };
};
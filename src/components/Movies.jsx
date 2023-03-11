import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function Movies() {

    const srcImg = "https://image.tmdb.org/t/p/w500/";
    const UrlMovie = "https://api.themoviedb.org/3/movie/popular?api_key=68e77521cfd3cb1f427d0ba6fe08a6c7";

    const [ressdata, setRessdata] = useState([]);

    useEffect(() => {
        getAllMovie();

    }, []);

    function getAllMovie() {
        axios.get(UrlMovie).then((res) => {
            setRessdata(res.data.results)
        });
    }


    return (
        <>
            <br/> <br/> <br/>
            <h1>Movies</h1>
            <div className="container mx-auto">
                <div className="row gx-2">
                    {ressdata.map((item) => {
                        return (
                            <div key={item.id} className="card col-lg-3">
                                <div className="py-2 ps-3">
                                    <i className="fa-solid fa-star fs-3 text-warning"></i>
                                </div>
                                <Link to={`/MovieDetails/${item.id}`} className="text-decoration-none">
                                    <img src={`${srcImg}/${item.poster_path}`} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title text-black"> {item.title} </h5>
                                        <h6 className="card-text text-black"> release_date : {item.release_date}</h6>
                                        <h6 className="card-text text-black">vote_count{item.vote_count}</h6>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

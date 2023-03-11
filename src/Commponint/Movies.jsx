import React from 'react';

export default function Movies() {
  return (
    <>
      <br /> <br /> <br />
      <h1>aaaaaaaa</h1>
      <div className="container mx-auto">
        {/* <h2>{language}</h2> */}
        {/* <button onClick={()=>{handelChange()}} className="btn btn-primary">change Language</button> */}

        <div className="row gx-2">
          {/* {ressdata.map((item)=> { */}
            return (
              {/* <div key={item.id} className="card col-lg-3"> */}
                <div className="py-2 ps-3">
                {/* <i className="fa-solid fa-star fs-3 text-warning"></i> */}
                {/* <button onClick={()=>{handelFavorite()}}>
                    {changeFavorite==false?"aaaa":"ssss"}
                  </button> */}
                  
                  {/* <button onClick={()=>{handelFavorite()}}>
                    {changeFavorite==false?<i className="fa-regular fa-star fs-3"></i>:<i className="fa-solid fa-star fs-3 text-warning"></i>}
                  </button> */}
                {/* </div> */}
                {/* <Link to={`/MovieDetails/${item.id}`} className='text-decoration-none'>
                  <img src={`${srcImg}/${item.poster_path}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title text-black"> {item.title} </h5>
                    <h6 className="card-text text-black"> release_date : {item.release_date}</h6>
                    <h6 className="card-text text-black">vote_count{item.vote_count}</h6>
                  </div>
                </Link> */}
              </div>
            );
          {/* })} */}

          <div className="w-25 mx-auto text-center rounded-pill border border-1 border-danger py-3 my-5">
            {/* <button className="btn btn-outline-info mx-2" onClick={()=>{previsPage()}}>Previs</button> */}
            {/* <button className="btn btn-outline-warning mx-2" onClick={()=>{nextPage()}}>Next</button> */}
          </div>

        </div>
      </div>
    </>
  );
}

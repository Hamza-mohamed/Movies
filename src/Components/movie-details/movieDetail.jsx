import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../axiosConfig/instance';
const MovieDetail = () => {
    var {id}=useParams()
    console.log(id);
    // 
    const [movies, setmovies] = useState([]);
    const [foundMovie,setfoundmovie]=useState([])
    useEffect(() => {
      instance
        .get(`3/movie/${id}`)
        .then((res) => {     
          setfoundmovie(res.data)
        })
        .catch((err) => console.log(err));
    }, []);
    // const foundMovie1 = movies.filter((item) => item.id === id);
    // setfoundmovie(foundMovie1)
    // console.log(foundMovie);

    return (
        <div className='row'>
            
            <div className="col-md-4 col-4 px-0">
               <img src={`https://image.tmdb.org/t/p/w500/${foundMovie.poster_path}`} className="img-fluid"/>

            </div>
            <div className='col-8'>
                 <h1>{foundMovie.title}</h1>
                 <h1>{foundMovie.original_language}</h1>
                 <h5>{foundMovie.description}</h5>
            <h1>this is movie detail page</h1>  
            </div>
         
        </div>
    );
}

export default MovieDetail;

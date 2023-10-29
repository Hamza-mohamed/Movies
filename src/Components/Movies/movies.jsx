import React, { useState, useEffect } from "react";
import MovieCard from "../movie-card/movieCard";
import instance from "../../axiosConfig/instance";
import { addToFav } from "../../store/slice/favourite";
import { useSelector, useDispatch } from "react-redux";
import { moviesAction } from "../../store/slice/movies";
const Movies = () => {
  const [movies, setmovies] = useState([]);
  const [num, setnum] = useState(1);
  const [name, setname] = useState();
  const [color, setcolor] = useState("btn btn-dark");
  const [mystore, setmystore] = useState([]);
  var myFavList;
  myFavList = useSelector((state) => state.myFavs.fav);
  const [favsList,sefavsList]=useState(myFavList)
 
  let dispatch = useDispatch();
  const moviesThunk=useSelector((state)=>state.movies.movies)
  console.log(moviesThunk);
  useEffect(() => {
    dispatch(moviesAction())
    
  //  getAllMovies();
    }, []);
  // var moviesIds = [];
  // const myarr = localStorage.getItem("key");
  // var mynew = new Array(myarr);
  //
  const getAllMovies=()=>{
    instance
    .get("3/movie/popular")
    .then((res) =>{
      console.log(res.data);
      setmovies(res.data.results);
      console.log(movies,"start");
      console.log(favsList,"oooooooo");
  
    })
    .catch((err) => console.log(err));
  }




  // next page
  const handleNavigateNext = () => {
    // if (num > 2) {
    setnum(num + 1);

    instance
      .get(`3/movie/popular?page=${num}`)
      .then((res) => {
        console.log(res.data);
        setmovies(res.data.results);
      })
      .catch((err) => console.log(err));
    // }
  };
  // previous page
  const handleNavigateBack = () => {
    if (num > 1) {
      setnum(num - 1);

      instance
        .get(`3/movie/popular?page=${num}`)
        .then((res) => {
          console.log(res.data);
          setmovies(res.data.results);
        })
        .catch((err) => console.log(err));
    }
  };
  //
  useEffect(() => {

  }, [num,movies, myFavList]);

  const getMovieRequest = async (movieName) => {
    setname(movieName);
    const url = `https://api.themoviedb.org/3/search/movie?api_key=479a2ea26dd1cb4a73232a1287763e38&query=${name}`;
    // const url = `https://api.themoviedb.org/3/search/movie?api_key=479a2ea26dd1cb4a73232a1287763e38&query=gladiator`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.results) {
      setmovies(responseJson.results);
      console.log(responseJson.results);
    }
  };

  // useEffect(() => {
  // 	getMovieRequest;
  // }, []);
  //  search
  // const handleSearch=(name)=>{
  //    instance
  //    .get(`3/search/movie?name=${name}`)
  //    .then((res) => {
  //      console.log(res.data);
  //      setmovies(res.data.results);
  //    })
  //    .catch((err) => console.log(err));
  //  }

  //
  // console.log(myFavList[0].color);
  // const setMycolor = () => {
  //   console.log(movies);
  //   const filteredMovies = myFavList.filter(
  //     (item) => item.id === favMovie[0].id
  //   );

    // myFavList.map((movie) => {
    //   if (movie.color == "black") {
    //     setcolor("btn btn-danger");
    //     console.log("you are in my favs");
    //   } else {
    //     setcolor("btn btn-dark");
    //     console.log("you are not in my favs");
    //   }
    // });
  // };
  // setMycolor()

  // add to my favourites
  const AddtomyFavList = (movie) => {
    // setMycolor()
    let favMovie = Object.values(movie);
    const filteredMovies = myFavList.filter(
      (item) => item.id === favMovie[0].id
    );
    if (filteredMovies.length == 0) {
      // const data = [myarr, favMovie[0].id];
      // var array = mynew[0].split(",");
      // // array=Number(array)
      // moviesIds = array.map(Number);
      // setmyIDS(moviesIds);
      // console.log("hhhhhhh", moviesIds);
      // localStorage.setItem("key", data);

      dispatch(addToFav(favMovie));
    } else {
      console.log("your movie in your list already");
    }
  };

  return (
    <div className="row  bg-secondary m-0">
      <input
        type="text"
        className="form-control"
        value={name}
        placeholder="search by name"
        onChange={(item) => getMovieRequest(item.target.value)}
      />

      {moviesThunk.map((movie, index) => {
        return (
          <div
            className="col-4 mb-2  "
            id="product-container h-100"
            key={index}
          >
            {/* foe changing color */}

            <div className="card bg-white h-100">
              <button
                className={
                  myFavList.includes(movie)
                    ? " btn btn-danger"
                    : " btn btn-dark"
                }
                onClick={() => AddtomyFavList({ movie })}
              >
                add to favs
              </button>
              <MovieCard movieData={movie} />
              {/* button for color */}

            </div>
          </div>
        );
      })}
      <div className="d-flex mt-4">
        <button className="btn btn-secondary" onClick={handleNavigateBack}>
          previous
        </button>
        <button className="btn btn-secondary" onClick={handleNavigateNext}>
          next
        </button>
      </div>
    </div>
  );
};

export default Movies;

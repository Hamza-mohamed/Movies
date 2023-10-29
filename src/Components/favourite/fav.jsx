import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToFav,removeFromFav } from "../../store/slice/favourite";

import { useSelector,useDispatch } from "react-redux";
const Fav = ({ movieData }) => {
  let dispatch = useDispatch();

  // console.log(movieData);
  //   const myFavList=useSelector((state)=>{
  //     return state.myFavs.fav
  // })
  const myFavList1 = useSelector(state => state.myFavs.fav);
const [myFavList,setmyFavList]=useState(myFavList1)

const removeFromFavs=(movie)=>{
  let favMovie= Object.values(movie)
  console.log("param",favMovie);
  console.log("hh",favMovie[0].id);
  console.log(myFavList1);
  const filteredMovies = myFavList1.filter((item) => item.id !== favMovie[0].id);
  setmyFavList(filteredMovies)
  dispatch(removeFromFav(favMovie));
}
// useEffect(() => {

// // }, [myFavList]);
// const arr2 = localStorage.getItem('key',[]);
// console.log(arr,"kkkkk");
// console.log("ljjjjj",favMovie[0].id);
// arr.push(favMovie[0].id)
// let string = JSON.stringify(favMovie[0].id)

// const data = [arr2,string];
// console.log("before local",data)
// localStorage.setItem('key',data)
  return (
    <>
    <div>
      <h1 className="text-center text-success">favourites</h1>
      {myFavList.map((movie, index) => {
        return ( 
          <div className="col-4 mb-2 " id="product-container h-100" key={index}>
            <h1>{movie.title}</h1> ;
            <h1>{movie.id}</h1> ;
            <button className="btn btn-danger" onClick={()=>removeFromFavs({movie})}> remove from favs</button> 
          </div> 
        );
      })}
        {/* <div className="image-fluid">
          
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            className="card-img-top w-50"
            alt="..."
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{movieData.title}</h5>
        <h3>  {movieData.original_language} </h3>
          <p className="card-text">{movieData?.overview.sub(0,20)}</p>
          <Link 
          // to="/productDetail/ `/${movieData.id}`" 
          to={`/movieDetail/${movieData.id}`}>movie details</Link>
        </div> */}
      </div>
    </>
  );
};

export default Fav;

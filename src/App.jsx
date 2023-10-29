import Login from "./Components/Login/Login";
import { useState } from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import ToDo from "./Components/ToDoApp/ToDo";
import AppLayout from "./Components/AppLayout/appLayout";
import { store } from "./store/store";
import MovieDetail from "./Components/movie-details/movieDetail";
import Footer from "./Components/Footer/Footer";
import Movies from "./Components/Movies/movies";
import ProtectedRoute from "./Components/protected-route/protected-route";
import { Provider } from "react-redux";
import Fav from "./Components/favourite/fav";
import Home from "./Components/Home/home";
import {  LanguageProvider } from "./contexts/language";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Movies /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "home", element: <Home /> },

      { path: "movies", element: <Movies /> },
      { path: "movieDetail/:id", element: <MovieDetail /> },
      { path: "fav", element: <Fav /> },
      // { path: "todo", element: <ToDo /> },
      {
        path: "todo",
        element: (
          <ProtectedRoute>
            <ToDo />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  const[language,setlanguage]=useState("en")
  return (
    <LanguageProvider value={{language,setlanguage}}>
      {" "}
      <Provider store={store}>
        {" "}
        <RouterProvider router={router} />{" "}
      </Provider>
    </LanguageProvider>
  );
  // return  <Provider store={store}><RouterProvider router={router}/><Provider/>

  /*  return (</Provider>
    <>
      <div>
        <Router>
          <Header />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movieDetail/:id" element={<MovieDetail />} />
            <Route
              path="/todo"
              element={
                <ProtectedRoute  Children={<ToDo/>}>    
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  ); */
}
export default App;

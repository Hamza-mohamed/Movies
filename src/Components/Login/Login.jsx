import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// const Login = (props) => {
  function Login(props) {
  let navigate=useNavigate()
  const [passType, setpassType] = useState("password");
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const [userErrors, setuserErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  var passReg = /^[a-z]{5}/;
  const handleInputs = (e) => {
    switch (e.target.name) {
      case "email":
        setuserErrors({
          ...userErrors,
          emailError:
            e.target.value.length === 0
              ? " email is required "
              : e.target.value.length < 5
              ? "and should be more than 5 letters"
              : "",
        });

        setuser({ ...user, email: e.target.value });

        break;
      case "password":
        // setpassType({ passType: "password" });

        setuserErrors({
          ...userErrors,
          passwordError: passReg.test(e.target.value) ? "" : "invalid password",
        });

        setuser({
          ...user,
          password: e.target.value,
        });
        break;
      default:
    }
  };

    useEffect(() => {
      console.log("updated");
    }, [user,passType]);

  const showPassword = () => {
    setpassType(passType==="password"?"text" :"password");
  };
//   const hidePassword = () => {
//     setpassType( "password" );
//   };

  var form = document.getElementById("myForm");
  function handleForm(event) {
    event.preventDefault();
  }
  // 
  var loginuser=()=>{
    let token="122335588";
    localStorage.setItem("usertoken",token)
    navigate('/todo')
  }
  return (
    <div className="bg-secondary p-5">
      <button type="submit" onClick={loginuser}>guard</button>
      <form className="w-50 m-auto  " id="myForm" onSubmit={handleForm}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onChange={handleInputs}
          />
          <small id="emailHelp" className="form-text text-danger">
            {userErrors.emailError}
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <div className="d-flex ">
            <input
              type={passType}
              className="form-control me-2"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              onChange={handleInputs}
            />
            <a  onClick={showPassword}  onMouseOut={()=>setpassType( "password" )}>
              <i className="fa-solid fa-eye fs-3"></i>
            </a>
          </div>

          {/* show icon */}
          <small id="passHelp" className="form-text text-danger">
            {userErrors.passwordError}
          </small>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            remember me
          </label>
        </div>
        <button
          type=""
          className="btn btn-primary"
          onClick={() => loginuser()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;

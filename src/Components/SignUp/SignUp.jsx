import React from "react";
import { useState } from "react";

const SignUp = (props) => {

  const [passwordType, setPasswordType] = useState("password");
  // const [confirmPassword, setconfirmPassword] = useState("");

  const [user, setUser] = useState({
    email: "",
    name: "",
    userName: "",
    pass: "",
    pass2: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    nameError: "",
    userNameError: "",
    passError: "",
    pass2Error: "",
  });
  const handleChange = (evt) => {
    // console.log(evt.target);
    var regex = /^[a-zA-Z]{3}(@)[a-zA-Z]{4}(.com)$/;
    var regexPass =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    var regexName = /^[^\s].+[a-zA-Z]+[a-zA-Z]+$/;

    if (evt.target.name == "pass") {
      setUser({ ...user, pass: evt.target.value }); //{email:"",name:evt.target.value}
      setErrors({
        ...errors,
        passError:
          evt.target.value.length == 0
            ? "passWord is Required"
            : regexPass.test(evt.target.value) && evt.target.value.length > 8
            ? "passWord must be at least 9 characters"
            : "",
      });
    }
    // email
    else if (evt.target.name == "email") {
      setUser({ ...user, email: evt.target.value });
      setErrors({
        ...errors,
        emailError:
          evt.target.value.length == 0
            ? "Email is Required"
            : regex.test(evt.target.value)
            ? ""
            : "Invalid Email",
      });
    } else if (evt.target.name == "name") {
      setUser({ ...user, name: evt.target.value });
      setErrors({
        ...errors,
        nameError:
          evt.target.value.length == 0
            ? "name is Required"
            : evt.target.value.length > 0
            ? ""
            : "Invalid name",
      });
    } else if (evt.target.name == "userName") {
      setUser({ ...user, userName: evt.target.value });
      setErrors({
        ...errors,
        userNameError:
          evt.target.value.length == 0
            ? "userName is Required"
            : regexName.test(evt.target.value)
            ? ""
            : "Invalid userName",
      });
    } else if (evt.target.name == "pass2") {
      setUser({ ...user, pass2: evt.target.value });
      setErrors({
        ...errors,
        pass2Error:
          evt.target.value.length == 0
            ? "passwoed is Required"
            : evt.target.value == user.pass
            ? ""
            : "Invalid match",
      });
    }
  };
  // hide password
  const showPassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };
  return (
    <div className="w-50 m-auto">
      <form
        autoComplete="off"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="mb-3 ">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name :
            </label>
                  <input
              type="text"
              className={`form-control  ${
                errors.nameError ? "border-danger shadow-none" : ""
              }`}
              id="name"
              value={user.name}
              name="name"
              placeholder="Please Enter Name"
              onChange={(e) => {
                handleChange(e);
              }}
            />
        
          <p className="text-danger text-center">{errors.nameError}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email :
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={user.email}
            name="email"
            placeholder="Please Enter Email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className="text-danger">{errors.emailError}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            user Name :
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.userNameError ? "border-danger shadow-none" : ""
            }`}
            id="userName"
            value={user.userName}
            name="userName"
            placeholder="Please Enter Name"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className="text-danger">{errors.userNameError}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            password :
          </label>
          <input
            type={passwordType}
            className={`form-control ${
              errors.passError ? "border-success shadow-none" : ""
            }`}
            id="password"
            value={user.pass}
            name="pass"
            placeholder="Please Enter password"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <p className="text-danger">{errors.passError}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">
            confirm password :
          </label>
          <div className="d-flex mx-2">
            <input
              type={passwordType}
              className={`form-control ${
                errors.pass2Error ? "border-success shadow-none" : ""
              }`}
              id="password2"
              value={user.pass2}
              name="pass2"
              placeholder="Please Enter password"
              onChange={(e) => {
                handleChange(e);
              }}
            />

            <a
              onMouseOver={showPassword}
              onMouseOut={() => setPasswordType("password")}
            >
              {passwordType === "text" ? (
                <i class="fa-solid fa-eye"></i>
              ) : (
                <i className="fa-solid fa-eye-low-vision"></i>
              )}
            </a>
          </div>

          <p className="text-danger">{errors.pass2Error}</p>
        </div>

        {/* <div>
          {this.state.match === false ? (
            <div style={{ color: 'red' }}>Passwords Must Match</div>
          ) : (
            <div style={{ color: 'green' }}>Passwords Match!</div>
          )}
          </div> */}

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

import React, { useContext, useState } from "react";
import firebase from "firebase";
import { AuthContext } from "../context/auth";
import { navigate } from "gatsby";
import Nav from "../components/nav";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
  });
  const { setUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null });
    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);

      navigate("/login");
    } catch (err) {
      setData({ ...data, error: err.message });
    }
  };
  return (
    <div>
      <Nav />
      <div className="pt-20 text-center font-sans">
        <h1 className=" font-extrabold">Register Your Details</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <br />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="Password"
              name="password"
              value={data.password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <br />
          </div>
          {data.error ? <p style={{ color: "red" }}>{data.error}</p> : null}
          <input type="Submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;

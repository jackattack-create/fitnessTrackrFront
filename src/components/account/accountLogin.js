import React, {useState} from 'react'
import { Link, useHistory } from "react-router-dom";
import { callApi } from "../../api";



const AccountLogin = ({ setToken, setUserData }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const history = useHistory();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const data = await callApi({
          url: `/users/login`,
          body: {
            
              username,
              password,
            
          },
          method: "POST",
        });
  
        const token = data?.token;
  
  
        if (token) {
          localStorage.setItem("token", token);
          setUsername("");
          setPassword("");
          setToken(token);
          history.push("/routines");
        }
      } catch (error) {
        console.log(error);
      }
    };

    return(
        <div className="account">
          <form className="account-inputs" onSubmit={handleSubmit}>
            <h2>Welcome Back!</h2>
            <input
              type="text"
              placeholder="username"
              required
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            ></input>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
            <button type="submit">Login</button>
          </form>
          <div className="other-box">
            <h3>New Here?</h3>
            <h3>Sign up here!</h3>
            <Link to={`/register`}>
                <button>Register</button>
            </Link>
          </div>
        </div>
      );
}

export default AccountLogin;
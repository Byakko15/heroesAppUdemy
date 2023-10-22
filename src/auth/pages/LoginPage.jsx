import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";

export const LoginPage = () => {
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login("Byakko15");
    navigate("/", {
      replace: true,
    });
  };
  return (
    <>
      <div className="container mt-4"></div>
      <h1>Login</h1>
      <hr />
      <button onClick={onLogin} className="btn btn-primary">
        Login
      </button>
    </>
  );
};

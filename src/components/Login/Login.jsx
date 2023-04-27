import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  //   // store the credentials on local storage then redirect to home page send a post req to backend
  //   const handleOnSucess = (response) => {
  //     console.log(response);
  //   };

  //   // redirect to the same page
  //   const handleOnFailure = (response) => {
  //     console.log(response);
  //   };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <GoogleOAuthProvider clientId="304531247476-58f940f3b0dgrupg95cdo8b51fspupdv.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(res) => {
              console.log(res);
              navigate("/");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          />
        </GoogleOAuthProvider>
      </div>
    </>
  );
};

export default Login;

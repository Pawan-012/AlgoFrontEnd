import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import React from "react";
import { useState, useEffect } from "react";
import { addDetails, addUser } from "../Redux/Slices/UserDetailsSlice";
import { useDispatch } from "react-redux";
import { ValidateStoredToken } from "../RequestServer/Customer";

function Profile(params) {
  //userDetails.state.payload.state
  const authState = useSelector((state) => state).auth;
  const [userState, setUserState] = useState({});
  const usrDetDispacher = useDispatch();
  useEffect(() => {
    console.log("-----useeffect profile--------");
    if (authState.isLogin == true) {
      console.log("You are logged in");
      setUserState(authState.usrDetails.payload);
      console.log(authState.usrDetails.payload);
    } else {
      setUserState(null);
      console.log("You are not logged in");
    }
    console.log("-----useeffect profile--------");
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {userState != null && userState.first_name}
    </div>
  );
}
export default Profile;

import { create_url } from "../constants/urls";
import { Uris } from "../constants/paths";
import axios from "axios";
import { addDetails } from "../Redux/Slices/UserDetailsSlice";
import React from "react";
export async function loginUser(email, password) {
  const url = create_url("/auth/login");
  const body = {
    email,
    password,
  };
  console.log(body);
  console.log(url);
  try {
    const response = await axios.post(url, body);
    console.log(response.data);
    if (response.data["status"] == false) {
      return null;
    }
    ValidateStoredToken(response.data["token"]);
    return response;
  } catch (ex) {
    return null;
  }
}
export async function signup(email, password) {
  const url = create_url("/login");
  const body = {
    email,
    password,
  };
  const opt = {
    method: "POST",
    body: body,
  };
  fetch(url, opt).then();
}

export async function RegisterCPY(payload) {
  const url = create_url(Uris.REGISTER);
  console.log("Logging the url and payload");
  console.log(url);
  console.log(payload);
  const res = await axios.post(url, payload);
  console.log(res);
}
export async function ValidateStoredToken(token) {
  const url = create_url(Uris.VALIDATETOKEN);
  const payload = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const res = await axios.get(url, payload);
    if (res.status == 200) {
      return res.data;
    } else {
      return null;
    }
  } catch (error) {
    console.log("Error occured in validate token");
    console.log(error);
    console.log("Error occured in validate token");
    return null;
  }
  return null;
}

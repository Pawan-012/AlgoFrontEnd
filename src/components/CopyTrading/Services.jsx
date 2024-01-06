import axios from "axios";
import { create_url } from "../../constants/urls";
import { Uris } from "../../constants/paths";
async function Login(payload) {
  const url = create_url(Uris.LOGIN);
  await axios.post(url, payload);
}
async function RegisterCPY(payload) {
  const url = create_url(Uris.REGISTER);
  console.log("Logging the url and payload");
  console.log(url);
  console.log(payload);
  const res = await axios.post(url, payload);
  console.log(res);
}
export { Login, RegisterCPY };

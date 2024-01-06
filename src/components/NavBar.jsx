import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { did_logout, did_login } from "../Redux/Slices/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeDetail } from "../Redux/Slices/UserDetailsSlice";
import { ValidateStoredToken } from "../RequestServer/Customer";
function NavigationBar01() {
  const navigate = useNavigate();
  const authState = useSelector((state) => state).auth;
  const userDetailsStoredInRedux = useSelector((state) => state).userdetails;
  const dispatcher = useDispatch();
  const handleLogout = () => {
    dispatcher(did_logout());
    dispatcher(removeDetail());
    sessionStorage["token"] = "";
    sessionStorage["firstName"] = "";
    sessionStorage["lasName"] = "";
  };
  useEffect(() => {
    console.log("-----------useeffect NAVBAR---------------");
    console.log("is login is True or false", authState.isLogin);
    console.log("sessionStorage[token] = : ", sessionStorage["token"]);
    if (
      sessionStorage["token"] != undefined &&
      sessionStorage["token"].length > 50
    ) {
      const userWrap = async () =>
        await ValidateStoredToken(sessionStorage["token"]);
      const user = userWrap();
      console.log(user);
      if (user != null) {
        console.log("the user got is ", user);
        dispatcher(did_login(user));
      }
    } else {
      console.log("you are not looged in");
      sessionStorage["token"] = "";
      dispatcher(did_logout());
    }
    console.log(authState.isLogin);
    console.log("-----------useeffect END NAVBAR---------------");
  }, []);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/bt");
              }}
            >
              Back Test
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/copytrading");
              }}
            >
              Copy Trading
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/3minStr">3MinStrategy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <button
        onClick={() => {
          console.log("AUTH State : ", authState);
        }}
      >
        CheckReduxStore
      </button>
      {!authState.isLogin && (
        <div
          style={{ marginRight: "5%", color: "red", display: "flex" }}
          onClick={(e) => {
            console.log(authState.isLogin);
          }}
        >
          You Are Not Logged In
          <Button
            style={{ margin: "1%" }}
            variant="primary"
            onClick={() => {
              navigate("/login");
            }}
          >
            LOGIN
          </Button>{" "}
          <Button style={{ margin: "1%" }} onClick={() => navigate("signup")}>
            SignUp
          </Button>
        </div>
      )}

      {authState.isLogin && (
        <div style={{ marginRight: "1%", display: "flex" }}>
          <Button
            style={{ margin: "3px" }}
            onClick={handleLogout}
            variant="danger"
          >
            Logout
          </Button>

          <Button
            style={{ margin: "3px" }}
            onClick={() => {
              navigate("/profile");
            }}
            variant="success"
          >
            Profile
          </Button>
        </div>
      )}
    </Navbar>
  );
}
export default NavigationBar01;

import * as React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { FaFacebook, FaGoogle, FaArrowLeft } from "react-icons/fa";

import image1 from "../images/image1.svg";
import image2 from "../images/image2.svg";
import FormRender from "./FormRender";
import user from "../context/user";
import { UserInterface } from "../context/user";
import { signUp } from "../api";

export default function SignUp() {
  const { setUser } = React.useContext(user);
  const [validated, setValidated] = React.useState(false);

  function handelSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    // validate form

    const currentTarget = e.currentTarget as typeof e.currentTarget & {
      checkValidity: () => boolean;
    };

    if (currentTarget.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    const target = e.target as typeof e.target & {
      username: { value: string };
      phone: { value: string };
      email: { value: string };
      password: { value: string };
    };

    // send form data for new member
    if (currentTarget.checkValidity()) {
      signUp({
        username: target.username.value,
        phone: target.phone.value,
        email: target.email.value,
        password: target.password.value,
      })
        .then((data: UserInterface) => {
          setUser({
            id: data.id,
            username: data.username,
            phone: data.phone,
            email: data.email,
            password: data.password,
          });
        })
        .catch((e: Error) => console.error(e));
    }
  }

  function toggleShowPassword() {
    var x = document.getElementById("formBasicPassword") as HTMLInputElement;
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <Container>
      <div className="main">
        <Link to="/">
          <div className="back-page">
            <FaArrowLeft className="back-page_arrow" color="#fff" />
          </div>
        </Link>
        <div className="m-3">
          <div className="text-start mb-5">
            <h2 className="mb-3">Sign up</h2>
            <p className="text-muted">Create an account here</p>
          </div>
          <FormRender
            handelSubmit={(e: React.SyntheticEvent) => handelSubmit(e)}
            validated={validated}
            toggleShowPassword={toggleShowPassword}
          />
        </div>
        <div className="or-style"></div>
        <Button className="btn-signup">
          <FaGoogle />
          <span>Login with Gmail</span>
        </Button>
        <Button className="btn-signup mt-3 mb-4">
          <FaFacebook />
          <span>Login with facebook</span>
        </Button>
        <p className="footer text-muted">
          New member?
          <Link to="/" className="m-1">
            Sign up
          </Link>
        </p>
      </div>
      <img src={image1} alt="Svg1" className="image-title1" />
      <img src={image2} alt="Svg2" className="image-title2" />
    </Container>
  );
}

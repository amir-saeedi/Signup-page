import * as React from "react";
import { Form, Button } from "react-bootstrap";
import { FaUser, FaMobile, FaLock, FaEye } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

type FormRenderProp = {
  toggleShowPassword: React.MouseEventHandler<SVGElement> | undefined;
  handelSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  validated: boolean | undefined;
};

export default function FormRender({
  handelSubmit,
  validated,
  toggleShowPassword,
}: FormRenderProp) {
  return (
    <Form onSubmit={handelSubmit} noValidate validated={validated}>
      <Form.Group className="mb-3 form-group" controlId="formBasicText">
        <FaUser className="form-icon" />
        <Form.Control
          required
          autoComplete="off"
          name="username"
          type="text"
          placeholder="Create an account here"
        />
        <div className="valid-feedback">Looks good!</div>
      </Form.Group>
      <Form.Group className="mb-3 form-group" controlId="formBasicNumber">
        <FaMobile className="form-icon" />
        <Form.Control
          required
          autoComplete="off"
          name="phone"
          type="number"
          placeholder="Mobile Number"
        />
        <div className="valid-feedback">Looks good!</div>
      </Form.Group>
      <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
        <AiOutlineMail className="form-icon" />
        <Form.Control
          required
          autoComplete="off"
          name="email"
          type="email"
          placeholder="Email address"
        />
        <Form.Control.Feedback className="valid-feedback" type="invalid">
          Please provide a valid Email.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
        <FaLock className="form-icon" />
        <Form.Control
          required
          autoComplete="off"
          name="password"
          type="password"
          placeholder="Password"
        />
        <FaEye className="form-icon-showPas" onClick={toggleShowPassword} />
        <div className="valid-feedback">Looks good!</div>
      </Form.Group>
      <Form.Text>By signing up you agree with our Terms of Use</Form.Text>
      <Button className="form-btn mb-4" variant="primary" type="submit">
        Sign UP
      </Button>
    </Form>
  );
}

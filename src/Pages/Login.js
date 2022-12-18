import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <div className="bg-primary w-full h-full ">
      <Row className="m-0  ">
        <Col xs={0} md={3} className="h-screen">
          <div></div>
        </Col>
        <Col
          xs={12}
          md={9}
          className="bg-pwhite flex justify-center items-center flex-col "
        >
          <div className="w-6/12 flex flex-col gap-1">
            <h1 className="text-2xl font-semibold ">Admin Login</h1>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="User Name"
                  className=" input-man"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className=" input-man"
                />
              </Form.Group>
              <Button className="  bg-btnColor w-full btn-man ">Submit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;

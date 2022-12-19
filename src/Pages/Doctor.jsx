import React from "react";
import { Row, Col } from "react-bootstrap";
import DocBom from "./Components/DocBom";
import DocTop from "./Components/DocTop";

import SendInvitation from "./Components/SendInvitation";
import Sidebar from "./Components/Sidebar";

const Doctor = () => {
  return (
    <div className="bg-primary w-full h-full ">
      <Row className="m-0  ">
        {/* <Offcan /> */}
        <Sidebar />
        <Col
          xs={12}
          md={12}
          lg={9}
          className="   flex justify-center items-center flex-col "
        >
          <DocTop />
        </Col>
      </Row>
    </div>
  );
};

export default Doctor;

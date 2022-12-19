import { Row, Col } from "react-bootstrap";

// import { HomeOutlinedIcon } from "@mui/icons-material/HomeOutlined";
import SendInvitation from "./Components/SendInvitation";
import Offcan from "../com/Offcan";
import Sidebar from "./Components/Sidebar";

const Home = () => {
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
          <SendInvitation />
        </Col>
      </Row>
    </div>
  );
};

export default Home;

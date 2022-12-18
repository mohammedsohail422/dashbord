import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
// import { HomeOutlinedIcon } from "@mui/icons-material/HomeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SendInvitation from "./Components/SendInvitation";

const Home = () => {
  return (
    <div className="bg-primary w-full h-full ">
      <Row className="m-0  ">
        <Col
          xs={3}
          md={3}
          className="h-screen flex justify-between  flex-col items-start sidebar-man"
        >
          <div className="flex flex-col">
            <div>
              <h6 className="text-white text-xs">Nov 21, 01:35</h6>
              <div className="flex flex-col justify-center items-center gap-2 m-4">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className="avatars"
                />
                <Link
                  className="text-white m-0 text-decoration-none font-semibold"
                  to="/"
                >
                  Admin Name
                </Link>
              </div>
            </div>
            <div className="flex flex-column gap-3">
              <div className="flex items-center gap-2">
                <HomeOutlinedIcon className="text-white" />
                <Link
                  className="text-white m-0 text-decoration-none font-semibold"
                  to="/"
                >
                  Home
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <HomeOutlinedIcon className="text-white" />
                <Link
                  className="text-white m-0 text-decoration-none font-semibold"
                  to="/"
                >
                  Send Invitations
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <HomeOutlinedIcon className="text-white" />
                <Link
                  className="text-white m-0 text-decoration-none font-semibold"
                  to="/"
                >
                  Our Doctors
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <HomeOutlinedIcon className="text-white" />
                <Link
                  className="text-white m-0 text-decoration-none font-semibold"
                  to="/"
                >
                  SMS Email
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <HomeOutlinedIcon className="text-white" />
                <Link
                  className="text-white m-0 text-decoration-none font-semibold"
                  to="/"
                >
                  Patients Pofile
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <HomeOutlinedIcon className="text-white" />
                <Link
                  className="text-white m-0 text-decoration-none font-semibold"
                  to="/"
                >
                  Patients Review
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <HomeOutlinedIcon className="text-white" />
                <Link
                  className="text-white m-0 text-decoration-none font-semibold"
                  to="/"
                >
                  Doctor Of The Month
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <HomeOutlinedIcon className="text-white" />
                <Link
                  className="text-white m-0 text-decoration-none font-semibold"
                  to="/"
                >
                  NGO, Insurance
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <HomeOutlinedIcon className="text-white" />
                <Link
                  className="text-white m-0 text-decoration-none font-semibold"
                  to="/"
                >
                  Sub Admin
                </Link>
              </div>
            </div>
          </div>
          <Button className="bg-light btn-logout text-primary sidebar-logout-btn">
            LOGOUT
          </Button>
        </Col>
        <Col
          xs={9}
          md={9}
          className="   flex justify-center items-center flex-col "
        >
          <SendInvitation />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
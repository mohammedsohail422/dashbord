import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Offcan = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" className="offcan" onClick={handleShow}>
        <MenuRoundedIcon />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Test</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Offcan;

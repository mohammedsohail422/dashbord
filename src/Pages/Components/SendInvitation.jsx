import { Form, Button } from "react-bootstrap";
import CreateIcon from "@mui/icons-material/Create";
import SendBottom from "./SendBottom";

const SendInvitation = () => {
  return (
    <div className="bg-whiteRight rounded-3xl w-full h-full mt-3 mb-3 py-4 px-4">
      <h6 className="text-xl">Send Invitation</h6>
      <div className=" md:w-2/4 sm:w-full  p-3 card-man bg-pwhite">
        <Form className="flex flex-col gap-2 ">
          <div className="flex   relative items-center">
            <label htmlFor="" className="w-1/2 font-semibold">
              Doctor Name
            </label>
            <Form.Control
              type="text"
              placeholder="Dr. Arnold Nilson"
              className="input-man1"
            />
            <CreateIcon className="absolute right-2 bg-primary rounded-full p-1 text-white" />
          </div>
          <div className="flex relative items-center">
            <label htmlFor="" className="w-1/2 font-semibold">
              Doctor Name
            </label>
            <Form.Control
              type="text"
              placeholder="Dr. Arnold Nilson"
              className="input-man1 h-1"
            />
            <CreateIcon className="absolute right-2 bg-primary rounded-full p-1 text-white" />
          </div>
          <div className="flex relative items-center">
            <label htmlFor="" className="w-1/2 font-semibold">
              Doctor Name
            </label>
            <Form.Control
              type="text"
              placeholder="Dr. Arnold Nilson"
              className="input-man1 h-1"
            />
            <CreateIcon className="absolute right-2 bg-primary rounded-full p-1 text-white" />
          </div>
          <div className="flex relative items-center">
            <label htmlFor="" className="w-1/2 font-semibold">
              Doctor
            </label>
            <Form.Control
              type="text"
              placeholder="Dr. Arnold Nilson"
              className="input-man1 h-1"
            />
            <CreateIcon className="absolute right-2 bg-primary rounded-full p-1 text-white" />
          </div>
          <Button className="bg-primary text-pwhite inline self-end border40 px-4 mt-2">
            Send Invitation
          </Button>
        </Form>
      </div>
      <SendBottom />
    </div>
  );
};

export default SendInvitation;

import "./Table.css";
import { Button } from "react-bootstrap";

const Tables = () => {
  return (
    <table className="forTable m-auto w-full">
      <tr>
        <th>No.</th>
        <th>Date</th>
        <th>Time</th>
        <th>Doctor Name</th>
        <th>City</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th></th>
      </tr>
      <tr>
        <td>1. </td>
        <td>Nov 21 </td>
        <td>12:37 pm </td>
        <td>Dr. Arnold Nilson </td>
        <td>Delhi </td>
        <td>Drnilson89@gmail.com </td>
        <td>+91 9087654321 </td>
        <td>
          <Button className="bg-primary text-pwhite inline self-end border40 px-4 mt-2">
            Resend
          </Button>{" "}
        </td>
      </tr>
      <tr>
        <td>1. </td>
        <td>Nov 21 </td>
        <td>12:37 pm </td>
        <td>Dr. Arnold Nilson </td>
        <td>Delhi </td>
        <td>Drnilson89@gmail.com </td>
        <td>+91 9087654321 </td>
        <td>
          <Button className="bg-primary text-pwhite inline self-end border40 px-4 mt-2">
            Resend
          </Button>{" "}
        </td>
      </tr>
    </table>
  );
};

export default Tables;

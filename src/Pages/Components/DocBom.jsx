import React from "react";
import { Button } from "react-bootstrap";
import { Avatar } from "@mui/material";

const DocBom = () => {
  return (
    <div>
      <div className="flex justify-between   p-0 m-0 items-center">
        <h6 className="text-xl mt-3">Doctors</h6>
        <div>
          <Button className="bg-white btn-logout text-primary sidebar-logout-btn lowercase	 ">
            Update
          </Button>
          <Button className="bg-white btn-logout text-primary sidebar-logout-btn lowercase	ml-3 ">
            Add
          </Button>
        </div>
      </div>
      <div className="bg-litePurple flex-col tab-component-doc p-3 flex gap-5">
        <div>
          <div className="flex gap-5">
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              className="avatars"
            />
            <div>
              <h6>Name</h6>
              <h6>Email</h6>
              <h6>Phone Number 1</h6>
              <h6>Phone Number 2</h6>
              <h6>Whatsapp Number</h6>
              <h6>Experience</h6>
            </div>
            <div>
              <h6>Dr. Arnold Nilson</h6>
              <h6>Drnilson89@gmail.com</h6>
              <h6>+91 9087654321</h6>
              <h6>+91 9087654321</h6>
              <h6>+91 9087654321</h6>
              <h6>7 Years</h6>
            </div>
            <div className="flex items-end">
              <div>
                <h6>Degree</h6>
                <h6>Specialization</h6>
              </div>
              <div>
                <h6>Dr. Arnold Nilson</h6>
                <h6>Drnilson89@gmail.com</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <h4>About</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
            dignissim, metus nec fringilla accumsan, risus sem sollicitudin
            lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum
            velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Praesent
            auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
            Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
            Curabitur vel bibendum lorem. Morbi convallis convallis diam sit
            amet lacinia. Aliquam in elementum tellus. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
            est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
            risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            Maecenas eget condimentum velit, sit amet feugiat lectus. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
            scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
            rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
            convallis convallis diam sit amet lacinia. Aliquam in elementum
            tellus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocBom;

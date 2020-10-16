import React from "react";

const ContactMePage = (props) => {
  return (
    <div className="mt-5 mb-5 pt-2 contactMeBackground">
    <main className="content">
      <h2 className="mb-4 p-4">Have interest in my work? Get in touch with me via </h2>
      <div className="text-center text-md-left ml-md-4">
      <p><span className="smartblue font-weight-bold text-uppercase">
          Email
          </span> : {props.email}</p>
      <p><span className="smartblue font-weight-bold text-uppercase">
          Telephone
          </span> : {props.tel}</p>
      <p><span className="smartblue font-weight-bold text-uppercase">Address
          </span> : {props.address}</p>
          </div>
    </main>
    </div>
  );
};

export default ContactMePage;

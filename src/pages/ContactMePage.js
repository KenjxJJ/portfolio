import React from "react";

const ContactMePage = (props) => {
  return (
    <main>
      <p>Have interest in my work? get in touch me via </p>
      <p><span>
          Email
          </span> : {props.email}</p>
      <p><span>
          Telephone
          </span> : {props.tel}</p>
      <p><span>Address
          </span>: {props.address}</p>
    </main>
  );
};

export default ContactMePage;

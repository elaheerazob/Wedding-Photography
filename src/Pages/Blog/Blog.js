import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
        <h1 className="text-center my-2">Question</h1>
      <div className="w-75 mx-auto">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Difference between authorization and authentication?</Accordion.Header>
          <Accordion.Body>
          Ans: The process of verifying and confirming employees ID and passwords in an organization is called authentication, but determining which employee has access to which floor is called authorization
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication??</Accordion.Header>
          <Accordion.Body>
          Ans: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase.
Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
          <Accordion.Body>
          Ans: There are many services which Firebase provides, Most useful of them are: Cloud Firestore. Cloud Functions. Authentication. Hosting. Cloud Storage. Google Analytics. Predictions. Cloud Messaging.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    </div>
  );
};

export default Blog;

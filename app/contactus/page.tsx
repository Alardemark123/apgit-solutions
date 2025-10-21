import Banner from "./Banner";
import Form from "./Contacts";
import ResponsiveColumns from "./Forms";
import { Container } from "@mui/material";
// import styles from './contact.module.css';

export default function Contact() {
  return (
    <div>
      <Banner />
      {/* <div style={{ padding: "0 90px" }}> */}

      <Container>
        <Form />
        <ResponsiveColumns />
      </Container>

      {/* </div> */}
    </div>
  );
}

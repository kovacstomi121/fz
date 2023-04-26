import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Api from "./Api";
import Button from "react-bootstrap/Button";
export default function Account() {
  const [expand, setExpand] = useState(false);
  const { register, handleSubmit } = useForm();
  let history = useHistory();
  const onSubmit = async (data) => {
    await axios.post(Api, data).then((data) => console.log(data));
    history.push("/home");
  };

  const expandit = () => {
    setExpand(true);
  };
  const backnormal = () => {
    setExpand(false);
  };
  return (
    <Container>
      <h1 className="awesome">
        Click to Button Add user - Double-Click Form Close
      </h1>
      <Button onClick={expandit} onDoubleClick={backnormal} variant="success">
        Add-user
      </Button>
      {expand ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Control
            type="text"
            placeholder="Email-Address"
            name="email"
            ref={register}
          />
          <Form.Control
            type="text"
            placeholder="username"
            name="username"
            ref={register}
          />
          <Form.Control
            type="text"
            placeholder="name"
            name="name"
            ref={register}
          />

          <Button type="submit" variant="info">
            Submit Data
          </Button>
        </form>
      ) : null}
    </Container>
  );
}

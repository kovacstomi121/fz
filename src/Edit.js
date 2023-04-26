import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import Api from "./Api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory, useParams } from "react-router-dom";
export default function Edit() {
  const { register, handleSubmit } = useForm();
  const [datas, setData] = useState([]);
  let history = useHistory();
  const { id } = useParams();
  const onSubmit = async (data) => {
    await axios.put(`${Api}/` + id, data).then((data) => console.log(data));
    history.push("/home");
  };
  useEffect(async () => {
    const result = await axios(`${Api}/` + id);
    setData(result.data);
    console.log(result);
  }, []);
  return (
    <Container>
      <h1 className="awesome">Data Edit</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Form.Control
          type="text"
          placeholder="Id"
          defaultValue={datas.id}
          name="id"
          ref={register}
        />
        <Form.Control
          type="text"
          placeholder="Email-Address"
          defaultValue={datas.email}
          name="email"
          ref={register}
        />
        <Form.Control
          type="text"
          placeholder="Password"
          defaultValue={datas.name}
          name="password"
          ref={register}
        />
        <Form.Control
          type="text"
          placeholder="Level"
          defaultValue={datas.username}
          name="level"
          ref={register}
        />

        <Button type="submit" variant="info">
          Submit Data
        </Button>
      </form>
    </Container>
  );
}

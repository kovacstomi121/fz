import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import Api from "./Api";
import { useHistory, useParams } from "react-router-dom";
export default function VIew() {
  const { register, handleSubmit } = useForm();
  const [datas, setData] = useState({
    address: []
  });
  let history = useHistory();
  const { id } = useParams();

  useEffect(async () => {
    const result = await axios(`${Api}/` + id);
    setData(result.data);
    console.log(result);
  }, []);
  return (
    <Container>
      <h1 className="awesome">View user all Data</h1>
      <ul className="view">
        <li>
          <span className="color_change">ID User: </span>
          {datas.id}
        </li>
        <li>
          <span className="color_change">Email Address: </span>
          {datas.email}
        </li>
        <li>
          <span className="color_change">User name: </span>
          {datas.name}
        </li>
        <li>
          <span className="color_change">City: </span>
          {datas.address.city}
        </li>
        <li>
          <span className="color_change">Zipcode: </span>
          {datas.address.zipcode}
        </li>
      </ul>
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import Api from "./Api";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

export default function Home() {
  const [data, setData] = useState([]);
  let history = useHistory();
  useEffect(async () => {
    const result = await axios(Api);
    setData(result.data);
    console.log(result);
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }, []);

  const { id } = useParams();
  const deleteeployee = async (id) => {
    await axios.delete(`${Api}/` + id).then((data) => console.log(data));
    history.push("/");
  };
  return (
    <div className="Home">
      <div className="resposive">
        <table id="example" className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Delete</th>
              <th>Edit</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <span className="avtrimg">
                    <Avatar name={item.name} size={30} round="50px" />
                  </span>{" "}
                  {item.name}
                </td>
                <td>{item.email}</td>

                <td>{item.address.city}</td>
                <td
                  onClick={() => {
                    deleteeployee(item.id);
                  }}
                  className="red"
                >
                  Delete
                </td>
                <td className="green-sky">
                  <Link to={"/edit/" + item.id}>Edit</Link>
                </td>
                <th>
                  <Link to={"/view/" + item.id}>View</Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

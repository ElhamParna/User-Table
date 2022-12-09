import React from "react";
//img
import userimg from "../Assets/img/user-img.png";
//link
import { Link } from "react-router-dom";
//style
import "./Usertable.css";
const UserTable = ({ userData }) => {
  return (
    <>
        <tbody>
          <tr>
            <td>{userData.id}</td>
            <td >
              <div className="user-info">
                <div>
                  <img src={userimg} style={{ width: "50px" }} alt="User Img" />
                </div>
                <div>{userData.name}</div>
              </div>
            </td>
            <td>{userData.username}</td>
            <td> {userData.email}</td>
            <td> {userData.address.city}</td>
            <td> {userData.phone}</td>
            <td> {userData.company.name}</td>
            <td>
              <Link className="button" to={`/user/${userData.id}`}>
                details
              </Link>
            </td>
          </tr>
        </tbody>
    </>
  );
};

export default UserTable;

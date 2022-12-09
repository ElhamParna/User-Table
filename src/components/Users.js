import React, { useEffect } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../Redux/users/UsersAction";
//loader
import Loader from "../Shared/Loader";
//components
import UserTable from "./UserTable";
//img
import userimg from "../Assets/img/user-img.png";
//react-bootstrap
import Table from "react-bootstrap/Table";
//style
import "./Usertable.css";
const Users = () => {
  const UserData = useSelector((state) => state.UsersState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!UserData.users.length) dispatch(fetchUsers());
  }, []);

  return (
    <div class="container">
      <div class="title">
        <h1>
          <span> user table page </span>
        </h1>
      </div>

      <Table size="sm" style={{ overflowX: "auto", display: "inline-block" }}>
        {!UserData.length ? (
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>User Name </th>
              <th>Email</th>
              <th>city</th>
              <th>phone</th>
              <th>company</th>
              <th>more </th>
            </tr>
          </thead>
        ) : (
          <Loader />
        )}

        {UserData.loading ? (
          <Loader />
        ) : UserData.error ? (
          <p>{UserData.error}</p>
        ) : (
          UserData.users.map((user) => (
            <UserTable key={user.id} userData={user} />
          ))
        )}
      </Table>
    </div>
  );
};

export default Users;

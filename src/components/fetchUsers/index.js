//Import Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

//Import Components
import FetchUserTable from "./fetchUserTable";
import ErrorView from "../utils/errorView";

const FetchUsers = () => {
  const [users, setUsers] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    //fetch users from api
    const url = process.env.REACT_APP_USERS_API
    console.log(url, 'url')
    axios
      .get(url)
      .then((res) => {
        //set in local state the users
        setUsers(res.data);
      })
      .catch((err) => {
        //set in local state if the call returns error
        console.error("Error fetching users data: ", err);
        setError("Sorry we could not get information, try again later please.");
      });
  }, []);

  return (
    <div id="userIndex">
      {users ? (
        <FetchUserTable users={users}></FetchUserTable>
      ) : error ? (
        <ErrorView error={error}></ErrorView>
      ) : (
        ""
      )}
    </div>
  );
};

export default FetchUsers;

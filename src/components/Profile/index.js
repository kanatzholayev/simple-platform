import React from "react";
import store from "../../store/store";
import { Container } from "./style";
const Profile = () => {
  const { username } = store.getState().login;
  return (
    <Container>
      <h1>Username: {username}</h1>
    </Container>
  );
};

export default Profile;

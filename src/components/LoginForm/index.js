import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkForm } from "../../store/actions/loginAction";
import { useHistory } from "react-router-dom";
import store from "../../store/store";
import { Container, Label, Input, Button } from "./style";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    username: "",
    password: "",
    loginStatus: false,
  });

  const { loginStatus } = store.getState().login;

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    dispatch(
      checkForm({
        ...formValue,
        [name]: value,
      })
    );
  };

  const submitFunc = (e) => {
    e.preventDefault();
    history.push("/profile");
  };

  return (
    <Container>
      <form onSubmit={submitFunc}>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          name="username"
          value={formValue.username}
          onChange={handleChange}
        />

        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={formValue.password}
          onChange={handleChange}
        />
        <Button disabled={loginStatus ? false : true}>Log in</Button>
      </form>
    </Container>
  );
}

import React, { useState } from "react";
import InputGroup from "../components/shared/form/InputGroup";
import { Container } from "../components/UI/Container/Container";
import { deepClone, transforObj } from "../util/Object-utilits";
import { Button } from "../components/UI/button/Button";
const init = {
  name: {
    text: "",
    error: "",
    focus: false,
  },
  email: {
    text: "",
    error: "",
    focus: false,
  },
  password: {
    text: "",
    error: "",
    focus: false,
  },
};
const App = () => {
  const [state, setState] = useState({ ...init });

  const handleChange = (e) => {
    const oldState = deepClone(state);
    let { name, value } = e.target;
    oldState[name].text = value;
    setState(oldState);
    const {error} = checkValidity(state)

    if (error[name] && oldState[name].text){
      oldState[name].error = ''
      setState(oldState)
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { error, isValid } = checkValidity(state);
    const formData = transforObj(state, 'text')
    if (isValid) {
      console.log(formData);
    } else {
      const oldState = deepClone(state);
      Object.keys(error).forEach((key) => {
        oldState[key].error = error[key];
      });
      setState(oldState);
    }
  };

  const handleBlur = (e) => {
    const { error, isValid } = checkValidity(state);
    let key = e.target.name;
    let formFoused = transforObj(state, "focus");
    if (formFoused[key] && error[key]) {
      const oldState = deepClone(state);
      oldState[key].error = error[key];
      setState(oldState);
    }
  };
  const handleFocus = (e) => {
    const oldState = deepClone(state);
    let key = e.target.name;
    oldState[key].focus = true;
    setState(oldState);
  };

  const checkValidity = (values) => {
    const errorCheck = {};

    let formData = transforObj(values, "text");
    if (!formData.name) {
      errorCheck.name = "Invalid name!";
    }
    if (!formData.email) {
      errorCheck.email = "Invalid email!";
    }
    if (!formData.password) {
      errorCheck.password = "Invalid password!";
    }
    return {
      error: errorCheck,
      isValid: Object.keys(errorCheck).length === 0,
    };
  };
  return (
    // onblur, onfoucs

    <Container>
      <form onSubmit={handleSubmit}>
        <InputGroup
          onchange={handleChange}
          onblur={handleBlur}
          onfoucs={handleFocus}
          label={"Name"}
          name={"name"}
          type={"text"}
          placeholder={"John"}
          value={state.name.text}
          error={state.name.error}
        />

        <InputGroup
          onchange={handleChange}
          onblur={handleBlur}
          onfoucs={handleFocus}
          label={"Email"}
          name={"email"}
          placeholder={"John@gmail.com"}
          type={"email"}
          value={state.email.text}
          error={state.email.error}
        />

        <InputGroup
          onchange={handleChange}
          onblur={handleBlur}
          onfoucs={handleFocus}
          label={"Password"}
          type="password"
          name={"password"}
          placeholder={"*****"}
          value={state.password.text}
          error={state.password.error}
        />
        <Button>Submit</Button>
      </form>
    </Container>
  );
};

export default App;

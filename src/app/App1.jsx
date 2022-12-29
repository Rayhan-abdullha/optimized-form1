import React, { useState } from "react";
import { Container } from "../components/UI/Container/Container";
import InputGroup from "../components/shared/form/InputGroup";
import { Button } from "../components/UI/button/Button";

export const isObjEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};


const init = {
  title: {
      values: '',
      errors: '',
      focus: false,
  },
  bio: {
      values: '',
      errors: '',
      focus: false,
  },
  skills: {
      values: '',
      errors: '',
      focus: false,
  },
};

function App() {
  const [states, setStates] = useState({ ...init })

  const handleChange = (e) => {
    const oldState = deepClone(states)
    let key = e.target.name
    oldState[key].values = e.target.value
    setStates(oldState)

    if (states[key].focus && states[key].values && states[key].errors){
      const oldState1 = deepClone(states)
      oldState1[key].errors = ''
      setStates(oldState1)
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const {error, isValid} = checkValidity(states)

    const formData = Object.keys(states).reduce((acc, prev) => {
      acc[prev] = states[prev].values
      return acc
    }, {})

    if (isValid){
      console.log(formData);
    } else {
      const oldState = deepClone(states)
      Object.keys(oldState).forEach(key => {
        oldState[key].errors = error[key]
      })
      setStates(oldState)
    }
  };

  const handleFocus = (e) => {
    const oldState = deepClone(states)
    oldState[e.target.name].focus = true
    setStates(oldState)
  };

  const handleBlur = (e) => {
    const {error} = checkValidity(states)
    let key = e.target.name
    const oldState = deepClone(states)

    if (states[key].focus && error[key]){
      oldState[key].errors = error[key]
      setStates(oldState)
    } else {
      console.log('blur');
    }
  };

  const checkValidity = (formData) => {
    let error = {};
    if (!formData.title.values) {
      error.title = "Invalid title";
    }
    if (!formData.bio.values) {
      error.bio = "Invalid bio";
    }
    if (!formData.skills.values) {
      error.skills = "Invalid skills";
    }
    return {
      error,
      isValid: Object.keys(error).length === 0,
    };
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputGroup
          onchange={handleChange}
          onfoucs={handleFocus}
          onblur={handleBlur}
          name="title"
          label="Title"
          placeholder={"Enter title"}
          value={states.title.values}
          error={states.title.errors}
        />
        <InputGroup
          onchange={handleChange}
          onfoucs={handleFocus}
          onblur={handleBlur}
          name="bio"
          label="Bio"
          placeholder={"Enter bio"}
          value={states.bio.values}
          error={states.bio.errors}
        />
        <InputGroup
          onchange={handleChange}
          onfoucs={handleFocus}
          onblur={handleBlur}
          name="skills"
          label="Skills"
          placeholder={"Enter skills"}
          value={states.skills.values}
          error={states.skills.errors}
        />
        <Button>Submit</Button>
      </form>
    </Container>
  );
}
export default App;

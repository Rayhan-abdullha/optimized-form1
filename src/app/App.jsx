import React, { useState } from "react";
import { Container } from "../components/UI/Container/Container";
import InputGroup from "../components/shared/form/InputGroup";
import { Button } from "../components/UI/button/Button";

const init = {
  title: "",
  bio: "",
  skills: "",
};
function App() {
  const [formData, setFormData] = useState({ ...init });
  const [formError, setFormError] = useState({ ...init });
  const [focus, setFocus] = useState({
    title: false,
    bio: false,
    skills: false,
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    const key = e.target.name
    if (focus[key] && formError[key]){
      setFormError({
        ...formError,
        [key]: ""
      })
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error, isValid } = checkValidity(formData);
    if (isValid) {
      console.log(formData)
    } else {
      setFormError(error);
    }
  };

  const checkValidity = (formData) => {
    let error = {};
    if (!formData.title) {
      error.title = "Invalid title";
    }
    if (!formData.bio) {
      error.bio = "Invalid bio";
    }
    if (!formData.skills) {
      error.skills = "Invalid skills";
    }
    return {
      error,
      isValid: Object.keys(error).length === 0,
    };
  };

  const handleBlur = (e) => {
    let key = e.target.name;
    const { error } = checkValidity(formData);
    if (focus[key] && error[key]) {
      setFormError({
        ...formError,
        [key]: error[key],
      });
    } else {
      setFormError({
        ...formError,
        [key]: "",
      });
    }
  };

  const handleFocus = (e) => {
    setFocus({
      ...focus,
      [e.target.name]: true,
    });
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
          value={formData.title}
          error={formError.title}
        />
        <InputGroup
          onchange={handleChange}
          onfoucs={handleFocus}
          onblur={handleBlur}
          name="bio"
          label="Bio"
          placeholder={"Enter bio"}
          value={formData.bio}
          error={formError.bio}
        />
        <InputGroup
          onchange={handleChange}
          onfoucs={handleFocus}
          onblur={handleBlur}
          name="skills"
          label="Skills"
          placeholder={"Enter skills"}
          value={formData.skills}
          error={formError.skills}
        />
        <Button>Submit</Button>
      </form>
    </Container>
  );
}
export default App;

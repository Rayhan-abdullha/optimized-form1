import React from "react";
import { useState } from "react";

const contactFormData = {
  name: "",
  email: "",
  group: ""
}

export default function ContactForm({getData}) {
  const [values, setValues] = useState(contactFormData)
  const {name, email, group} = values
  const handleOnChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  } 
  const handleSubmit = (e) => {
    e.preventDefault();
    getData(values)
    setValues(contactFormData)
};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleOnChanges} value={name}/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" onChange={handleOnChanges} value={email}/>
      </div>
      <div>
        Group: 
        <select name="group" onChange={handleOnChanges} value={group}>
          <option value="">
            Select Group
          </option>
          <option value="home">
            home
          </option>
          <option value="office">
            office
          </option>
        </select>
      </div>
      <input type="submit" value="Create New Contact" />
    </form>
  );
}

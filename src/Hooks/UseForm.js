import { useState } from "react";
import { deepClone, transforObj } from "../util/Object-utilits";

const UseForm = ({init}) => {
    const [users, setUser] = useState([])
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
      const user = transforObj(state, 'text')
      if (isValid) {
        setUser([
          ...users,
          user
        ]);
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
    return {
        users,
        state,
        handleChange,
        handleBlur,
        handleFocus,
        handleSubmit
    }
}
export default UseForm
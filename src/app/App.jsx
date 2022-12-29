import InputGroup from "../components/shared/form/InputGroup";
import { Container } from "../components/UI/Container/Container";
import { Button } from "../components/UI/button/Button";
import UseForm from "../Hooks/UseForm";
import UserData from "../components/ShowDisplayData/UserData";

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
  const {users, state, handleChange, handleBlur, handleFocus, handleSubmit } =
    UseForm({ init });

  return (
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
      
      {
        users.length > 0 && <UserData data={users}/>
      }
    </Container>
  );
};

export default App;

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const H1 = styled.h1`
  color: ${(props) => (props.color ? props.color : "green")};
`;

const Div = styled.div`
    background: black;
    border: 1px solid gray;
    height: 100px;
    width: ${(props) => (props.size ? props.size : "200px")};
    padding: 10px;
`;

export default function App8() {
  return (
    <div>
      <Div>
        <H1 color="red">Count</H1>
      </Div>
      <Div size="100px">
        <H1 color="green">Count</H1>
      </Div>
      <Button>Normal</Button>
      <Button primary>Normal</Button>
    </div>
  );
}

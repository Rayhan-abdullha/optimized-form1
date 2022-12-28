import styled from "styled-components";

const TextInput = styled.input`
    width: 100%;
    outline: none;
    border: ${(props) => props.error ? "1px solid red" : "1px solid #ddd"};
    padding: 10px;
    font-size: 0.9rem;
    color: #999;
    overflow: hidden;
    box-sizing: border-box;
    margin-top: 10px;

    &:focus {
        border: 2px solid skyblue
    }
`

export default TextInput;
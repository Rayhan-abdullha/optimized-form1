import styled from "styled-components";

const fontSize = {
    sm: '0.8rem',
    md: '0.6rem',
    lg: '1.1rem'
}
const lineHeight = {
    sm: 1.2,
    md: 1.4,
    lg: 1.6
}

const Text = styled.p`
    font-family: Arial;
    font-size: ${props => fontSize[props.size] ?? '1rem'};
    color: #222;
    line-height: ${props => lineHeight[props.line] ?? '1.3'}
`

export default Text
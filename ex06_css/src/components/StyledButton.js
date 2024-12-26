import styled, { css } from "styled-components";
const styledButton = styled.button`
width: 100px;
height: 30px;
margin-top: 10px;
border: none;
border-radius: 5px;
font-size: 15px;
font-weight: bold;
cursor: pointer;
background-color: lightgray;
&:hover { background-color: gray; }
${props => props.width && css`
    width: ${props.width};
    `}
${props => props.background && css`
    background: rgb(
        ${props.background[0]},
        ${props.background[1]},
        ${props.background[2]}
        );
&:hover {
background: rgb(
        ${props.background[0] - 50},
        ${props.background[1] - 50},
        ${props.background[2] - 50}
        );}
    `}
`
export default styledButton 
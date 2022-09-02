import styled from "styled-components";

function Clickable(props) {
  const fill = props.fillWidth === true;
  const Button = styled.button`
    background: transparent;
    border: none;
    outline: none;
    color: inherit;
    padding: 0;
    margin: 0;
    transition: background 0.1s, color 0.1s, opacity 0.1s;
    width: ${fill ? "100%" : "fit-content"};
  `;
  return <Button className="d-flex">{props.children}</Button>;
}

export default Clickable;

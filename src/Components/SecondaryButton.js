import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
  // Здесь устанавливается минимальная ширина для кнопки
  let minWidth = props.minWidth === undefined ? "144px" : props.minWidth;
  const Button = styled.div`
    background: none;
    border: 1px solid #64748b;
    border-radius: 24px;
    border-style: inset;
    min-width: ${(minWidth = "217px")};
    color: #64748b;

    &:hover {
      background: none;
      border: none;
    }
    &:active {
      background: #dfdfdf;
    }
  `;
  return (
    <Clickable>
      <Button className="p-2 text-md">{props.children}</Button>
    </Clickable>
  );
}

export default SecondaryButton;

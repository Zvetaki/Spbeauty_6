import Clickable from "./Clickable";
import styled from "styled-components";

const ButtonContainer = styled.div`
  margin-left: 12px;
`;

function IconAndTextButton({ icon, text }) {
  return (
    <Clickable>
      <div className="d-flex flex-row justify-content-start align-self-center align-items-center">
        {icon}
        <ButtonContainer className="text-md">{text}</ButtonContainer>
      </div>
    </Clickable>
  );
}

export default IconAndTextButton;

import Clickable from "./Clickable";
import styled from "styled-components";

function IconOnlyButton({ icon }) {
  const Container = styled.div`
    &:hover {
      color: #64748b;
    }
  `;
  return (
    <Container>
      <Clickable>{icon}</Clickable>
    </Container>
  );
}

export default IconOnlyButton;

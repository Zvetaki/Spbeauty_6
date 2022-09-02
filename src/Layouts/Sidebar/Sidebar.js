import SideMenuContents from "./Components/SideMenuContents";
import IconAndTextButton from "../../Components/IconAndTextButton";
import ArrowBackIcon from "../../Icons/ArrowBackIcon";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f8fafc;
  color: #64748b;
  height: 100vh;
  border-right: solid #eceef1 1px;
`;

const ButtonContainer = styled.div`
  &:hover {
    color: #0f172a;
  }
`;

const SideMenuContainer = styled.div`
  padding-top: 72px;
`;

function Sidebar() {
  return (
    <Container>
      {" "}
      {/* Цветной фон */}
      <ButtonContainer className="m-3 d-flex">
        {" "}
        {/* Кнопка слева сверху */}
        <IconAndTextButton text="На главную" icon={<ArrowBackIcon />} />
      </ButtonContainer>
      <SideMenuContainer className="px-1">
        <SideMenuContents /> {/* Элементы сайдбара */}
      </SideMenuContainer>
    </Container>
  );
}

export default Sidebar;

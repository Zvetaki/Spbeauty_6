import SearchField from "./Components/SearchField";
import Account from "./Components/Account";
import IconsRow from "./Components/IconsRow";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f8fafc;
`;

function Header() {
  return (
    <Container className="d-flex justify-content-end align-items-center align-self-center px-5 py-3">
      <div className="me-4">
        <SearchField />
      </div>
      <IconsRow /> {/* Кнопки для сообщений и уведомлений */}
      <div className="ms-3">
        <Account /> {/* Аватар и имя пользователя */}
      </div>
    </Container>
  );
}

export default Header;

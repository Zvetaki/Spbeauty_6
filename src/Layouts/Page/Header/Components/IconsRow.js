import styled from "styled-components";
import Clickable from "../../../../Components/Clickable";
import MessagesIcon from "../../../../Icons/MessagesIcon";
import NotificationsIcon from "../../../../Icons/NotificationsIcon";
import IconOnlyButton from "../../../../Components/IconOnlyButton";

const ButtonLeftWrapper = styled.div`
  padding-right: 6px;
  &:hover {
    opacity: 80%;
  }
`;
const ButtonRightWrapper = styled.div`
  padding-left: 6px;
  &:hover {
    opacity: 80%;
  }
`;

function IconsRow() {
  return (
    <div className="d-inline-flex flex-row align-items-center align-self-center">
      <ButtonLeftWrapper>
        <IconOnlyButton icon={<MessagesIcon />} />
      </ButtonLeftWrapper>
      <ButtonRightWrapper>
        <IconOnlyButton icon={<NotificationsIcon />} />
      </ButtonRightWrapper>
    </div>
  );
}

export default IconsRow;

import styled from "styled-components";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import EditIcon from "../../../../../Icons/EditIcon";
import RemoveIcon from "../../../../../Icons/RemoveIcon";
import IconOnlyButton from "../../../../../Components/IconOnlyButton.js";

const Option = styled.div`
  outline: none;
  border-radius: 1px;
  border: none;
  background-color: none;
  color: #0f172a;
`;

function ListElement(props) {
  return (
    <div className="d-flex flex-row justify-content-between">
      <Option className="flex-grow-1 py-2 me-5">{props.children}</Option>
      <IconOnlyButton icon={<EditIcon />} />
      <IconOnlyButton icon={<RemoveIcon />} />
    </div>
  );
}

export default ListElement;

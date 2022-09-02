import styled from "styled-components";

const Input = styled.input`
  outline: none;
  border-radius: 24px;
  border: solid #e2e8f0 1px;
  background-color: #f8fafc;
  color: #0f172a;
  &:hover {
    border: solid #e2e8f0 0px;
  }
`;

function TitledTextInput({ title, def }) {
  const Title =
    title === undefined ? (
      <div></div>
    ) : (
      <div className="caption-rg color-steel-gray--400"> {title} </div>
    );
  return (
    <div className="caption-rg color-steel-gray--400 d-flex flex-column gap-1">
      {Title}
      <Input className="p-2" defaultValue={def}></Input>
    </div>
  );
}

export default TitledTextInput;

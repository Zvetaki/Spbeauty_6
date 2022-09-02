import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";

function Addresses() {
  return (
    <div className="d-flex flex-column gap-4 m-4 mb-2 py-2 px-1">
      <div className="title">Адреса заведений</div>
      <div className="d-inline-flex flex-column mb-5 gap-3 py-2">
        <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
        <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>{" "}
      </div>
      <div className="d-inline-flex mt-5 gap-5 py-5 px-1">
        <SecondaryButton>Добавить филиал</SecondaryButton>
      </div>
    </div>
  );
}

export default Addresses;

import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentStatus, hideModal } from "../features/modal/modalSlice";
import CloseIcon from "../icons/CloseIcon";
import ModalListItem from "./ModalListItem";

interface citySchema {
  id: number;
  city: String;
}

function CityModal() {
  // use selector
  const modalStatus = useSelector(currentStatus);
  const dispatch = useDispatch();

  // define ref
  const searchInputRef: any = useRef<HTMLInputElement>(null);

  const [cityArray] = useState([
    { id: 1, city: "Delhi", location: "Delhi,IN" },
    { id: 2, city: "Surat", location: "Surat,IN" },
    { id: 3, city: "Chennai", location: "Chennai,IN" },
    { id: 4, city: "Goa", location: "Goa,IN" },
    { id: 5, city: "Rajasthan", location: "Rajasthan,IN" },
    { id: 6, city: "Bihar", location: "Bihar,IN" },
    { id: 7, city: "Hyderabad", location: "Hyderabad,IN" },
  ]);

  const [filteredCityArray, setFilteredCityArray] = useState(cityArray);

  const searchCity = (e: any) => {
    e.preventDefault();
    setFilteredCityArray(
      cityArray.filter((item: citySchema) => {
        return (
          item.city
            .toLowerCase()
            .indexOf(searchInputRef.current.value.toLowerCase()) !== -1
        );
      })
    );
  };

  //   on click close modal
  const closeModal = () => {
    dispatch(hideModal());
  };

  return (
    <div className={modalStatus ? "block" : "hidden"}>
      <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50">
        <div className="relative inset-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white p-10 max-w-md h-524">
          <div className="flex justify-between border-b-2 pb-3">
            <h2 className="text-2xl">Add city Modal</h2>
            <button onClick={closeModal} aria-label="Close">
              <CloseIcon />
            </button>
          </div>
          <div className="mt-4 pb-4 border-b-2">
            <input
              className="border rounded-md shadow-lg outline-none w-full p-2"
              placeholder="Search city"
              type="search"
              name="search cities"
              ref={searchInputRef}
              onChange={searchCity}
            />
          </div>
          {filteredCityArray.length ? (
            <div className="max-h-80 overflow-scroll">
              {filteredCityArray.map((data: citySchema) => {
                return <ModalListItem key={data.id} content={data} />;
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default CityModal;

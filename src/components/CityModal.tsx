import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { currentStatus, hideModal } from "../features/modal/modalSlice";
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
    { id: 1, city: "Delhi" },
    { id: 2, city: "Surat" },
    { id: 3, city: "Chennai" },
    { id: 4, city: "Goa" },
    { id: 5, city: "Rajasthan" },
    { id: 6, city: "Bihar" },
    { id: 7, city: "Hyderabad" },
  ]);

  const [filteredCityArray, setFilteredCityArray] = useState(cityArray);

  const searchCity = (e: any) => {
    e.preventDefault();
    // console.log(searchInputRef.current.value);
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
        <div className="relative inset-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white px-10 py-5 max-w-md">
          <div className="flex justify-between">
            <h3>Add city Modal</h3>
            <button onClick={closeModal}>Close</button>
          </div>
          <div>
            <input
              type="search"
              name="search cities"
              ref={searchInputRef}
              onChange={searchCity}
            />
          </div>
          {filteredCityArray.length ? (
            <div>
              {filteredCityArray.map((data: citySchema) => {
                return <ModalListItem content={data} />;
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

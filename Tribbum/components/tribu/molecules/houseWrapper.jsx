import { useState } from "react";
import HomeHouseCard from "../elements/houseCard/homehouseCard";
import {
  addTenement,
  deleteTenement,
  getAllTenements,
  getTenementById,
  setTenement,
  updateTenement
} from "@/firebase/entities/tenements";

const HouseWrapper = ({ toggleHouseSlideOver }) => {
  const [houseDatas, setHouseDatas] = useState([]);
  const handleGetTenements = async () => {
    const data = await getAllTenements();
    setHouseDatas(data);
  };
  handleGetTenements();

  return (
    <div className="flex flex-row w-full h-auto overflow-scroll overflow-visible py-6 ">
      {houseDatas?.slice(0, 10).map((houseData, index) => {
        return (
          <HomeHouseCard
            key={index}
            houseData={houseData}
            toggleHouseSlideOver={toggleHouseSlideOver}
          />
        );
      })}
    </div>
  );
};
export default HouseWrapper;

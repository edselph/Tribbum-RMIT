import { useState } from "react";
import { getAllData } from "@/firebase/entities/database";

const CitiesList = () => {
  const [CitiesDatas, setCitiesDatas] = useState([]);

  const handleGetTenements = async () => {
    const data = await getAllData("tenements");
    setCitiesDatas(data);
  };
  handleGetTenements();

  const list = CitiesDatas?.map((cityData, index) => cityData.city);

  return list;
};
export default CitiesList;

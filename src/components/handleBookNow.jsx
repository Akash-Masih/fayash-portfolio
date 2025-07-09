// src/components/handleBookNow.jsx

import { useNavigate } from "react-router-dom";

export default function useHandleBookNow() {
  const navigate = useNavigate();

  const handleBookNow = (index) => {
    const carName = `Premium Car ${index + 1}`;
    navigate("/bookingdetails", { state: { carIndex: index, carName } });
  };

  return handleBookNow;
}

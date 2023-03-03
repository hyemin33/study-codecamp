import axios from "axios";
import { useState, useEffect } from "react";

export default function openapiWithUseEffectaPage() {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setData(result.data.message);
    };

    void fetchDog();
  }, []);

  return (
    <>
      <img src={data} />
    </>
  );
}

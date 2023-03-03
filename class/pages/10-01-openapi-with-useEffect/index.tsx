import axios from "axios";
import { useState, useEffect } from "react";

export default function openapiWithUseEffectaPage() {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchDog = async () => {
      new Array(9).fill(1).forEach(async (_) => {
        const result = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        setData((prev) => [...prev, result.data.message]);
      });
    };

    void fetchDog();
  }, []);

  return (
    <>
      {data.map((el, index) => (
        <img src={el} key={index} />
      ))}
    </>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";

export const useHome = () => {
  // penampung data dari API
  const [data, setData] = useState([]);

  // ambil data dari API
  const getData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}`
    );
    setData(response.data.rates);
  };

  // filter data yang diinginkan
  const listFilter = ["CAD", "EUR", "IDR", "JPY", "CHF", "GBP","USD"];

  // filter dan persingkat desimal pada data
  // filter dan persingkat desimal pada data
const dataFiltered = Object.keys(data)
.filter((key) => listFilter.includes(key))
.reduce((obj, key) => {
  const value = parseFloat(data[key]);
  if (!isNaN(value)) {
    obj[key] = value.toFixed(5); // Memotong menjadi 2 desimal
  }
  return obj;
}, {});


  // panggil fungsi getData() ketika pertama kali di render
  useEffect(() => {
    getData();
  }, []);

  // kirim data yang sudah difilter dan dipersingkat desimal
  return {
    dataFiltered,
  };
};

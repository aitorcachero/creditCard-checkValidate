import { useState } from 'react';
import trimLength from '../helpers/trimLength';
import validateNum from '../helpers/validateNum';

export default function useInfo() {
  const [data, setData] = useState();
  const [value, setValue] = useState();
  const [valid, setValid] = useState();

  const fetchData = async (num) => {
    const APIKEY = import.meta.env.VITE_API_KEY;
    let BIN = num.replace(' ', '');

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': APIKEY,
        'X-RapidAPI-Host': 'bin-ip-checker.p.rapidapi.com',
      },
      body: `{"bin":${BIN}`,
    };

    try {
      const datos = await fetch(
        `https://bin-ip-checker.p.rapidapi.com/?bin=${BIN}`,
        options
      );
      const res = await datos.json();

      res.success ? setData(res.BIN) : console.log(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChange = (e) => {
    setValue(e.target.value.toString()[0]);

    if ((e.target.value.toString().length > 6) & !data)
      fetchData(e.target.value);
    if (e.target.value.toString().length < 7) setData();

    e.target.value.toString().length === 16
      ? setValid(validateNum(e.target.value))
      : setValid(null);

    if (e.target.value.toString().length > 16)
      e.target.value = trimLength(e.target.value);
  };

  return {
    data,
    fetchData,
    handleOnChange,
    value,
    valid,
  };
}

import React, { useState, useEffect } from "react";
import ReportTable from "../../components/ReportTable";
import Searcher from "../../components/Searcher";
import { getListContryName } from "../../services/countries";

interface IColumns {
  key: string;
  label: string;
  type: 'text' | 'img';
}

const Report = () => {
  const [columns, setColumns] = useState<IColumns[]>([]);
  const [countryStarter, setCountryStarter] = useState([]);
  const [inputCountry, setInputCountry] = useState('col');


  useEffect(() => {
    getCountries(inputCountry);
  }, [inputCountry]);

  const getCountries = async (country: string) => {
    try {
      const countryResponse = await getListContryName(country);
      setColumns([
        { key: 'name', label: 'Nombre', type: 'text' },
        { key: 'flags', label: 'Bandera', type: 'img' },
        { key: 'region', label: 'Región', type: 'text' },
        { key: 'population', label: 'Población', type: 'text' },
      ]) 
      const countryMap = countryResponse.map((item: any) => {
        return {
            name: item.name.common,
            flags: item.flags.png,
            region: item.region,
            population: item.population
        }
      });
      setCountryStarter(countryMap);
    } catch (error) {
      console.log("Error del servidor");
    }
  };

  const changeInput = (e: string) => {
    setInputCountry(e)
  }

  return (
    <div>
      <Searcher setInput={changeInput} />
      <ReportTable dataTable={countryStarter} columns={columns}/>
    </div>
  );
};

export default Report;

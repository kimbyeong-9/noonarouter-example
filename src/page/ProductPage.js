import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Productpage = () => {
    let [query, setQuery] = useSearchParams();
    console.log("dddd", query.get("page"));

  return (
  <div>
    <h1>Show AII products!!!</h1>
    </div>
    );
};

export default Productpage;
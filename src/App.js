import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

//Database
import ProductsData from "./db/data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //-----------------input filter-------------
  const handelInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filterditems = ProductsData.filter((product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==-1
  );

  //-------------Radio filter-------------------
  const handelChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //--------------Buttons filter-------------
  const handelClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filterdData(ProductsData, selected, query) {
    let filterdProducts = ProductsData;

    // filtering input items
    if (query) {
      filterdProducts = filterditems;
    }

    //selected filter
    if (selected) {
      filterdProducts = filterdProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filterdProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filterdData(ProductsData, selectedCategory, query);

  return (
    <>
      <Sidebar handelChange={handelChange} />
      <Navigation query={query} handelInputChange={handelInputChange}/>
      <Recommended handelClick={handelClick} />
      <Products result={result} />
    </>
  );
}

export default App;

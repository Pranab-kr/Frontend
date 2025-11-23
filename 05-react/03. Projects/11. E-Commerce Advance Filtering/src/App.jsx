import { useState, useEffect } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./../db/data.jsx";
import Card from "./components/Card";
import "../index.css"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");

  //------------Input  Filter--------------
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // useEffect for query changes
  useEffect(() => {
    console.log("Query changed:", query); // Debug log
  }, [query]);

  //-------Radio Filter--------
  const handleChange = (event) => setSelectedCategory(event.target.value);

  //-----------Buttons Filter------------
  const handleClick = (event) => setSelectedCategory(event.target.value);

  function filterData(products, selected, query) {
    let filteredProducts = products;

    // Apply category/color/company filter FIRST
    if (selected && selected !== "" && selected !== "null") {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    // Then apply search filter on the already filtered products
    // if (query) {
    //   filteredProducts = filteredProducts.filter(
    //     (product) =>
    //       product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    //   );
    // }
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filterData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;

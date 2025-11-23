import axios from "axios";
import { useEffect, useState } from "react";

const Meals = () => {
const [items, setItems] = useState([])

useEffect(() => {
  const fetchMeals = async () => {
    try {
      const res = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
      
      // console.log(res.data.meals);
      setItems(res.data.meals)

    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  fetchMeals();
}, []);

  const itemsList = items.map(({strMeal, strMealThumb ,idMeal}) =>{
    return <section className="card" key={Math.random()}>
      <img src={strMealThumb} alt={strMeal} />

      <section className="content">
      <p>{strMeal}</p>

      <p>#{idMeal}</p>
      </section>
    </section>
  })


  return (
    <div className="items-container">{itemsList}</div>
  );
};

export default Meals;
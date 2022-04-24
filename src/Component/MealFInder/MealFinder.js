import { useEffect, useState } from "react";


const MealFinder = () => {

    const [search, setSearch] = useState('');
    const [meals,setMeals] = useState([])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[search])
    
const handleChange =event => {
    setSearch(event.target.value);
}
    
    return (
        <div>
          <h3>Find Delicious Meal</h3>
          <input type="text" onChange={handleChange} placeholder="Search Food"></input>
            <p>Search for {search}</p>
            <p>Total meal Found {meals?.length || 0 }</p>

            <ul>
                {
                    meals?.map(meal => <li>{meal.strMeal}</li>)
                }
            </ul>

        </div>
    );
};

export default MealFinder;
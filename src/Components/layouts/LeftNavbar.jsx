import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(response=>response.json())
        .then(data=>setCategories(data.data.news_category))
    },[]);
    return (
        <div>
            <h2 className="font-semibold font-poppins mb-4">All Category({categories.length})</h2>
            <div className="flex flex-col">
                {
                    categories.map(category=><>
                        <NavLink to={`/category/${category.category_id}`} className="btn" key={category.category_id}>{category.category_name}</NavLink>
                        
                        
                    </>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;
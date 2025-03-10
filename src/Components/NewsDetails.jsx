import RightNavbar from "./layouts/RightNavbar";
import Navbar from "./Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLoaderData } from "react-router";

const NewsDetails = () => {
    const {data} = useLoaderData();
    const {title,details,image_url,category_id} = data[0];
    
    return (
        <div>
            <header className="m-2">
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
                <section className="col-span-9">
                    <h2 className="text-2xl">Dragon News</h2>
                    <div className="card p-4 bg-base-100 mt-5 shadow-sm">
                        <figure>
                            <img className="w-full"
                            src={image_url}
                            alt={title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                            <div className="card-actions mt-4">
                                <Link to={`/category/${category_id}`} className="btn btn-primary">Back to category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;
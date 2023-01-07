import { useState } from "react";
import Blog from "./Blog";


const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "My first blog",
            body: "Lorem ipsum ...",
            author: "Othmane",
        },
        { id: 2, title: "My second blog", body: "Lorem ipsum ...", author: "Taha" },
        { id: 3, title: "My third blog", body: "Lorem ipsum ...", author: "Adam" },
    ]);
    const handleDelete = (id) => {
    const newList = blogs.filter(item => item.id !== id);
    setBlogs(newList); 
  };

return (
    <div className="home">
      <Blog blogs={blogs} title="All blog!!" handleDelete={handleDelete} />
      {/* <Blog blogs={blogs.filter(item => item.author === 'Othmane')} title={"Othmane's Blogs"} /> */}
    </div>
  );
};

export default Home;

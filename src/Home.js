import { useState , useEffect} from "react";
import Blog from "./Blog";


const Home = () => {
    const [blogs, setBlogs] = useState(null);

   useEffect(()=>{
    console.log('use effect ran !!');
    fetch("http://localhost:8000/blogs")
       .then(res => res.json())
       .then(data => setBlogs(data));
   },[])

return (
    <div className="home">
      { blogs && <Blog blogs={blogs} title="All blog!!" /> }
      {/* <Blog blogs={blogs.filter(item => item.author === 'Othmane')} title={"Othmane's Blogs"} /> */}
    </div>
  );
};

export default Home;

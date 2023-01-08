import { useState , useEffect} from "react";
import Blog from "./Blog";


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);

   useEffect(()=>{
    console.log('use effect ran !!');
    fetch("http://localhost:8000/blogs")
       .then(res => res.json())
       .then(data => {
          setBlogs(data);
          setIsPending(false);
      });
   },[])

return (
    <div className="home">
      {isPending && <div>Loading...</div> }
      { blogs && <Blog blogs={blogs} title="All blog!!" /> }
      {/* <Blog blogs={blogs.filter(item => item.author === 'Othmane')} title={"Othmane's Blogs"} /> */}
    </div>
  );
};

export default Home;

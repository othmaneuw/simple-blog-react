import { useState , useEffect} from "react";
import Blog from "./Blog";


const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

   useEffect(()=>{
    console.log('use effect ran !!');
    fetch("http://localhost:8000/blogs")
       .then(res => {
        if(!res.ok){
          throw Error("Couldn't fetch data from the resources");
        }
        return res.json();
      })
       .then(data => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
      })
      .catch(err =>{
        setError(err.message);
        setIsPending(false);
      })
   },[])

return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>Loading...</div> }
      { blogs && <Blog blogs={blogs} title="All blog!!" /> }
      {/* <Blog blogs={blogs.filter(item => item.author === 'Othmane')} title={"Othmane's Blogs"} /> */}
    </div>
  );
};

export default Home;

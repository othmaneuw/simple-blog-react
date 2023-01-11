import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body,setBody] = useState("");
  const [author,setAuthor] = useState("othmane");
  const [isPending , setIsPending] = useState(false);
  const handleSubmit = (e)  =>{
       e.preventDefault();
       setIsPending(true);
       const blog = {
        title,
        body,
        author
       };
       fetch('  http://localhost:8000/blogs',{
        method : 'POST',
        body : JSON.stringify(blog),
        headers : {'Content-Type':'application/json'}
       }).then(res=>{
        console.log('Blog added !!');
        setIsPending(false);
       })
  }
  return (
    <div className="create">
      <h2>Add a Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input type="text" required onChange={(e)=>setTitle(e.target.value)} />
        <label>Blog body:</label>
        <textarea required onChange={(e)=>{setBody(e.target.value)}} ></textarea>
        <label>Blog author</label>
        <select onChange={(e)=>{setAuthor(e.target.value)}}>
          <option value="othmane">Othmane</option>
          <option value="mario">Mario</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;

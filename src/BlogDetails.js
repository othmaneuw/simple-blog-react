import {useHistory, useParams} from 'react-router-dom'
import useFetch from './useFetch';

const Details = () => {
    const {id} = useParams();
    const {data : blog , isPending ,error} = useFetch('http://localhost:8000/blogs/'+id);
    const history = useHistory();
    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/'+id,{
            method : 'DELETE'
        }).then(res => history.push('/'))
    }
    return (
        <div className="details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p> {blog.author} </p>
                    <div>
                        {blog.body}
                    </div>
                    <button onClick={handleClick} >Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default Details;
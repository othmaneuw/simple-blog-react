import {useParams} from 'react-router-dom'
import useFetch from './useFetch';

const Details = () => {
    const {id} = useParams();
    const {data : blog , isPending ,error} = useFetch('http://localhost:8000/blogs/'+id);
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
                </article>
            )}
        </div>
    );
}
 
export default Details;
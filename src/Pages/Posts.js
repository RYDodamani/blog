import { useEffect, useState } from "react"
import { fetchPosts } from "../api/fetchData";

export default function(){
    const [posts, setPosts] = useState(['Renaming cities of India'])
    useEffect(()=>{
        async function fetch(){
            try{
                let res = await fetchPosts();
                console.log(res)
                setPosts(ps=>[...ps,...res])
            }
            catch(err){
                alert('post error')
            }
        }
        fetch()
    },[])
    useEffect(() => {
        const eventSource = new EventSource('http://localhost:1337/posts/subscribe');
    
        eventSource.onmessage = (event) => {
            setPosts((prevEvents) => [...prevEvents, event.data]);
        };
    
        eventSource.onerror = (error) => {
          console.log('SSE Error:', error);
        };
    
        return () => {
          eventSource.close();
        };
      }, []);

    return (<div>
        <ul>
            {posts.map((p,i)=>{
                return <li key={i}>{p}</li>
            })}
        </ul>
    </div>)
}
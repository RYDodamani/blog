import { useEffect, useState } from "react"
import { fetchBooks } from "../api/fetchData"

export default function(){
    const [books, setBooks] = useState(['karvalo'])

    useEffect(()=>{
        async function fetch(){
            try{
                let res = await fetchBooks();
                console.log(res)
                setBooks(bs=>[...bs,...res])
            }
            catch(err){
                alert('book error')
            }
        }
        fetch()
    },[])

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:1337/books/subscribe');
    
        eventSource.onmessage = (event) => {
            setBooks((prevEvents) => [...prevEvents, event.data]);
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
            {books.map((b,i)=>{
                return <li key={i}>{b}</li>
            })}
        </ul>
    </div>)
}
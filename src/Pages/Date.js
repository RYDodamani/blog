import { useEffect, useState } from "react";

export default function(){
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const eventSource = new EventSource('http://localhost:1337/date/subscribe');
        eventSource.onmessage = (event) => {
            setDate(event.data)
        }
        eventSource.onerror = (error) => {
            console.log('/date/subscribe error:',error)
        }
        return () => {
            eventSource.close()
        }
    },[])

    return (
        <div>
            {date}
        </div>
    )
}
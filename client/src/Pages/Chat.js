import React, {useEffect} from 'react';
import axios from "axios";
const FetchChats= async ()=>{
    const data= await axios.get("/api/chat")
    console.log(data)
    useEffect(() => {
        return () => {
            FetchChats()

        };
    }, []);
    
}
const Chats= ()=>{
    return(
        <div className='backdrop-blur'>
           <h1>Chats</h1>
        </div>
    )
}
export default Chats;
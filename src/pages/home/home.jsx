import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const navigate = useNavigate();

    useEffect(()=>{
        const interval = setInterval(()=>{
            getTime();
        }, 1000);
        return () =>{
            clearInterval(interval);
        }
    }, []);
    const getTime = () => {
        setTime(new Date().toLocaleTimeString());
    }
    function handleClick() {
        navigate("/Login");
    }
    
    return (
        <>
        <div>home page</div>

        <h1>Current time is:- {time}</h1>
        <button onClick={handleClick}>login</button>
        </>
    )
}

export default Home;
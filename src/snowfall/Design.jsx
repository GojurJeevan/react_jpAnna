import { faL } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react"
import Snowfall from "react-snowfall"

export const Design = () => {

    const [display,setDisplay] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(()=>{
        <Snowfall/>

        setDisplay(false);
        },5000);

        return () => clearTimeout(timer);
    },[])

    if(!display) return null;

    
    return(
        <>
        <Snowfall color="#FFFAFA"
                  speed={[3.0,5.0]}
                  snowflakeCount={200}
        />
        </>
        
    )
}
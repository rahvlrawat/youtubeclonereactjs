import React, {useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";
import './Maintainance.css'
function Maintainance() {
    const history = useHistory()
    const [counter, setcounter] = useState(5);
    
     
    useEffect(() => {
        const interval = setInterval(() => {
            setcounter(counter=>counter-1)
        }, 1000);
        
        

    }, [])
    if(counter===0){ 
        history.push('/')
    }
    return (
        <div className='content'>
            <h1 className='msg'>👨‍
                            This Page is under Maintenance.
                <br/>
                Please check again later...
                You'll be redirected to Home Page in {counter}
            </h1>
        </div>

    )
}

export default Maintainance

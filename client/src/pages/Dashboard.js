import React, { useEffect, useState } from "react";
import jwt from 'jsonwebtoken';
import {useNavigate} from 'react-router-dom';
const Dashboard = () => {

    const navigate = useNavigate();
    const [quote,setQuote] = useState('')

    async function populateQuote(){
        const req = await fetch('http://localhost:1337/api/quote',{
            headers:{
                'x-access-token':localStorage.getItem('token'),
            }
        })

        const data = req.json()
        console.log(data)
        if(data.status==='ok'){
            setQuote(data.quote)
        }else{
            alert(data.error)
        }
    }

    useEffect(()=>{
        const token  = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token');
                navigate('/login');

            }else{
                populateQuote()
            }
        }
    },[navigate])

    return <h1>Your quote:{quote||'No quote found'}Hello World</h1>
}

export default Dashboard
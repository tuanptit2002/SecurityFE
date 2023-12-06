import React from 'react';
import {useNavigate} from "react-router-dom";

function Home() {
     const navigate = useNavigate();
    const getData = async () => {
        try {
            const tokenJwt = JSON.parse(localStorage.getItem("token"));
            console.log("token ne hi hi", tokenJwt);

            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${tokenJwt}`);

            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            const res = await fetch("http://localhost:8080/test/hello", requestOptions);

            if (res.status === 200) {
                // The response is a plain string, not JSON
                const responseData = await res.text();
                console.log("oke vao r ", responseData);
            } else {
                navigate('/')
                console.log("loi !!!!", res.status);
            }
        } catch (error) {
            navigate('/')
            console.error('Error during fetch:', error);
            console.log("loi roi nhe");
        }
    };

    return (
        <div>
            <button onClick={getData}>Test</button>
        </div>
    );
}

export default Home;

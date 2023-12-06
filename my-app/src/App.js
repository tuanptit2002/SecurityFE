import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";


function App() {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Hàm xử lý khi người dùng thay đổi giá trị của trường username
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // Hàm xử lý khi người dùng thay đổi giá trị của trường password
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Hàm xử lý khi người dùng nhấn nút đăng nhập
    const handleLogin = () => {
        // Thực hiện xử lý đăng nhập, ví dụ: kiểm tra thông tin đăng nhập
        console.log('Username:', username);
        console.log('Password:', password);


        axios.post('http://localhost:8080/test/login',{username,password}).then(response => {
            // Xử lý dữ liệu từ BE
            console.log('Data received:', response.data);
            localStorage.setItem("token",JSON.stringify(response.data));
            navigate('/home')
        })
            .catch(error => {
                // Xử lý lỗi nếu có
                console.error('Error during Axios request:', error);
            });
    };
    return (
        <div>
            <h2>Đăng nhập</h2>
            <form>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="button" onClick={handleLogin}>
                    Đăng nhập
                </button>
            </form>

        </div>
    );
}

export default App;

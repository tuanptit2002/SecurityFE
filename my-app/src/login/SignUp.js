import React, { useState } from 'react';
function SignUp() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        phone: '',
        address: '',
        fullName: '',
        roleId: 1,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Gửi dữ liệu đăng ký đến BE ở đây
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div>
            <h2>Đăng ký</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Full Name:
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                </label>
                <br />
                {/*<label>*/}
                {/*    Role ID:*/}
                {/*    <input type="number" name="roleId" value={formData.roleId} onChange={handleChange} />*/}
                {/*</label>*/}
                <br />
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
  }
  
  export default SignUp;

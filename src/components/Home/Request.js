import React, { useState } from 'react';
import "./../../App.css";

function Enquire() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data, like submit it to an API
    };
    return (
        <div className='Req1' >
        
            <div className='RequestHead' >
                <h3><strong> Request Now.</strong></h3>
            </div>
          
            <div className='RequestForm'>
                <form onSubmit={handleSubmit}>
                    <label >
                        Name:
                        <input c type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    </label>
                    <label  >
                        E-mail:
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </label>
                    <label  >
                        Phone:
                        <input type="Number" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    </label>
                    <label  >
                        Message:
                        <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default Enquire;

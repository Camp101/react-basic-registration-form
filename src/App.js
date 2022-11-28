import React,{ useState } from 'react';
import './App.css';


const App = () => {

    const [values, setValues]  = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.firstName && values.lastName && values.email){
            setValid(true);
        }
        setSubmitted(true);
    }

    return(
        <>

        <form className='container' onSubmit={handleSubmit}>
            {
                submitted && valid? 
                <div className="success-text">
                Success! Thank you for Register
                </div> : 
                null
            }

            <input 
                value={values.firstName}
                onChange={(e)=>setValues({...values, firstName: e.target.value})}
                type='text' 
                placeholder='First Name'
                name='firstName'
                />
                {
                    submitted && !values.firstName ? 
                    <span>Please enter your first name</span> :
                    null
                }

            <input  
                value={values.lastName}
                onChange={(e)=>setValues({...values, lastName: e.target.value})}
                type='text' 
                placeholder='Last Name'
                name='lastName'
                />
                {
                    submitted && !values.lastName ? 
                    <span>Please enter your last name</span> :
                    null
                }

            <input 
                value={values.email}
                onChange={(e)=>setValues({...values, email: e.target.value})}
                type='text' 
                placeholder='Email'
                name='email'
                />
                {
                    submitted && !values.email ? 
                    <span>Please enter your email</span> :
                    null
                }

            < button type='submit'
                >
                Register
            </button>
        </form>
        
        </>
    )
}

export default App;
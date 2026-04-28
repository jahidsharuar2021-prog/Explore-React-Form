import React from 'react';
import UseInputField from '../UseInputField';

const HookForm = () => {

    const[name,nameOnChange]=UseInputField('');
    const[email,emailOnChange]=UseInputField('');
    const[password,passwordOnChange]=UseInputField('');

    const handleSubmit=e=>{
      e.preventDefault();
      console.log('submit',name,email,password);  
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
               <input type="text"  placeholder='name' onChange={nameOnChange} /> 
               <br />
               <input type="email" placeholder='Email'  onChange={emailOnChange} />
               <br />
               <input type="password" onChange={passwordOnChange} placeholder='password'/>
               <br />
               <input type="submit" value='submit' />
            </form>
        </div>
    );
};

export default HookForm;
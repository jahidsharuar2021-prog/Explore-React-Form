import React, { useState } from 'react';

const ControlField = () => {
  const[name,setName]=useState('');
  const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
     const [error, setError] = useState("");

     const handleEmailChange=e=>{
      setEmail(e.target.value);
     }

     const handleNameChange = (e) => {
       setName(e.target.value);
     };


    const handleSubmit=(e)=>{
      console.log(name,email,password);
        e.preventDefault();
        if(password.length<6){
          setError('password must 6 character or longer');
        }
        else{
          setError('');
        }

    }


    const handlePasswordOnchange=e=>{
        e.preventDefault();
        console.log(e.target.value);
        setPassword(e.target.value);

        // if(password.length<6){
        //   setError('password must be 6 characters or longer');
        // }
        // else{
        //   setError('');
        // }
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          placeholder='Name'
          onChange={handleNameChange} 
          defaultValue={name} />
            <br />

          <input
            type="email"
            onChange={handleEmailChange}
            name="email"
            defaultValue={email}
            id=""
            placeholder="Email"
          />

          <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            defaultValue={password}
            onChange={handlePasswordOnchange}
          />

          <br />
          <input type="submit" value="submit" />
        </form>

        <p style={{ color: "red" }}>
          <small>{error}</small>
        </p>
      </div>
    );
};

export default ControlField;
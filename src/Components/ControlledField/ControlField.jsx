import React, { useState } from 'react';

const ControlField = () => {
    const [password,setPassword]=useState('');

    const handleSubmit=(e)=>{
        console.log(e);

    }
    const handlePasswordOnchange=e=>{
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" id="" placeholder="Email"  />
          <br />
          <input
            type="password"
            name="password"
            id=""
            defaultValue={password}
            onChange={handlePasswordOnchange}
            placeholder="password"
           
          />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
};

export default ControlField;
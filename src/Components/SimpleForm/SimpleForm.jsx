import React from 'react';

const SimpleForm = () => {

   const handleSubmit=(e)=>{
    alert("submitted");
     e.preventDefault();
     console.log(e.target.name.value);
     console.log(e.target.email.value);
   }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder="your name"></input>
          <br />
          <input type="email" name="email" placeholder='Enter your email' />
          <br />
          <input type="submit" value="submit"></input>
        </form>
      </div>
    );
};

export default SimpleForm;
import './App.css';
import React from "react";


function MyForm (){
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      
      <label htmlFor="day">Day:</label>
      <input type="text" id="day" name="day" required />
      
      <input type="submit" value="Submit" />
    </form>
  );
};

export default MyForm;

import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false
  });

  function handleFormChange(event) {
    const name = event.target.name;
    const value = event.target.value
    
    setFormData({
      ...formData,
      [name]:value,
    })
  }

  return (
    <form>
      <input type="text" onChange={handleFormChange} value={formData.firstName} name="firstName"/>
      <input type="text" onChange={handleFormChange} value={formData.lastName} name="lastName"/>
      <input type="text" onChange={handleFormChange} value={formData.admin} name="admin"/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

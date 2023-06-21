import React, { useState } from "react";

function ExerciseSender() {
  // Declare two state variables using the useState hook
  const [response, setResponse] = useState("");
  const [formData, setFormData] = useState({}); //

  // This function is called when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://kcw5c8-3000.csb.app/exercises", {
      // Correct endpoint here
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.text())
      .then((res) => setResponse(res));
  };

  // This function is called when an input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the form data state variable with the new value
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Render the component
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="Exercise"
            onChange={handleInputChange}
            autocomplete="off"
            placeholder="Add new exercise"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Export the component so it can be used in other files
export default ExerciseSender;

import React from "react";

export const Form = ({ formData, setFormData, team, setTeam }) => {
  const handleFormUpdate = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setTeam([...team, formData]);
    setFormData({ name: "", role: "", location: "", github_handle: "" });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          onChange={e => handleFormUpdate(e)}
          value={formData.name}
        />
        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          onChange={e => handleFormUpdate(e)}
          value={formData.role}
        />
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          onChange={e => handleFormUpdate(e)}
          value={formData.location}
        />
        <label htmlFor="github_handle">Github Handle</label>
        <input
          id="github_handle"
          type="text"
          onChange={e => handleFormUpdate(e)}
          value={formData.github_handle}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

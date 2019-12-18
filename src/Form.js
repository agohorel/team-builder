import React, { useEffect } from "react";
import styled from "styled-components";

export const Form = ({
  formData,
  setFormData,
  team,
  setTeam,
  memberToEdit
}) => {
  useEffect(() => {
    setFormData(memberToEdit);
  }, [memberToEdit, setFormData]);

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
      <StyledForm onSubmit={handleFormSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={e => handleFormUpdate(e)}
            value={formData.name}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="role">Role</label>
          <input
            id="role"
            type="text"
            onChange={e => handleFormUpdate(e)}
            value={formData.role}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="location">Location</label>

          <input
            id="location"
            type="text"
            onChange={e => handleFormUpdate(e)}
            value={formData.location}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="github_handle">Github Handle</label>

          <input
            id="github_handle"
            type="text"
            onChange={e => handleFormUpdate(e)}
            value={formData.github_handle}
          />
        </FormGroup>

        <button type="submit">Submit</button>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #313136;
  padding: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  input {
    border: none;
    background: #ccc;
    padding: 0.25rem;
  }

  label {
    color: #ccc;
  }

  button {
    border: none;
    background: black;
    color: #ccc;
    padding: 10px 12px;
    border-radius: 3px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1rem 20px 0;
`;

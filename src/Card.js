import React from "react";
import styled from "styled-components";

export const Card = ({ data, setMemberToEdit }) => {
  return (
    <CardContainer>
      <h1>{data.name}</h1>
      <h3>{data.role}</h3>
      <p>{data.location}</p>
      <p>{data.github_handle}</p>
      <button onClick={() => setMemberToEdit(data)}>edit</button>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background-color: #0a0a0a;
  border-radius: 3px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  color: white;
  display: inline-block;
  padding: 2rem;
  margin: 1rem;
  width: calc(50% - 2rem);
`;

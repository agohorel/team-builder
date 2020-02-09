import React from "react";
import styled from "styled-components";

export const Card = ({ data, setMemberToEdit }) => {
  return (
    <CardContainer>
      <h1>{data.name}</h1>
      <h3>{data.role}</h3>
      <p>{data.location}</p>
      <p>
        github:{" "}
        <Link
          href={`https://github.com/${data.github_handle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.github_handle}
        </Link>
      </p>
      <Button onClick={() => setMemberToEdit(data)}>edit</Button>
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
  width: calc(33% - 2rem);

  @media (max-width: 1200px) {
    width: calc(50% - 2rem);
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  background-color: #3c3c3c;
  padding: 0.5rem 0.75rem;
  color: #aaa;
  margin-top: 20px;

  &:hover {
    background-color: #999;
    color: black;
    cursor: pointer;
  }
`;

const Link = styled.a`
  color: #3131ad;

  &:hover {
    color: grey;
  }

  &:visited {
    color: #3131ad;
  }

  &:active {
    color: white;
  }
`;

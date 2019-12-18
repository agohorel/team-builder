import React from "react";
import styled from "styled-components";

import { Card } from "./Card";

export const CardsList = ({ team, setMemberToEdit }) => {
  return (
    <Container>
      <Cards>
        {team.map(member => (
          <Card
            key={member.name}
            data={member}
            setMemberToEdit={setMemberToEdit}
          ></Card>
        ))}
      </Cards>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
`;

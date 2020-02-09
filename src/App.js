import React, { useState } from "react";

import "./App.css";
import data from "./team";

import { Form } from "./Form";
import { CardsList } from "./CardsList";

const defaultMemberData = {
  name: "",
  role: "",
  location: "",
  github_handle: ""
};

function App() {
  const [team, setTeam] = useState(data);
  const [formData, setFormData] = useState(defaultMemberData);
  const [memberToEdit, setMemberToEdit] = useState();

  const editMember = (event, team, memberToEdit) => {
    event.preventDefault();

    team.map(member => {
      if (member.name === memberToEdit.name) {
        let updatedTeam = [...team];
        updatedTeam[updatedTeam.indexOf(memberToEdit)] = formData;
        setTeam(updatedTeam);
      }
    });

    setMemberToEdit();
    setFormData(defaultMemberData);
  };

  return (
    <div className="App">
      <Form
        formData={formData}
        setFormData={setFormData}
        team={team}
        setTeam={setTeam}
        memberToEdit={memberToEdit}
        editMember={editMember}
      ></Form>
      <CardsList team={team} setMemberToEdit={setMemberToEdit}></CardsList>
    </div>
  );
}

export default App;

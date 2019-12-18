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
  const [memberToEdit, setMemberToEdit] = useState(defaultMemberData);

  return (
    <div className="App">
      <Form
        formData={formData}
        setFormData={setFormData}
        team={team}
        setTeam={setTeam}
        memberToEdit={memberToEdit}
      ></Form>
      <CardsList team={team} setMemberToEdit={setMemberToEdit}></CardsList>
    </div>
  );
}

export default App;

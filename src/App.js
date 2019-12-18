import React, { useState } from "react";

import "./App.css";
import data from "./team";

import { Form } from "./Form";
import { CardsList } from "./CardsList";

function App() {
  const [team, setTeam] = useState(data);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    location: "",
    github_handle: ""
  });
  const [memberToEdit, setMemberToEdit] = useState("");

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

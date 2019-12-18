import React, { useState } from "react";
import data from "./team";

import { Form } from "./Form";
import { Card } from "./Card";

function App() {
  const [team, setTeam] = useState(data);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    location: "",
    github_handle: ""
  });

  return (
    <div className="App">
      <Form
        formData={formData}
        setFormData={setFormData}
        team={team}
        setTeam={setTeam}
      ></Form>
      {team.map(member => (
        <Card key={member.name} data={member}></Card>
      ))}
    </div>
  );
}

export default App;

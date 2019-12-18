import React, { useState } from "react";
import data from "./team";

import { Card } from "./Card";

function App() {
  const [team, setTeam] = useState([]);

  return (
    <div className="App">
      {data.map(member => <Card key={member.name} data={member}></Card>)}
    </div>
  );
}

export default App;

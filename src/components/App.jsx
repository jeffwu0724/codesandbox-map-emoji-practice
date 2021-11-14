import React from "react";
import emojipedias from "../emojipedia.js";
import Entry from "./Entry";

function createEntry(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedias.map(createEntry)}</dl>
    </div>
  );
}

export default App;

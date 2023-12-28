import { useState } from "react";
import AddEntityForm from "./components/AddEntityForm";
import FilterEntitiesForm from "./components/FilterEntitiesForm";
import "./App.css";
import EntitiesList from "./components/EntitiesList";

function App() {

  return (
    <div className="form">
      <div>
        <AddEntityForm />
        <FilterEntitiesForm />
      </div>
      <div>
        <EntitiesList  />
      </div>
    </div>
  );
}

export default App;

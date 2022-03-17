
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { 
  
  let [status, updateStatus] = useState("");
let [gender, updateGender] = useState("");
let [species, updateSpecies] = useState("");

 } from "react";

function App() {
  return (
    <div className="App">
  <h1 className="text-center mb-3">Characters</h1>
  <div className="container">
  <div className="row">
  <Filter
  pageNumber={pageNumber}
  status={status}
  updateStatus={updateStatus}
  updateGender={updateGender}
  updateSpecies={updateSpecies}
  updatePageNumber={updatePageNumber}
/>
    <div className="col-lg-8 col-12">
      <div className="row">
        Card component will be placed here
      </div>
    </div>
  </div>
  </div>
</div>);
}

export default App;

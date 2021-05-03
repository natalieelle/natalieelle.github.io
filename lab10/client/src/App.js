import React from 'react';
import NameSearch from "./components/NameSearch";
import ReportingArea from "./components/ReportingArea";
import AgeSearch from "./components/AgeSearch";
import CreateEmployee from "./components/CreateEmployee";
import Link from "./components/Link";
import Info from "./components/Info";



function App() {
  return (
    <div className="App">
      <Info/>
      <NameSearch/>
      <AgeSearch/>
      <CreateEmployee/>
      <ReportingArea/>
      <Link/>

    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Projects from "./components/Project/Projects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import CreateProject from "./components/CreateProject/CreateProject";
import Board from "./components/Board/Board";
import Builds from "./components/Board/Builds";
import Help from "./components/Board/Help";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProjectDetails/>}>
          <Route path="/dashboard" index element={<Board/>}/>
          <Route path="/builds" index element={<Builds/>}/>
          <Route path="/help" index element={<Help/>}/>
        </Route>
        <Route path="/createproject" element={<CreateProject/>}/>
        <Route path="/project" element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;

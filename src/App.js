import TopBar from "./components/topbar/TopBar";
import { Home } from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Fragment>
        <TopBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/single" element={<Single />} />
          <Route exact path="/write" element={<Write />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </Fragment>
      
    </Router>
  );
}

export default App;

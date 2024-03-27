import { useState } from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import GroupPage from "./pages/GroupPage/GroupPage";
import { animals } from "./assets/data/animals.js";

function App() {
  const [groupName, setGroupName] = useState();
  const [sidebarListData, setSidebarListData] = useState({});

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage sidebarListData={sidebarListData} setSidebarListData={setSidebarListData} />
            }
          />
          <Route
            path="/group/:groupName"
            element={
              <GroupPage
                sidebarListData={sidebarListData}
                setSidebarListData={setSidebarListData}
              />
            }
          />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

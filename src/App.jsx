import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import GroupPage from "./pages/GroupPage/GroupPage";
import { animals } from "./assets/data/animals.js";
import Layout from "./layout/Layout.jsx";

function App() {
  const [sidebarListData, setSidebarListData] = useState(animals);
  const mainMessage =
    "We are very glad that you visited our zoo. You can use our website for detailed information about animals.";
  const [mainContents, setMainContents] = useState(mainMessage);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <HomePage
                  sidebarListData={sidebarListData}
                  setSidebarListData={setSidebarListData}
                  mainContents={mainContents}
                  setMainContents={setMainContents}
                  mainMessage={mainMessage}
                />
              }
            />
            <Route
              path="/group/:groupName"
              element={
                <GroupPage
                  sidebarListData={sidebarListData}
                  setSidebarListData={setSidebarListData}
                  mainContents={mainContents}
                  setMainContents={setMainContents}
                  mainMessage={mainMessage}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

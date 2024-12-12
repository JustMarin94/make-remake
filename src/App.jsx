import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import Homepage from "./components/Homepage";

function App() {
  return (
    <Router basename="/make-remake">
      <div>
        <Routes>
          {/* Define individual routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/blog" element={<AllPosts />} />
          <Route path="/:slug" element={<OnePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Movie from "./pages/Movie";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;

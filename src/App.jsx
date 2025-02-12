import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./scrollToTop";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Movie from "./pages/Movie";
import DetailMovie from "./pages/detailMovie";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movie/search/:query" element={<Movie />} />
        <Route path="/Movie/detail/:id" element={<DetailMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;

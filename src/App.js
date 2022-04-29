import HomeScreen from "./components/HomeScreen/HomeScreen";
import MovieScreen from "./components/MovieScreen/MovieScreen";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <MovieScreen /> */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="moviescreen/:id" element={<MovieScreen />} />
      </Routes>
    </div>
  );
}

export default App;

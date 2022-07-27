// React
import { Route, Routes } from "react-router-dom";
// Components
// Page
import MainPage from "./page/main/MainPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;

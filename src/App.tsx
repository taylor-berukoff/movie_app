import Movie_vault from "./pages/Movie_vault";
import User_Profile from "./pages/User_Profile";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Movie_vault />} />
          <Route path="user_profile" element={<User_Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
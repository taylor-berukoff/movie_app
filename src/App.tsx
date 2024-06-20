
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import Navbar from "./components/Navbar";


function App(){
  return(
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/">
          { routes.map(route =>
            <Route 
            path={route.path} 
            element={<route.component />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
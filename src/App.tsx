
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./config/routes";


function App(){
  return(
    <BrowserRouter>
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
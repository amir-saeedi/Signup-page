import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import { UserProvider, UserInterface } from "./context/user";
const MainPage = React.lazy(() => import("./component/MainPage"));
const SignUp = React.lazy(() => import("./component/SignUp"));

function App() {
  const [user, setUser] = React.useState({} as UserInterface);

  // for see user info after signup
  console.log(user);
  return (
    <Router>
      <UserProvider value={{ user, setUser }}>
        <React.Suspense fallback={"loading!"}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </React.Suspense>
      </UserProvider>
    </Router>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

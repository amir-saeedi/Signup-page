import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
import { UserProvider, UserInterface } from "./context/user";
const SignUp = React.lazy(() => import("./component/SignUp"));

function App() {
  const [user, setUser] = React.useState({} as UserInterface);

  // for see user info after signup
  console.log(user);
  return (
    <Router>
      <UserProvider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<SignUp />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

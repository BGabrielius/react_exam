import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

function App() {
  // state
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Button
        text="Sign up"
        icon={<i className="fa-solid fa-right-to-bracket"></i>}
        action={() => setOpenModal(true)}
      />
      {openModal && <RegistrationForm onClose={() => setOpenModal(false)} />}
    </div>
  );
}

export default App;

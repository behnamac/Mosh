import Alert from "./Component/Alert";
import Button from "./Component/Button";
import { useState } from "react";

const App = () => {
  const BtnText = "Button";
  const [alertVisible, setAlertVisible] = useState(false);
  const OnClick = () => {
    !alertVisible && setAlertVisible(true);
  };
  const OnClose = () => {
    setAlertVisible(false);
  };

  return (
    <>
      {alertVisible && (
        <Alert onClose={OnClose}>This is a warning</Alert>
      )}
      <Button color="primary" onClicked={OnClick}>
        {BtnText}
      </Button>
    </>
  );
};

export default App;

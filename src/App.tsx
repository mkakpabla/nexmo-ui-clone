import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LOGIN, SIGNUP } from "./routes/auth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={LOGIN.link} component={LOGIN.component} />
        <Route path={SIGNUP.link} component={SIGNUP.component}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

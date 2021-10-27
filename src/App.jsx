import './App.css';
import Carousels from './components/Carousels';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Milestone from './components/Milestone';

function App() {
  return (
    <BrowserRouter>
        <header>
          <h1>my mizu</h1>
        </header>
      <Switch>
        <main className="App-main">
          <Route exact path={"/"} component={Carousels} />
          <Route exact path={"/milestone"} component={Milestone}/>
        </main>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

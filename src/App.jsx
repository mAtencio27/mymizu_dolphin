import './App.css';
import Carousels from './components/Carousels';
// import Refill from './components/Refill';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Milestone from './components/Milestone';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <div>
        <header>
          <h1>my mizu</h1>
        </header>
        <main className="App-main">
          {/* <Carousels />
          <Refill /> */}
          <Route exact path={"/"} component={Carousels} />
          <Route exact path={"/milestone"} component={Milestone}/>
        </main>
      </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

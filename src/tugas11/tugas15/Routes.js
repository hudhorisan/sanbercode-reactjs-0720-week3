import React from "react";
import { Switch, Link, Route } from "react-router-dom";


import TabelBuah1 from '../TabelBuah';
import TimerMundur from '../TimerMundur';
import TabelBuah3 from '../../tugas13/TabelBuah';
import TabelBuah4 from '../tugas14/TabelBuah';

const Routes = () => {

  return (
    <>
     
      <nav>
        <ul>
          <li>
            <Link to="/">Tugas11</Link>
          </li>
          <li>
            <Link to="/tugas12">Tugas12</Link>
          </li>
          <li>
            <Link to="/tugas13">Tugas13</Link>
          </li>
          <li>
            <Link to="/tugas14">Tugas14</Link>
          </li>

        </ul>
      </nav>
      <Switch>
        <Route path="/tugas12" component={TimerMundur}  />
        <Route path="/tugas13">
          <TabelBuah3 />
        </Route>
        <Route path="/tugas14">
          <TabelBuah4 />
        </Route>
        <Route path="/">
          <TabelBuah1 />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;

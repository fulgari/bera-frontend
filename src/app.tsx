import * as React from "react";
import * as Server from "react-dom/server";
import * as ReactDOM from "react-dom";
import List from "./layout/List";
import Card from "./components/Card/Card";

let h: string = 'esbuild';
let App = () => {
  return (
    <List>
      <li>{h}</li>
      <li>{h}</li>
      <Card />
    </List>
  )
};
// console.log(Server.renderToString(<Greet />))
ReactDOM.render(<App />, document.body);

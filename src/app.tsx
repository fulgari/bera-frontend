import * as React from "react";
import * as Server from "react-dom/server";
import * as ReactDOM from "react-dom";

let h: string = 'esbuild';
let Greet = () => <h1>Hello, world!!!!{h}</h1>;
// console.log(Server.renderToString(<Greet />))
ReactDOM.render(<Greet />, document.body);

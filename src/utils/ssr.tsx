import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { App } from '../app'

const renderHtml = () => {
    console.log("renderToString:start")
    const html = ReactDOMServer.renderToString(<App />);
    console.log("renderToString", html)
    return `<!-- A template page to load all the bundled resources -->
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Web site created using create-react-app" />
      <title>Bera App</title>
      <script src="public/app.js" async defer></script>
      <link rel="stylesheet" href="public/app.css"/>
    </head>
    
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">${html}</div>
    </body>
    </html>`
}

export {
    renderHtml
}
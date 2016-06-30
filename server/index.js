import React from 'react'
import ReactDOMServer from 'react-dom/server'

var element = React.createElement('div', null, 'Hello World!')
console.log(ReactDOMServer.renderToString(element)) 
import ReconnectingWebSocket from 'reconnecting-websocket'
import sharedb from 'sharedb/lib/client'

// Expose a singleton WebSocket connection to ShareDB server
// const socket = new ReconnectingWebSocket('ws://localhost:8080/', [], {
//   // ShareDB handles dropped messages, and buffering them while the socket
//   // is closed has undefined behavior
//   maxEnqueuedMessages: 0
// })

const socket = new WebSocket('ws://127.0.0.1:9001')
const connection = new sharedb.Connection(socket)
connection.debug = true

export default connection

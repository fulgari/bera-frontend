import ReconnectingWebSocket from 'reconnecting-websocket'
import sharedb from 'sharedb/lib/client'
import { getWsUrl } from './utils/env'

// Expose a singleton WebSocket connection to ShareDB server
// const socket = new ReconnectingWebSocket('ws://localhost:8080/', [], {
//   // ShareDB handles dropped messages, and buffering them while the socket
//   // is closed has undefined behavior
//   maxEnqueuedMessages: 0
// })

const socket = new WebSocket(getWsUrl())
const connection = new sharedb.Connection(socket)

export default connection

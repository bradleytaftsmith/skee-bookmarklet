import json
import websocket

websocket.enableTrace(True)
ws = websocket.create_connection('ws://stats.brewskeeball.com/sockjs/565/bqktm04b/websocket')

ws.send(json.dumps([json.dumps({'msg': 'connect', 'version': '1', 'support': ['1', 'pre2', 'pre1']})]))


while True:
  result =  ws.recv()
  print ('Result {}'.format(result))

print "closing..."
ws.close()


# Players.find({_id: "M8T5f5FhdzT7RzDof", _id: "9pjB4WDb9ggRtQhqz", _id: "d3ydv44rtRax2jxBc"}).fetch()
# Players.find({name: "Pow"},{name: "Zip"},{name: "Bang"}).fetch()
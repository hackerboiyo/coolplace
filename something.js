const socket = new WebSocket('wss://echo.websocket.org'); // Public WebSocket server

socket.onopen = function () {
  console.log('WebSocket connected!');
};

socket.onmessage = function (event) {
  const data = event.data;
  console.log('Received message:', data);
  // You can add your logic to handle the data, like displaying video or sending commands
};

socket.onerror = function (error) {
  console.log('WebSocket Error:', error);
};

socket.onclose = function () {
  console.log('WebSocket connection closed');
};

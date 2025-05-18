// function sendMessage() {
//   const name = document.getElementById("nameInput").value.trim();
//   const message = document.getElementById("messageInput").value.trim();
//   const chatBox = document.getElementById("chat-box");

//   if (!name || !message) {
//     alert("Name and message are required.");
//     return;
//   }

//   const messageElement = document.createElement("div");
//   messageElement.textContent = `${name}: ${message}`;
//   chatBox.appendChild(messageElement);

//   document.getElementById("messageInput").value = "";
//   chatBox.scrollTop = chatBox.scrollHeight;
// }



const socket = io();

function sendMessage() {
  const name = document.getElementById("nameInput").value.trim();
  const message = document.getElementById("messageInput").value.trim();

  if (!name || !message) {
    alert("Name and message are required.");
    return;
  }

  socket.emit("chat message", { name, message });
  document.getElementById("messageInput").value = "";
}

// Receive and display messages
socket.on("chat message", (data) => {
  const chatBox = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.textContent = `${data.name}: ${data.message}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
});


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
  const msgandnam = document.createElement("div")
  msgandnam.className = "maN"
  const msg = document.createElement("span");
  const nam = document.createElement("span");
  nam.className = "name";
  nam.textContent = data.name;
  msg.className = "message";
  msg.textContent = `${data.message}`;

  // data
  chatBox.append(msgandnam);
  msgandnam.append(nam,msg)
  chatBox.scrollTop = chatBox.scrollHeight;

});


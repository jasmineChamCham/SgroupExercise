var nameOfUser = prompt("Enter your username: ")
var messages = [];

function Message(createdAt, name, content, id) {
    this.createdAt = createdAt;
    this.name = name;
    this.content = content;
    this.id = id;
}

// function load(){
//     setInterval(loadMessages, 2000);
// }

async function load(){
    receivedData = []
    receivedData = await axios.get("https://63e393dec919fe386c09bbaa.mockapi.io/sgroup/message")
    // console.log(receivedData.data[0])
    for (var i = 0; i < receivedData.data.length; i++){
        nameUser = receivedData.data[i]['name']
        content = receivedData.data[i]['content']
        id = receivedData.data[i]['id']
        var temp = new Message(new Date(), nameUser, content, id)
        messages.push(temp)
        writeMessageReceived(temp)
    }
    console.log(chatboxMessageWrapper)
}

function convertDate(str) {
    var date = new Date(str),
      hour = ("0" + (date.getHours())).slice(-2),
      minute = ("0" + date.getMinutes()).slice(-2);
    return [hour, minute].join(":");
}

function writeMessageReceived(message) {
    let date = convertDate(message.createdAt);
	let messageStr = `
		<div class="chatbox-message-item received"
			<span class="chatbox-message-item-text">
            ${message.content}
			</span>
			<span class="chatbox-message-item-time">${date}</span>
            <span class="chatbox-message-item-time">${message.name  + " - "}</span>
		</div>
	`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', messageStr)
	scrollBottom()
}



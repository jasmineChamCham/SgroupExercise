// MESSAGE INPUT
const textarea = document.querySelector('.chatbox-message-input')
const chatboxForm = document.querySelector('.chatbox-message-form')
// console.log(textarea)

textarea.addEventListener('input', function () {
	let line = textarea.value.split('\n').length

	if(textarea.rows < 6 || line < 6) {
		textarea.rows = line
	}

	if(textarea.rows > 1) {
		chatboxForm.style.alignItems = 'flex-end'
	} else {
		chatboxForm.style.alignItems = 'center'
	}
})



// TOGGLE CHATBOX
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

chatboxToggle.addEventListener('click', function () {
	chatboxMessage.classList.toggle('show')
})



// DROPDOWN TOGGLE
const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle')
const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

dropdownToggle.addEventListener('click', function () {
	dropdownMenu.classList.toggle('show')
})

document.addEventListener('click', function (e) {
	if(!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')) {
		// dropdownMenu.classList.remove('show')
	}
})







// CHATBOX MESSAGE
const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
const chatboxNoMessage = document.querySelector('.chatbox-message-no-message')

chatboxForm.addEventListener('submit', function (e) {
	e.preventDefault()

	if(isValid(textarea.value)) {
		console.log(new Message(new Date(), nameOfUser, textarea.value.trim(), messages.length));
		try {
			pushMessage();
		} catch (error) {
			console.log("log error : " + error)
		}
		writeMessage()
	}
})

// Push message
async function pushMessage() {
	
	console.log("push message: ", {name: `${nameOfUser}`, content: `${textarea.value.trim()}`, createdAt: new Date()});
	var res = await axios.post("https://63e393dec919fe386c09bbaa.mockapi.io/sgroup/message", {
		name: "jasmine", 
		content: "test message", 
		createdAt: new Date()
	})
		.then((result) => {
			console.log(result.data);
		})
		.catch((error) => {
			if (error.response){
				console.log("error response : " + error);
				console.log(error.response.data);
				console.log(error.response.status); // max number of elements reached for this resource
				console.log(error.response.headers); // 400
			}else if(error.request){
				console.log("error request : " + error);
			}else if(error.message){
				console.log("error message : " + error);
			}
			
		})
	res = await axios.post("https://63e393dec919fe386c09bbaa.mockapi.io/sgroup/message",{
		name: `${nameOfUser}`, 
		content: `${textarea.value.trim()}`, 
		createdAt: new Date()}); 
	console(res);
}

function addZero(num) {
	return num < 10 ? '0'+num : num
}

function writeMessage() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item sent">
			<span class="chatbox-message-item-text">
				${textarea.value.trim().replace(/\n/g, '<br>\n')}
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
			<span class="chatbox-message-item-time">${nameOfUser + " - "}</span>
			</div>
	`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
	chatboxForm.style.alignItems = 'center'
	textarea.rows = 1
	textarea.focus()
	textarea.value = ''
	scrollBottom()
}

function autoReply() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item received">
			<span class="chatbox-message-item-text">
				Thank you for your awesome support!
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
	scrollBottom()
}

function scrollBottom() {
	chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
}

function isValid(value) {
	let text = value.replace(/\n/g, '')
	text = text.replace(/\s/g, '')

	return text.length > 0
}
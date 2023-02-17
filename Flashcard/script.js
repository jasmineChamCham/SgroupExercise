var data;
if (localStorage.getItem('items') != null){
  data = JSON.parse(localStorage.getItem('items'));
}
else data = [];

document.getElementById("save_card").addEventListener("click", () => {
  const question = document.getElementById("question");
  const answer = document.getElementById("answer");

  let flashcard = {
    'my_question' : question.value,
    'my_answer'  : answer.value
  }
  data.push(flashcard);
  localStorage.setItem('items', JSON.stringify(data));
  flashcardMaker(data[data.length - 1], data.length - 1);
  question.value = "";
  answer.value = "";
});

document.getElementById("delete_cards").addEventListener("click", () => {
  localStorage.clear();
  flashcards.innerHTML = '';
  data = [];
});

document.getElementById("show_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "block";
});

document.getElementById("close_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "none";
});

flashcardMaker = (text, delThisIndex) => {
  const flashcard = document.createElement("div");
  const question = document.createElement('h2');
  const answer = document.createElement('h2');
  const del = document.createElement('i');

  flashcard.className = 'flashcard';

  question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
  question.textContent = text.my_question;

  answer.setAttribute("style", "text-align:center; display:none; color:red");
  answer.textContent = text.my_answer;

  del.className = "fas fa-minus";
  del.addEventListener("click", () => {
    data.splice(delThisIndex, 1);
    localStorage.setItem('items', JSON.stringify(data));
    window.location.reload();
  })

  flashcard.appendChild(question);
  flashcard.appendChild(answer);
  flashcard.appendChild(del);

  flashcard.addEventListener("click", () => {
    if(answer.style.display == "none")
      answer.style.display = "block";
    else
      answer.style.display = "none";
  })

  document.querySelector("#flashcards").appendChild(flashcard);
}

data.forEach(flashcardMaker);

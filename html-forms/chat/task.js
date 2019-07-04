const chatWidget = document.querySelector('.chat-widget');
const chatWidgetMessages = document.querySelector('.chat-widget__messages');
const chatWidgetInput = document.querySelector('.chat-widget__input');

const botMessages = [
    'Добрый день! До свидания!',
    'Где ваша совесть?',
    'Кто тут?',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
    'Мы ничего не будем вам продавать!',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
];

const newDate = new Date();

chatWidget.addEventListener('click', function() {
    chatWidget.classList.add('chat-widget_active');
});

chatWidget.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') { 
       answers();
    }  
});

function answers() {    

// Клиент
chatWidgetMessages.innerHTML += `
<div class="message message_client">
    <div class="message__time">${newDate.getHours()}:${newDate.getMinutes()}</div>
    <div class="message__text">${event.target.value}</div>
</div>
`;
chatWidgetInput.value = '';

// Бот
const random = Math.floor(Math.random() * botMessages.length);

chatWidgetMessages.innerHTML += `
<div class="message">
    <div class="message__time">${newDate.getHours()}:${newDate.getMinutes()}</div>
    <div class="message__text">${botMessages[random]}</div>
</div>`;
}
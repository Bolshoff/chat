"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.connectOnServer = void 0;
const chat_window_elements_1 = require("./chat_window_elements");
const format_1 = __importDefault(require("date-fns/format"));
const js_cookie_1 = __importDefault(require("js-cookie"));
const url = 'mighty-cove-31255.herokuapp.com/websockets?';
const token = js_cookie_1.default.get('token');
const socket = new WebSocket(`ws://${url}${token}`);
function connectOnServer() {
    const socket = new WebSocket(`ws://${url}${token}`);
    socket.onopen = function () {
        console.log(" Соединение установлено, работаем дальше");
    };
    socket.onmessage = function (event) {
        try {
            const messageText = JSON.parse(event.data);
            if (messageText.user.email === "abolshoff@yandex.ru") {
                const message = chat_window_elements_1.CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(true);
                message.querySelector('.output-message__text').textContent = `Я: ${messageText.text}`;
                message.querySelector('.message__time').innerHTML = `${(0, format_1.default)(new Date(messageText.createdAt), "yyyy-MM-dd'-'HH:mm")}`;
                chat_window_elements_1.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
            }
            else {
                const message = chat_window_elements_1.CHAT_SCREEN_ELEMENTS.INPUT_TEMPLATE.content.cloneNode(true);
                message.querySelector('.input-message__text').textContent = `${messageText.user.name}: ${messageText.text}`;
                message.querySelector('.message__time').textContent = `${(0, format_1.default)(new Date(messageText.createdAt), "yyyy-MM-dd'-'HH:mm")}`;
                chat_window_elements_1.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
            }
        }
        catch (e) {
            console.log(e);
        }
        const messageContainer = document.querySelector('.container');
        const isScrolledToBottom = messageContainer.scrollHeight - messageContainer.clientHeight <= messageContainer.scrollTop + 1;
        if (!isScrolledToBottom) {
            messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
        }
        // if (document.querySelector('.container').scrollTop = document.querySelector('.container').scrollHeight){
        //   CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.scrollIntoView(false);
        // }
    };
    // socket.onclose = function(event){
    //   console.log(event.code);
    //   console.log(event.reason);
    //   console.log('не было ни единого разрыва');
    //   const rws = new ReconnectingWebSocket(`ws://${url}${token}`);
    // }
}
exports.connectOnServer = connectOnServer;
socket.onclose = function (event) {
    console.log(event.code);
    console.log(event.reason);
    console.log('не было ни единого разрыва');
    if (event.code === 1006) {
        // const socket = new ReconnectingWebSocket(`ws://${url}${token}`);
        connectOnServer();
    }
};
function sendMessage() {
    const outputMessage = chat_window_elements_1.CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value;
    socket.send(JSON.stringify({
        text: `${outputMessage}`,
    }));
}
exports.sendMessage = sendMessage;
exports.default = socket;

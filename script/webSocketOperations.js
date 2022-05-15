"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.connectOnServer = void 0;
var chat_window_elements_1 = require("./chat_window_elements");
var format_1 = require("date-fns/format");
var js_cookie_1 = require("js-cookie");
var url = 'mighty-cove-31255.herokuapp.com/websockets?';
var token = js_cookie_1.default.get('token');
var socket = new WebSocket("ws://".concat(url).concat(token));
function connectOnServer() {
    var socket = new WebSocket("ws://".concat(url).concat(token));
    socket.onopen = function (e) {
        console.log(" Соединение установлено, работаем дальше");
    };
    socket.onmessage = function (event) {
        try {
            var messageText = JSON.parse(event.data);
            if (messageText.user.email === "abolshoff@yandex.ru") {
                var message = chat_window_elements_1.CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(true);
                message.querySelector('.output-message__text').textContent = "\u042F: ".concat(messageText.text);
                message.querySelector('.message__time').innerHTML = "".concat((0, format_1.default)(new Date(messageText.createdAt), "yyyy-MM-dd'-'HH:mm"));
                chat_window_elements_1.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
            }
            else {
                var message = chat_window_elements_1.CHAT_SCREEN_ELEMENTS.INPUT_TEMPLATE.content.cloneNode(true);
                message.querySelector('.input-message__text').textContent = "".concat(messageText.user.name, ": ").concat(messageText.text);
                message.querySelector('.message__time').textContent = "".concat((0, format_1.default)(new Date(messageText.createdAt), "yyyy-MM-dd'-'HH:mm"));
                chat_window_elements_1.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.append(message);
            }
        }
        catch (e) {
            console.log(e);
        }
        var messageContainer = document.querySelector('.container');
        var isScrolledToBottom = messageContainer.scrollHeight - messageContainer.clientHeight <= messageContainer.scrollTop + 1;
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
    var outputMessage = chat_window_elements_1.CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value;
    socket.send(JSON.stringify({
        text: "".concat(outputMessage),
    }));
}
exports.sendMessage = sendMessage;
exports.default = socket;

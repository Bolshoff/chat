"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageStory = exports.CHAT_SCREEN_ELEMENTS = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
const format_1 = __importDefault(require("date-fns/format"));
exports.CHAT_SCREEN_ELEMENTS = {
    SETTING_BUTTON: document.querySelector('.managing-chat__button-settings'),
    QUIT_BUTTON: document.querySelector('.managing-chat__button-quit'),
    MESSAGE_INPUT: document.querySelector('.input-chat__input'),
    SUBMIT_BUTTON: document.querySelector('.input-chat__submit-button'),
    INPUT_FORM: document.querySelector('.input-chat__form'),
    CHAT_SCREEN: document.querySelector('.chat-screen'),
    MESSAGE_SCREEN: document.querySelector('.message-screen'),
    OUTPUT_TEMPLATE: document.querySelector('#output-template'),
    OUTPUT_MESSAGE_TEXT: document.querySelector('.output-message__text'),
    INPUT_TEMPLATE: document.querySelector('#input-template'),
    INPUT_MESSAGE_TEXT: document.querySelector('.input-message__text'),
    MESSAGE_TIME: document.querySelector('.message__time'),
    MESSAGE_CONTAINER: document.querySelector('.container'),
};
let messageStory;
function getMessageStory() {
    return __awaiter(this, void 0, void 0, function* () {
        const storyURL = 'https://mighty-cove-31255.herokuapp.com/api/messages';
        const token = js_cookie_1.default.get('token');
        const response = yield fetch(storyURL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        messageStory = yield response.json();
        showMessageStory(messageStory);
        return messageStory;
    });
}
exports.getMessageStory = getMessageStory;
function showMessageStory(messageStory) {
    let messageCount = messageStory.messages.length - 20;
    if (messageStory.messages.length < 20) {
        messageCount = 0;
    }
    for (let i = messageStory.messages.length - 1; i > messageCount; i--) {
        if (messageStory.messages[i].user.email === 'abolshoff@yandex.ru') {
            const message = exports.CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(true);
            const outputMessage = document.querySelector('.output-message__text');
            const messageTime = document.querySelector('.message__time');
            outputMessage.textContent = `Я: ${messageStory.messages[i].text}`;
            messageTime.textContent = `${(0, format_1.default)(new Date(messageStory.messages[i].createdAt), "yyyy-MM-dd'-'HH:mm")}`;
            exports.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(message);
        }
        else {
            const message = exports.CHAT_SCREEN_ELEMENTS.INPUT_TEMPLATE.content.cloneNode(true);
            const inputMessage = document.querySelector('.input-message__text');
            const messageTime = document.querySelector('.message__time');
            inputMessage.textContent = `${messageStory.messages[i].user.name}: ${messageStory.messages[i].text}`;
            messageTime.textContent = `${(0, format_1.default)(new Date(messageStory.messages[i].createdAt), "yyyy-MM-dd'-'HH:mm")}`;
            exports.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(message);
        }
    }
    exports.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.scrollIntoView(false);
    messageStory.messages = messageStory.messages.slice(0, messageStory.messages.length - 20);
}
exports.CHAT_SCREEN_ELEMENTS.MESSAGE_CONTAINER.addEventListener('scroll', scrollListener);
function getLoadedMessagesHeight() {
    const messageBlock = document.querySelectorAll('.message');
    const container = document.querySelector('.container');
    let messagesHeight = 0;
    for (let i = messageBlock.length - 1; i > messageBlock.length - 20; i--) {
        messagesHeight += messageBlock[i].clientHeight;
    }
    container.scrollTop = messagesHeight;
}
function showMessageAllHistoryLoad() {
    const allHistoryLoadMessage = document.createElement('div');
    allHistoryLoadMessage.classList.add('all-history-load-message');
    allHistoryLoadMessage.innerText = 'Вся история загружена';
    exports.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(allHistoryLoadMessage);
}
function scrollListener() {
    const container = document.querySelector('.container');
    if (messageStory.messages.length === 0 && container.scrollTop === 0) {
        showMessageAllHistoryLoad();
        container.removeEventListener('scroll', scrollListener);
    }
    if (container.scrollTop === 0) {
        showMessageStory(messageStory);
        getLoadedMessagesHeight();
    }
}

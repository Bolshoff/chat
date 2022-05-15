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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessageStory = exports.CHAT_SCREEN_ELEMENTS = void 0;
var js_cookie_1 = require("js-cookie");
var format_1 = require("date-fns/format");
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
var messageStory;
function getMessageStory() {
    return __awaiter(this, void 0, void 0, function () {
        var storyURL, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    storyURL = 'https://mighty-cove-31255.herokuapp.com/api/messages';
                    token = js_cookie_1.default.get('token');
                    return [4 /*yield*/, fetch(storyURL, {
                            method: 'GET',
                            headers: {
                                'Authorization': "Bearer ".concat(token),
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    messageStory = _a.sent();
                    showMessageStory(messageStory);
                    return [2 /*return*/, messageStory];
            }
        });
    });
}
exports.getMessageStory = getMessageStory;
function showMessageStory(messageStory) {
    var messageCount = messageStory.messages.length - 20;
    if (messageStory.messages.length < 20) {
        messageCount = 0;
    }
    for (var i = messageStory.messages.length - 1; i > messageCount; i--) {
        if (messageStory.messages[i].user.email === 'abolshoff@yandex.ru') {
            var message = exports.CHAT_SCREEN_ELEMENTS.OUTPUT_TEMPLATE.content.cloneNode(true);
            message.querySelector('.output-message__text').textContent = "\u042F: ".concat(messageStory.messages[i].text);
            message.querySelector('.message__time').textContent = "".concat((0, format_1.default)(new Date(messageStory.messages[i].createdAt), "yyyy-MM-dd'-'HH:mm"));
            exports.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(message);
        }
        else {
            var message = exports.CHAT_SCREEN_ELEMENTS.INPUT_TEMPLATE.content.cloneNode(true);
            message.querySelector('.input-message__text').textContent = "".concat(messageStory.messages[i].user.name, ": ").concat(messageStory.messages[i].text);
            message.querySelector('.message__time').textContent = "".concat((0, format_1.default)(new Date(messageStory.messages[i].createdAt), "yyyy-MM-dd'-'HH:mm"));
            exports.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(message);
        }
    }
    exports.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.scrollIntoView(false);
    messageStory.messages = messageStory.messages.slice(0, messageStory.messages.length - 20);
}
exports.CHAT_SCREEN_ELEMENTS.MESSAGE_CONTAINER.addEventListener('scroll', scrollListener);
function getLoadedMessagesHeight() {
    var messageBlock = document.querySelectorAll('.message');
    var messagesHeight = 0;
    for (var i = messageBlock.length - 1; i > messageBlock.length - 20; i--) {
        messagesHeight += messageBlock[i].clientHeight;
    }
    document.querySelector('.container').scrollTop = messagesHeight;
}
function showMessageAllHistoryLoad() {
    var allHistoryLoadMessage = document.createElement('div');
    allHistoryLoadMessage.classList.add('all-history-load-message');
    allHistoryLoadMessage.innerText = 'Вся история загружена';
    exports.CHAT_SCREEN_ELEMENTS.MESSAGE_SCREEN.prepend(allHistoryLoadMessage);
}
function scrollListener() {
    if (messageStory.messages.length === 0 && document.querySelector('.container').scrollTop === 0) {
        showMessageAllHistoryLoad();
        document.querySelector('.container').removeEventListener('scroll', scrollListener);
    }
    if (document.querySelector('.container').scrollTop === 0) {
        showMessageStory(messageStory);
        getLoadedMessagesHeight();
    }
}

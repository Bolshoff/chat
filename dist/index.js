"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const chat_window_elements_1 = require("./chat_window_elements");
const settings_elements_1 = require("./settings_elements");
const authorization_elements_1 = require("./authorization_elements");
const submit_js_1 = require("./submit.js");
const js_cookie_1 = __importDefault(require("js-cookie"));
const webSocketOperations_1 = __importStar(require("./webSocketOperations"));
chat_window_elements_1.CHAT_SCREEN_ELEMENTS.SETTING_BUTTON.addEventListener('click', () => {
    settings_elements_1.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.remove('hide');
    settings_elements_1.SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.remove('hide');
});
settings_elements_1.SETTINGS_ELEMENTS.SETTING_CLOSE.addEventListener('click', () => {
    settings_elements_1.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.add('hide');
    settings_elements_1.SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.add('hide');
});
settings_elements_1.SETTINGS_ELEMENTS.SETTING_BACKGROUND.addEventListener('click', () => {
    settings_elements_1.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.add('hide');
    settings_elements_1.SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.add('hide');
    authorization_elements_1.AUTH_ELEMENTS.AUTH_WINDOW.classList.add('hide');
    submit_js_1.SUBMIT_ELEMENTS.CODE.classList.add('hide');
});
chat_window_elements_1.CHAT_SCREEN_ELEMENTS.INPUT_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    (0, webSocketOperations_1.sendMessage)();
    chat_window_elements_1.CHAT_SCREEN_ELEMENTS.MESSAGE_INPUT.value = '';
});
authorization_elements_1.AUTH_ELEMENTS.CLOSE.addEventListener('click', () => {
    submit_js_1.SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.remove('hide');
    authorization_elements_1.AUTH_ELEMENTS.AUTH_WINDOW.classList.add('hide');
});
submit_js_1.SUBMIT_ELEMENTS.CLOSE.addEventListener('click', () => {
    submit_js_1.SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.add('hide');
    settings_elements_1.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.remove('hide');
});
submit_js_1.SUBMIT_ELEMENTS.CODE_FORM.addEventListener('submit', (e) => {
    submit_js_1.SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.add('hide');
    settings_elements_1.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.remove('hide');
    e.preventDefault();
    setCookiesToken();
});
authorization_elements_1.AUTH_ELEMENTS.MAIL_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    (0, authorization_elements_1.getAuthCodeForMail)();
    authorization_elements_1.AUTH_ELEMENTS.AUTH_WINDOW.classList.add('hide');
    submit_js_1.SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.remove('hide');
});
function setCookiesToken() {
    const token = submit_js_1.SUBMIT_ELEMENTS.CODE.value;
    js_cookie_1.default.set('token', `${token}`);
    showUserNameWindow();
}
function showUserNameWindow() {
    settings_elements_1.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.remove('hide');
    settings_elements_1.SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.remove('hide');
    submit_js_1.SUBMIT_ELEMENTS.SUBMIT_WINDOW.classList.add('hide');
}
settings_elements_1.SETTINGS_ELEMENTS.SETTING_NAME_FORM.addEventListener('submit', (e) => {
    e.preventDefault();
    settings_elements_1.SETTINGS_ELEMENTS.SETTING_WINDOW.classList.add('hide');
    settings_elements_1.SETTINGS_ELEMENTS.SETTING_BACKGROUND.classList.add('hide');
    (0, settings_elements_1.setUserName)();
    (0, chat_window_elements_1.getMessageStory)();
    (0, webSocketOperations_1.connectOnServer)();
    setTimeout(showUserName, 1000);
});
function showUserName() {
    return __awaiter(this, void 0, void 0, function* () {
        const token = js_cookie_1.default.get('token');
        try {
            const user = yield fetch('https://mighty-cove-31255.herokuapp.com/api/user/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            const userName = yield user.json();
            const nickName = document.querySelector('.nickname');
            nickName.textContent = `Ник: ${userName.name}`;
        }
        catch (e) {
            alert(e);
        }
    });
}
chat_window_elements_1.CHAT_SCREEN_ELEMENTS.QUIT_BUTTON.addEventListener('click', () => {
    webSocketOperations_1.default.close(1000, 'Выход из чата');
});

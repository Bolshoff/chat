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
exports.setUserName = exports.SETTINGS_ELEMENTS = void 0;
const js_cookie_1 = __importDefault(require("js-cookie"));
exports.SETTINGS_ELEMENTS = {
    SETTING_BACKGROUND: document.querySelector('.modal-background'),
    SETTING_CLOSE: document.querySelector('.chat-settings__close-button'),
    SETTING_NAME_FORM: document.querySelector('.chat-settings__user-name-form'),
    SETTING_NAME_INPUT: document.querySelector('.chat-settings__user-name-input'),
    SETTING_NAME_SUBMIT: document.querySelector('.chat-settings__user-name-submit-button'),
    SETTING_WINDOW: document.querySelector('.chat-settings__window'),
};
function setUserName() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://mighty-cove-31255.herokuapp.com/api/user";
        const token = js_cookie_1.default.get('token');
        const userName = exports.SETTINGS_ELEMENTS.SETTING_NAME_INPUT.value;
        try {
            const response = yield fetch(url, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ name: `${userName}` })
            });
        }
        catch (e) {
            alert(e);
        }
    });
}
exports.setUserName = setUserName;

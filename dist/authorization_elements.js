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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthCodeForMail = exports.AUTH_ELEMENTS = void 0;
exports.AUTH_ELEMENTS = {
    CLOSE: document.querySelector('.authorization__close-button'),
    MAIL: document.querySelector('.authorization__mail-input'),
    MAIL_FORM: document.querySelector('.authorization__mail-form'),
    MAIL_SUBMIT: document.querySelector('.authorization__submit-button'),
    AUTH_WINDOW: document.querySelector('.authorization'),
};
function getAuthCodeForMail() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://mighty-cove-31255.herokuapp.com/api/user';
        const mail = {
            email: `${exports.AUTH_ELEMENTS.MAIL.value}`,
        };
        try {
            const response = yield fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(mail)
            });
        }
        catch (e) {
            alert(e);
        }
    });
}
exports.getAuthCodeForMail = getAuthCodeForMail;

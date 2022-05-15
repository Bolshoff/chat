import Cookies from 'js-cookie';
export const SETTINGS_ELEMENTS = {
  SETTING_BACKGROUND : document.querySelector('.modal-background'),
  SETTING_CLOSE : document.querySelector('.chat-settings__close-button'),
  SETTING_NAME_FORM : document.querySelector('.chat-settings__user-name-form'),
  SETTING_NAME_INPUT : document.querySelector('.chat-settings__user-name-input'),
  SETTING_NAME_SUBMIT : document.querySelector('.chat-settings__user-name-submit-button'),
  SETTING_WINDOW : document.querySelector('.chat-settings__window'),
}


export async function setUserName(){
  const url = "https://mighty-cove-31255.herokuapp.com/api/user";
  const token = Cookies.get('token');
  const userName = SETTINGS_ELEMENTS.SETTING_NAME_INPUT.value;
try {
  const response = await fetch(url,{
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({name:`${userName}`})
  });
}catch (e) {
  alert(e);
}

}
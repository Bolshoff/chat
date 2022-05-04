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
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFib2xzaG9mZkB5YW5kZXgucnUiLCJpYXQiOjE2NTEwNjU0NjYsImV4cCI6MTY1MTUxMTg2Nn0.rvzDxTVM1RCqaBlTHuPx3RzJOA-teu-OQNtaTA64kMo';//Cookies.get('token');
  const userName = SETTINGS_ELEMENTS.SETTING_NAME_INPUT.value;
try {
  let response = await fetch(url,{
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
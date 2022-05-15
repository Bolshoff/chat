export const AUTH_ELEMENTS = {
  CLOSE : document.querySelector('.authorization__close-button'),
  MAIL : document.querySelector('.authorization__mail-input'),
  MAIL_FORM : document.querySelector('.authorization__mail-form'),
  MAIL_SUBMIT : document.querySelector('.authorization__submit-button'),
  AUTH_WINDOW : document.querySelector('.authorization'),
}



export async function getAuthCodeForMail(){
  const url = 'https://mighty-cove-31255.herokuapp.com/api/user';
  const mail = {
    email : `${AUTH_ELEMENTS.MAIL.value}`,
  }
  try{
    const response =  await fetch( url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(mail)
    });
  }catch (e){
    alert(e);
  }


}
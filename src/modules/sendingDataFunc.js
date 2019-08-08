const sendingData = () => {
  const errorMessage = 'Упс... Что-то пошло не так!',
       loadMessage = 'Загрузка...',
       successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

 const form = document.querySelectorAll('form');

 const statusMessage = document.createElement('div');
       statusMessage.classList.add('success-message-in-form');


 form.forEach(item => {
   const inputs = item.querySelectorAll('input');
   item.addEventListener('submit',(e) => {
     e.preventDefault();
     item.appendChild(statusMessage);
     statusMessage.textContent = loadMessage;
     const data = new FormData(item);
     let body = {};
     data.forEach((val,key) => {
       body[key] = val;
     })
     const question = document.querySelector('input[name="user_quest"]');
     if (question) {
       body['question'] = question.value;
       question.value = ''
     }

     postData(body)
     .then((response)=>{
       if (response.status !== 200) {
         throw new Error("I can't connect to the server...")
       }
       statusMessage.innerHTML = successMessage;
       inputs.forEach(item => item.value = '');
     })
     .catch(error => {
       console.error(error);
       inputs.forEach(item => item.value = '');
       statusMessage.innerHTML = errorMessage;
     })
    })
 })

  const postData = (body) => {
    return fetch('./server.php',{
      method:'POST',
      headers:{
        'Content-Type':'application/JSON'
      },
      body:JSON.stringify(body)
    })
  }
}
export default sendingData;

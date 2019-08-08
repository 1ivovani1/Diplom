const inputValid = () => {
  const allPhonesInp = document.querySelectorAll('input[placeholder="+7(___)___-__-__"]');
  allPhonesInp.forEach(item => {
    item.addEventListener('input',() => {
      item.value = item.value.replace(/[^0-9\+]/gi,'');
    })
  });
}
export default inputValid;

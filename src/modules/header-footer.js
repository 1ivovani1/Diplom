const headerFooterModal = () => {
  const checkMess = () => {
    const sucessMess = document.querySelector('.success-message-in-form');
    if (sucessMess) {
      sucessMess.parentNode.removeChild(sucessMess);
    }
  }
  const links = document.querySelectorAll('header a');
  links.forEach(item => {
    item.addEventListener('click',(e) => {
      e.preventDefault();

        const popup = document.querySelector('.popup-call');
        popup.style.display = 'block';

        popup.addEventListener('click',(e) => {
          let target = e.target;
          if(target.matches('.popup-close')){
              popup.style.display = 'none';
              checkMess();
          }else if (target.matches(".popup-call:not(.popup-content)")) {
              popup.style.display = 'none';
              checkMess();
          }
        });

    });
  });
}
export default headerFooterModal;

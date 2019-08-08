const discountPopup = () => {
  const checkMess = () => {
    const sucessMess = document.querySelector('.success-message-in-form');
    if (sucessMess) {
      sucessMess.parentNode.removeChild(sucessMess);
    }
  }
  const wrapper = document.querySelector('.sentence');
  wrapper.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.matches('.sentence-btn')) {
      const popup = document.querySelector('.popup-discount');
      popup.style.display = 'block';

      popup.addEventListener('click',(e) => {
        let target = e.target;
        if(target.matches('.popup-close')){
            popup.style.display = 'none';
            checkMess();
        }else if (target.matches(".popup-discount:not(.popup-content)")) {
            popup.style.display = 'none';
            checkMess();
        }
      });
    }
  });
}
export default discountPopup;

const moreThings = () => {
  const wrapper = document.querySelector('.sentence');
  wrapper.addEventListener('click',(e) => {
    e.preventDefault();
    let target = e.target;

    if (target.matches('.add-sentence-btn')) {
      const hidden = wrapper.querySelectorAll('.row div');
      hidden.forEach(item => {
        if (item.classList.contains('hidden')) {
          item.classList.remove('hidden')
        }
        if (item.classList.contains('visible-sm-block')) {
          item.classList.remove('visible-sm-block')
        }
      })
      target.style.display = 'none';
    }

  });
}
export default moreThings;

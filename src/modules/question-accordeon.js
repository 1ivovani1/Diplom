const accordion = () => {
  const wrapper = document.querySelector('.questions');
  wrapper.addEventListener('click',(e) => {
    e.preventDefault()
    let target = e.target;
    const allHeadings = Array.from(document.querySelectorAll('.questions .panel-heading')),
          allContents = document.querySelectorAll('.questions .collapse');

    if (target.matches('.questions .panel-heading, .questions h4, .questions a')) {
      let index = allHeadings.indexOf(target.closest('.questions .panel-heading'));
      allContents.forEach((item,i) => {
        if (i == index) {
          item.style.display = 'block';
        }else{
        item.style.display = 'none';
        }
      })

    }
  });
}

export default accordion;

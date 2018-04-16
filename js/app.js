(function () {

  function init() {
    const blocks = document.querySelectorAll('.block[data-key]');
    const mainPage = document.querySelector('.page__main');
    const contentPage = document.querySelector('.page__content');
    const closeButton = document.querySelectorAll('button.close');

    function handleClick() {
      const key = this.dataset.key;
      const windowContent = document.querySelector(`.window[data-key="${ key }"]`);

      if (!windowContent) return false;

      const header = windowContent.querySelector('h2');
      const content = windowContent.querySelector('p');

      mainPage.classList.add('disable');
      contentPage.classList.add('enable');

      setTimeout(()=> {
        windowContent.classList.add('open');
        header.classList.add('open');
        content.classList.add('open');
      }, 500);
    }

    function handleClose() {
      const parent = this.parentElement;
      const header = parent.querySelector('h2');
      const content = parent.querySelector('p');

      header.classList.remove('open');
      content.classList.remove('open');

      setTimeout(() => {
        parent.classList.remove('open');

        setTimeout(() => {
          contentPage.classList.remove('enable');
          mainPage.classList.remove('disable');
        }, 500);
      }, 1000);

    }

    function play() {
      const page = document.querySelector('.page');
      const heading = document.querySelector('.block__center h1');
      const subheading = document.querySelector('.block__center p');
      page.classList.add('play');
      setTimeout(() => {
        heading.classList.add('play');
        setTimeout(() => { subheading.classList.add('play') }, 400);
        }, 500);
    }

    blocks.forEach(block => block.addEventListener('click', handleClick));
    closeButton.forEach(btn => btn.addEventListener('click', handleClose));

    setTimeout(play, 500);
  }

  window.onload = init;
})();




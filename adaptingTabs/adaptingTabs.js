const container = document.querySelector('.tabs');
const primary = document.querySelector('.primary');
const primaryItems = document.querySelectorAll('.primary > li:not(.more)');

// remove css fix once js has loaded
container.classList.add('jsfied');

// inswert "more" button and duplicate the list
primary.insertAdjacentHTML('beforeend', `
  <li class="more">
    <button type="button" aria-haspopup="true" aria-expanded="false">More &darr;</button>
    <ul class="secondary">
      ${primary.innerHTML}
    </ul>
  </li>
`);


const secondary = document.querySelector('.secondary');
const secondaryItems = secondary.querySelectorAll('li');
const allListItmes = document.querySelectorAll('li');
const moreLi = document.querySelector('.more');
const moreButton = moreLi.querySelector('button');


moreLi.addEventListener('click', e => {
  e.preventDefault();
  // onclick, toggle the secondary list
  container.classList.toggle('show-secondary');
  // set aria-expanded based on existance of 'show-secondary'
  moreButton.setAttribute('aria-expanded', container.classList.contains('show-secondary'));
})
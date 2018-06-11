const container = document.querySelector('.tabs');
const primary = document.querySelector('.primary');
const primaryItems = document.querySelectorAll('.primary > li:not(.more)');

// remove css fix once js has loaded
container.classList.add('jsfied');

// insert "more" button and duplicate the list
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
const allListItems = document.querySelectorAll('li');
const moreContainer = document.querySelector('.more');
const moreButton = moreContainer.querySelector('button');


doAdapt();
window.addEventListener('resize', doAdapt);


// open and close "more" menu on click
moreContainer.addEventListener('click', e => {
	e.preventDefault();
	// onclick, toggle the secondary list
	container.classList.toggle('show-secondary');
	// set aria-expanded based on existance of 'show-secondary'
	moreButton.setAttribute('aria-expanded', container.classList.contains('show-secondary'));
})


// allow user to click outside of the dropdown to close
document.addEventListener('click', e => {
	let element = e.target;
	while(element) {
		if ( element === secondary || element === moreContainer ) {
			return;
		}
		element = element.parentNode;
	}
	container.classList.remove('show-secondary');
	moreContainer.setAttribute('aria-expanded', false);
})



// manage the "more" menu
function doAdapt() {
	// make all menu items visible
	allListItems.forEach(item => {
		item.classList.remove('hidden');
	});

	let stopWidth = moreContainer.offsetWidth;
	const primaryWidth = primary.offsetWidth;

	let hiddenItems = [];

	// hide items from nav when necessary
	primaryItems.forEach((item, i) => {
		// if the width of the primary nav is greater or equal to
		// the width of the "more" button + the width of the item...
		if (primaryWidth >= stopWidth + item.offsetWidth) {
			// ...then add the item's width to the stopWidth
			stopWidth += item.offsetWidth;
		} else {
			// hide the item
			item.classList.add('hidden');
			// add the hidden item to the hiddenItems list
			hiddenItems.push(i);
		}
	})

	// add only hidden items to secondary menu
	if (!hiddenItems.length) {
		// hide the "more" button
		moreContainer.classList.add('hidden');
		// remove unnecessary 'show-secondary' class
		container.classList.remove('show-secondary');
		moreButton.setAttribute('aria-expanded', false);
	} else {
		// if there are items in the hidden list...
		secondaryItems.forEach((item, i) => {
			// if the hidden list doesn't include the item, hide it
			if (!hiddenItems.includes(i)) {
				item.classList.add('hidden');
			}
		})
	}
}
//select 2 btn and sidebar
const burgerBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

function tog() {
  sidebar.classList.toggle('show-sidebar');
}

// add event listener
burgerBtn.addEventListener('click', function () {
  tog();
});

closeBtn.addEventListener('click', function () {
  tog();
});

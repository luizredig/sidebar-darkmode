const body = document.body;
const box = document.getElementById('box');

const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggleBtn');

const toggleCircle = document.getElementById('circle');
const moon = document.getElementById('moon');

const items = document.querySelectorAll('icon');
const list = document.querySelectorAll('li');

function activeItem() {
    list.forEach(item => {
        item.classList.remove('active');
        this.classList.add('active');
    });
}

function toggleSidebar() {
    sidebar.classList.toggle("active");
}

function toggleMode() {
    toggleCircle.classList.toggle('active');
    box.classList.toggle('active');
    body.classList.toggle('dark-mode');
    moon.classList.toggle('dark-mode');
    sidebar.classList.toggle('dark-mode');
}

toggleButton.addEventListener('click', toggleSidebar);
toggleCircle.addEventListener('click', toggleMode);
list.forEach(item => {
    item.addEventListener('click', activeItem);
});
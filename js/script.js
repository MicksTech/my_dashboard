const toggleBtn = document.getElementById('toggleBtn');
const closeBtn = document.getElementById('closeBtn');
const header = document.getElementById('header');
const navlist = document.getElementById('navlist');

toggleBtn.addEventListener('click', () => {
    header.classList.toggle('active');
    navlist.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    header.classList.remove('active');
    navlist.classList.remove('active');
});

document.querySelectorAll('#navlist a').forEach((item) => {
    item.addEventListener('click', () => {
        header.classList.remove('active');
        navlist.classList.remove('active');
    })
})

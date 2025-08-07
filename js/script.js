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
    });
});


const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 8, 9, 5, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

document.getElementById('datime').textContent = new Date(). getFullYear();
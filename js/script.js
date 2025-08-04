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


const chartCanvas = document.getElementById("canvas");
if (chartCanvas) {
    new Chart(chartCanvas, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of votes',
                data: [12, 3, 6, 7, 8, 4],
                borderColor: '#0078d4',
                backgroundColor: 'rgba(0,120,212,0.1)',
                borderWidth: 2
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });
}
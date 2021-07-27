const form = document.getElementById("form-id");
const search = document.getElementById("search");
const message = document.getElementById("message");

// LINE CHART
const lineLabels = [
    '16-22',
    '23-29',
    '30-5',
    '6-12',
    '13-19',
    '20-26',
    '27-3',
    '4-10',
    '11-17',
    '18-24',
    '25-31'
];
const lineData = {
    labels: lineLabels,
    datasets: [{
        fill: true,
        backgroundColor: "rgba(116, 119, 191, .3)",
        borderWidth: 1,
        lineTension: .4,
        radius: 4,
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500]
    }]
};

const lineConfig = {
    type:'line',
    data: lineData,
    options: {
        aspectRatio: 2.5,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};

let lineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig
);


// BAR CHART
const barLabels = [
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
];
const barData = {
    labels: barLabels,
    datasets: [{
        label: 'DAILY TRAFFIC',
        backgroundColor: "#7477BF",
        borderColor: 'rgb(255, 99, 132)',
        data: [75, 110, 175, 125, 225, 200, 100]
    }]
};

const barConfig = {
    type: 'bar',
    data: barData,
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

let barChart = new Chart(
    document.getElementById('barChart'),
    barConfig
);

// DOUGHNUT CHART

const pieData = {
    labels: [
      'Desktop',
      'Tablet',
      'Phone'
    ],
    datasets: [{
      data: [300, 75, 75],
      backgroundColor: [
        "#7477BF",
        "#78CF82",
        "#51B6C8"
      ],
      hoverOffset: 4
    }]
  };

const pieConfig = {
    type: 'doughnut',
    data: pieData,
    options: {
        responsive: true,
        aspectRatio: 1.9,
        plugins: {
            legend: {
                position: "right",
                labels: {
                    boxHeight: 17,
                    boxWidth: 30
                }
            }
        }
    }
  };

let pieChart = new Chart(
    document.getElementById('pieChart'),
    pieConfig
);


// SUBIT FORM 
document.getElementById("submit").addEventListener("click", function (e) {
    if( search.value === '' || message.value === '' ) {
        alert("Error, please type user or message.");
        e.preventDefault();
    }
    else {
        alert("Your message has been sent.");
        form.submit();
    }
});

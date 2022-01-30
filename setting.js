// Add active class to the current button (highlight it)
// var navMain = document.getElementById("navMain");
// var navItem = navMain.getElementsByClassName("nav-item");
// for (var i = 0; i < navItem.length; i++) {
//     navItem[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active-nav");
//   current[0].className = current[0].className.replace(" active-nav", "");
//   this.className += " active-nav";
//   });
// }

function activeClass(id, className) {
  var navMain = document.getElementById(id);
  var navItem = navMain.getElementsByClassName(className);
  for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active-nav");
      current[0].className = current[0].className.replace(" active-nav", "");
      this.className += " active-nav";
    });
  }
}
activeClass("navMain", "nav-item");
activeClass("mobileNavMain", "nav-item");

// mobileNavMain
// Open menu

function openMenu() {
  var x = document.getElementById("navMain");
  console.log("this is from sibilings");
}

// mobile menu

function mobileMenu() {
  const mobileMenuIcon = document.getElementById("mobileMenuIcon");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuCloseIcon = document.getElementById("mobileMenuCloseIcon");
  mobileMenu.style.width = "30px";
  mobileMenuIcon.classList.toggle("mobile-menu-icon");
  mobileMenuCloseIcon.classList.toggle("mobile-menu-close-icon");
  console.log("working");
  var mobileNavMainx = document.getElementById("mobileNavMain");
  mobileNavMainx.classList.toggle("mobileNavMain-open");
  mobileNavMainx.classList.toggle("mobileNavMain-close");
}

///////////////////////////////////////////////////////////////////////////////

// JS

// const labels = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
// ];

// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First dataset',
//     backgroundColor: 'rgb(255, 99, 132)',
//     borderColor: 'rgb(255, 99, 132)',
//     data: [0, 10, 5, 2, 20, 30, 45],
//   }]
// };

// const config = {
//   type: 'line',
//   data: data,
//   options: {}
// };

// const myChart = new Chart(
//   document.getElementById('myChart'),
//   config
// );

var xyValues = [
  {
    x: 0,
    y: 500.9654065969375,
  },
  {
    x: 1,
    y: 1000.9654065969375,
  },
  {
    x: 2,
    y: 1200.48089550683521,
  },
  {
    x: 3,
    y: 1503.3952945670304,
  },
  {
    x: 4,
    y: 1842.09092570663737,
  },
  {
    x: 5,
    y: 1950.686361199212634,
  },
  {
    x: 6,
    y: 2053.213928169264335,
  },
  {
    x: 7,
    y: 2456.697058829086984,
  },
  {
    x: 8,
    y: 2845.57276156275818,
  },
  {
    x: 9,
    y: 2950.29960000342334,
  },
  {
    x: 10,
    y: 3333.916860361088133,
  },
  {
    x: 11,
    y: 1590.9654065969375,
  },
  {
    x: 12,
    y: 3666.48089550683521,
  },
  {
    x: 13,
    y: 4890.3952945670304,
  },
  {
    x: 14,
    y: 4342.09092570663737,
  },
  {
    x: 15,
    y: 6603.686361199212634,
  },
  {
    x: 16,
    y: 6666.213928169264335,
  },
  {
    x: 17,
    y: 5333.697058829086984,
  },
  {
    x: 18,
    y: 8789.57276156275818,
  },
  {
    x: 19,
    y: 7779.29960000342334,
  },
  {
    x: 20,
    y: 8115.29960000342334,
  },
  {
    x: 21,
    y: 8336.9654065969375,
  },
  {
    x: 22,
    y: 8500.48089550683521,
  },
  {
    x: 23,
    y: 9000.3952945670304,
  },
  {
    x: 24,
    y: 11500.09092570663737,
  },
  {
    x: 25,
    y: 11000.686361199212634,
  },
  {
    x: 26,
    y: 12100.213928169264335,
  },
  {
    x: 27,
    y: 12302.697058829086984,
  },
  {
    x: 28,
    y: 12504.57276156275818,
  },
  {
    x: 29,
    y: 12000.29960000342334,
  },
  {
    x: 30,
    y: 12800.916860361088133,
  },
  {
    x: 31,
    y: 14002.9654065969375,
  },
  {
    x: 32,
    y: 14500.48089550683521,
  },
  {
    x: 33,
    y: 13005.3952945670304,
  },
  {
    x: 34,
    y: 14100.09092570663737,
  },
  {
    x: 35,
    y: 13100.686361199212634,
  },
  {
    x: 36,
    y: 14600.213928169264335,
  },
  {
    x: 37,
    y: 14500.697058829086984,
  },
  {
    x: 38,
    y: 14000.57276156275818,
  },
  {
    x: 39,
    y: 15004.29960000342334,
  },
  {
    x: 40,
    y: 15800.29960000342334,
  },
];

var xyValues = [
  {
    x:'23 oct',
    y: 500.9654065969375,
  },
  {
    x: "6 nov",
    y: 1000.9654065969375,
  },
  {
    x: "20 nov",
    y: 1200.48089550683521,
  },
  {
    x: "4 dec",
    y: 1503.3952945670304,
  },
  {
    x: "18 dec",
    y: 1842.09092570663737,
  },
  {
    x: "1 jan",
    y: 1950.686361199212634,
  }
];

const ctx = document.getElementById("myChart").getContext("2d");
// const data = [
//   { x: "23 oct", net: 100, cogs: 50, gm: 50 },
//   { x: "6 nov", net: 120, cogs: 55, gm: 75 },
// ];

// const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["", "23 oct", "6 nov", "20 nov", "4 dec", "18 dec", "1 jan"],
    datasets: [
      {
        // label: false,
        data: xyValues,
        // backgroundColor: ["#79c131"],
        borderColor: ["#79c131"],
        borderWidth: 2.5,
        pointRadius: 0,
        radius: 0,
        pointHoverRadius: 0,
        lineTension: 0,
      },
    ],
  },
  options: {
    // animations: {
    //   tension: {
    //     duration: 1000,
    //     easing: "linear",
    //     from: 1,
    //     to: 0,
    //     loop: true,
    //   },
    // },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        type: "linear",
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 20,
          },
        },
        time: {
          displayFormats: {
            quarter: "MMM YYYY",
          },
        },
      },
      y: {
        grid: {
          color: "#313135",
        },
        ticks: {
          font: {
            size: 20,
            beginAtZero: true,
            min: 0,
            max: 500,
          },
          // Include a dollar sign in the ticks
          callback: function (value, index, array) {
            return value < 1000000 ? value / 1000 + "K" : value / 1000000 + "M";
          },
          beginAtZero: false,
          stepSize: 5000,
        },
        min: 0,
        max: 20000,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

////////////////////////////////////////////////////////

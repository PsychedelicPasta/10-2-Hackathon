//Pie Chart - Block 1
var xValuesPie = ["First", "Second", "Third", "Fourth", "Fifth"];
var yValuesPie = [55, 49, 44, 24, 15];
var pieColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("pieChart", {
  type: "pie",
  data: {
    labels: xValuesPie,
    datasets: [{
      backgroundColor: pieColors,
      data: yValuesPie
    }]
  },
  options: {
    title: {
      display: true,
      text: "Pie Chart example"
    }
  }
});

//Bar Graph - Block 2
var xValuesBar = ["First", "Second", "Third", "Fourth", "Fifth"];
var yValuesBar = [55, 49, 44, 24, 35];
var barColors = ["#b91d47", "#00aba9","#2b5797","#e8c3b9","#1e7145"];

new Chart("barGraph", {
  type: "bar",
  data: {
    labels: xValuesBar,
    datasets: [{
      backgroundColor: barColors,
      data: yValuesBar
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Bar Graph Example"
    }
  }
});

//Pie Chart - Block 3
var xValuesPie2 = ["First", "Second", "Third", "Fourth", "Fifth"];
var yValuesPie2 = [55, 49, 44, 24, 15];
var pieColors2 = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("pieChart2", {
  type: "pie",
  data: {
    labels: xValuesPie2,
    datasets: [{
      backgroundColor: pieColors2,
      data: yValuesPie2
    }]
  },
  options: {
    title: {
      display: true,
      text: "Pie Chart example 2"
    }
  }
});

//Bar Graph - Block 4
var xValuesBar2 = ["First", "Second", "Third", "Fourth", "Fifth"];
var yValuesBar2 = [55, 49, 44, 24, 35];
var barColors2 = ["#b91d47", "#00aba9","#2b5797","#e8c3b9","#1e7145"];

new Chart("barGraph2", {
  type: "bar",
  data: {
    labels: xValuesBar2,
    datasets: [{
      backgroundColor: barColors2,
      data: yValuesBar2
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Bar Graph Example 2"
    }
  }
});
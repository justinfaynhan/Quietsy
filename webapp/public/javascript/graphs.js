// Highcharts API

var level = document.currentScript.getAttribute('level'); // Gives the current library floor level

document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('myChart', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series0 = this.series[0];
                    var series1 = this.series[1];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random();
                        series0.addPoint([x, y], false, true);
                        series1.addPoint([x, y * 2 + 0.1], true, true)
                    }, 5000);
                }
            }
        },
        time: {
            useUTC: false
        },
    
        title: {
            text: 'Sound readings'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 100
        },
        yAxis: {
            title: {
                text: 'Decibels'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Sensor A',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
    
                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 5000,
                        y: Math.random()
                    });
                }
                return data;
            }())
        },
        {
            name: 'Sensor B',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
    
                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 5000,
                        y: Math.random()
                    });
                }
                return data;
            }())
        }]
    });
});
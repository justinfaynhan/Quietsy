var y0A;
setInterval(function () {
    $.get({ 
        url: '/data0A',
        contentType: "text/plain"
    }, function(data) {
        y0A = Number(data);
    });
}, 1000);
document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('myChart0A', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        
                        var x = (new Date()).getTime(); // current time
                        series.addPoint([x, y0A], true, true);
                    }, 5000);
                }
            }
        },
        time: {
            useUTC: false
        },
    
        title: {
            text: 'Sensor 0A sound readings'
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
                color: '#00639D'
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
            name: 'Sensor 0A',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
    
                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 5000,
                        y: 0
                    });
                }
                return data;
            }())
        }]
    });
});


var y0B;
setInterval(function () {
    $.get({ 
        url: '/data0B',
        contentType: "application/text"
    }, function(data) {
        y0B = Number(data);
    });
}, 1000);
document.addEventListener('DOMContentLoaded', function () {
    var myChart = Highcharts.chart('myChart0B', {
        chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        
                        var x = (new Date()).getTime(); // current time
                        series.addPoint([x, y0B], true, true);
                    }, 5000);
                }
            }
        },
        time: {
            useUTC: false
        },
    
        title: {
            text: 'Sensor OB sound readings'
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
                color: '#00639D'
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
            name: 'Sensor 0B',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
    
                for (i = -19; i <= 0; i += 1) {
                    data.push({
                        x: time + i * 5000,
                        y: 0
                    });
                }
                return data;
            }())
        }]
    });
});




document.getElementById("sensor0Aicon").onclick = function() {
    document.getElementById("myChart0A").classList.toggle("graphs");
    document.getElementById("myChart0B").classList.add("graphs");
    document.getElementById("sensor0Aicon").classList.toggle("icon-selected");
    document.getElementById("sensor0Bicon").classList.remove("icon-selected");

}
   



document.getElementById("sensor0Bicon").onclick = function() {
    document.getElementById("myChart0B").classList.toggle("graphs");
    document.getElementById("myChart0A").classList.add("graphs");
    document.getElementById("sensor0Bicon").classList.toggle("icon-selected");
    document.getElementById("sensor0Aicon").classList.remove("icon-selected");
}
   
      
var plotLines = [{
    "value": 15.052742011049155,
        "width": 2,
        "color": "#666",
        "zIndex": 10,
        "dashStyle": "Dash",
        "label": {
        "text": "m",
            "rotation": 0,
            "align": "center",
            "x": 0,
            "y": -5,
            "style": {
            "fontSize": "10px"
        }
    }
}, {
    "value": 14.100329431,
        "width": 1,
        "color": "#999",
        "dashStyle": "Dash",
        "zIndex": 10,
        "label": {
        "text": "-1s",
            "rotation": 0,
            "align": "center",
            "x": 0,
            "y": -5,
            "style": {
            "fontSize": "10px"
        }
    }
}, {
    "value": 16.0051545911292,
        "width": 1,
        "color": "#999",
        "dashStyle": "Dash",
        "zIndex": 10,
        "label": {
        "text": "+1s",
            "rotation": 0,
            "align": "center",
            "x": 0,
            "y": -5,
            "style": {
            "fontSize": "10px"
        }
    }
}, {
    "value": 13.1479168509,
        "width": 1,
        "color": "#999",
        "dashStyle": "Dash",
        "zIndex": 10,
        "label": {
        "text": "-2s",
            "rotation": 0,
            "align": "center",
            "x": 0,
            "y": -5,
            "style": {
            "fontSize": "10px"
        }
    }
}, {
    "value": 16.9575671712092,
        "width": 1,
        "color": "#999",
        "dashStyle": "Dash",
        "zIndex": 10,
        "label": {
        "text": "+2s",
            "rotation": 0,
            "align": "center",
            "x": 0,
            "y": -5,
            "style": {
            "fontSize": "10px"
        }
    }
}, {
    "value": 12.1955042708,
        "width": 1,
        "color": "#999",
        "dashStyle": "Dash",
        "zIndex": 10,
        "label": {
        "text": "-3s",
            "rotation": 0,
            "align": "center",
            "x": 0,
            "y": -5,
            "style": {
            "fontSize": "10px"
        }
    }
}, {
    "value": 17.9099797512892,
        "width": 1,
        "color": "#999",
        "dashStyle": "Dash",
        "zIndex": 10,
        "label": {
        "text": "+3s",
            "rotation": 0,
            "align": "center",
            "x": 0,
            "y": -5,
            "style": {
            "fontSize": "10px"
        }
    }
}];
var plotBands = [{
    "from": 14.100329431,
        "to": 16.0051545911292,
        "color": "rgba(184,210,236,.1)",
        "zIndex": 0
}, {
    "from": -1.8520831491109,
        "to": 16.9575671712092,
        "color": "rgba(184,210,236,.1)",
        "zIndex": 0
}, {
    "from": -2.8044957291909,
        "to": 17.9099797512892,
        "color": "rgba(184,210,236,.1)",
        "zIndex": 0
}];

var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container2',
        type: 'column',
        alignTicks: false,
        marginTop: 25,
        showAxes: true
    },
    exporting: {
        enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        borderWidth: 1,
        formatter: function () {
            return '<b>Range:</b><br/> ' + this.x + '<br/>' +
                '<b>Count:</b> ' + this.y;
        }
    },
    plotOptions: {
        series: {
            minPointLength: 1,
            shadow: false,
            marker: {
                enabled: false
            }
        },
        area: {
            events: {
                legendItemClick: function (e) {
                    if (this.name == 'Sigma Bands') {
                        toggleBands(this.chart);
                    }
                }
            }
        }
    },
    xAxis: {
        lineColor: '#999',
        tickColor: '#ccc',
        plotLines: plotLines,
        plotBands: plotBands
    },
    yAxis: {
        title: {
            text: ''
        },
        gridLineColor: '#e9e9e9',
        tickWidth: 1,
        tickLength: 3,
        tickColor: '#ccc',
        lineColor: '#ccc',
        endOnTick: false,
    },
    series: [{
        name: 'Student Data',
        data: [
            [12.0943590644815, 4],
            [12.3138013781265, 1],
            [13.2165898099016, 18],
            [13.4360321235466, 18],
            [13.6554744371915, 12],
            [13.8749167508365, 11],
            [14.11937824167663, 51],
            [14.33882055532162, 40],
            [14.55826286896661, 36],
            [14.77770518261159, 21],
            [14.99714749625658, 24],
            [15.10006407196835, 40],
            [15.31950638561334, 42],
            [15.53894869925832, 36],
            [15.75839101290331, 40],
            [15.9778333265483, 36],
            [16.1972756401933, 23],
            [16.4167179538383, 18],
            [16.6361602674833, 9],
            [16.8556025811282, 12],
            [17.0750448947732, 3],
            [17.2944872084182, 4]
        ],
        pointRange: 0.21944231364499,
        borderWidth: .5,
        borderColor: '#666',
        pointPadding: .015,
        groupPadding: 0,
        color: '#e3e3e3'
    }, {
        type: 'spline',
        lineWidth: 1,
        name: 'Distribution Function',
        color: 'rgba(90,155,212,.75)',
        fillColor: 'rgba(90,155,212,.15)',
        data: [
            [12.0425988742109, 3.23641431548771],
            [12.2807020192309, 1.10168053006185],
            [13.2901862941309, 17.9981421093266],
            [13.3377737140509, 17.38133847858],
            [13.3282894391509, 17.0423080409267],
            [13.3758768590709, 17.090728685704],
            [13.5663925841709, 17.0595354537927],
            [13.6139800040909, 17.052592494842],
            [13.8044957291909, 19.51637633957668],
            [13.8520831491109, 23.2907516383431],
            [14.18536113397085, 45.052593912695],
            [14.42346427899086, 41.020853564556],
            [14.66156742401087, 35.086995418605],
            [14.89967056903087, 28.193192861774],
            [15.052742011049155, 46.482716760157],
            [15.29084515606916, 45.052593912695],
            [15.52894830108917, 41.020853564556],
            [15.76705144610918, 35.086995418605],
            [16.0051545911292, 28.193192861773],
            [16.2432577361492, 21.28133847858],
            [16.4813608811692, 15.090728685704],
            [16.7194640261892, 10.052592494842],
            [16.9575671712092, 6.2907516383431],
            [17.1956703162292, 3.6981421093266],
            [17.4337734612492, 2.0423080409267],
            [17.6718766062692, 1.0595354537927],
            [17.9099797512892, 0.51637633957668],
            [18.1480828963092, 0.23641431548771]
        ]
    }]
});

function toggleBands(chart) {
    console.log('index');

    var i = chart.xAxis[0].plotLinesAndBands.length;
    if (i > 0) {
        while (i--) {
            chart.xAxis[0].plotLinesAndBands[i].destroy();
        }
    } else {
        chart.xAxis[0].update({
            plotLines: plotLines,
            plotBands: plotBands
        });
    }

}
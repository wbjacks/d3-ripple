var CIRCLES = [4, 80, 100, 150, 240, 200];
var WIDTH = 600, HEIGHT = 800;

var container = d3.select('#wrapper')
    .append('svg')
    .attr('width', WIDTH)
    .attr('height', HEIGHT);

container.selectAll('circle').data(CIRCLES.sort(d3.descending)).enter()
    .append('circle')
    .attr('r', function(d) {return d;})
    .attr('cx', WIDTH/2)
    .attr('cy', HEIGHT/2)
    .attr('stroke', 'black')
    .attr('fill', 'white')
    .on('click', function(d,i) {
        var init = d;
        d3.select(this).transition()
            .duration(500)
            .attr('r', i-1)
        .transition()
            .delay(500)
            .duration(1000)
            .attr('r', init);

    });


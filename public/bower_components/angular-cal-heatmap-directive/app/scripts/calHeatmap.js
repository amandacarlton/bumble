'use strict';

angular.module('calHeatmap',[])
    .directive('calHeatmap', function () {
        function link(scope, el) {
            var config = scope.config;
            var elemenent = el[0];
            var cal = new CalHeatMap();
            cal.init({
                itemSelector: elemenent,
                domain: !config ? 'month': config.domain ? config.domain : 'month',
                subDomain: !config ? 'day': config.subDomain ? config.subDomain : 'day',
                subDomainTextFormat: !config ? '%d' : config.subDomainTextFormat ? config.subDomainTextFormat : '%d',
                data: !config ? '' : config.data ? config.data : '',
                start: !config ? new Date() : config.start ? config.start : new Date(),
                cellSize: !config ? 25 : config.cellSize ? config.cellSize : 25,
                range: !config ? 3 : config.range ? config.range : 3,
                domainGutter: !config ? 10 : config.domainGutter ? config.domainGutter : 10,
                legend: !config ? [1,2,3,4,5,6] : config.legend ? config.legend : [1,2,3,4,5,6],
                itemName: !config ? 'item' : config.itemName ? config.itemName : 'item'
              });
          }

        return {
            template: '<div id="cal-heatmaps" config="config"></div>',
            restrict: 'E',
            link: link,
            scope: { config: '=' }
          };
      });

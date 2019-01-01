import './puzzle.scss';
// import $ from 'jquery-ui';
let puzzle = () => {
    return {
        template: require('./puzzle.html'),
        controllerAs: 'puzzle',
        replace: true,
        scope: {
            row: '@',
            column: '@',
        },
        link: (scope, element, attrs) => {
            $(element).css('background-size', angular.element(element).parent()[0].clientWidth + 'px');
        }
    }
};

export default puzzle;
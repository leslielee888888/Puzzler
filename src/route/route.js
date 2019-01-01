const route = ($stateProvider, $urlRouterProvider) => {
    /*  $routeProvider.otherwise("/start")
         $routeProvider.when("/start", {
             controller: 'StartCtrl',
             template: require('../pages/start/start.html')
         }) */
    $urlRouterProvider.otherwise("/start")
    $stateProvider.state({
        name: 'start',
        url: '/start',
        template: require('../pages/start/start.html'),
        controller: 'StartCtrl',
    }).state({
        name: 'game',
        url: '/game',
        template: require('../pages/game/game.html'),
        controller: 'GameCtrl',
    });
};
export default route;
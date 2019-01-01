require('webpack-jquery-ui');
require('webpack-jquery-ui/css');
import angular from 'angular';
import '@uirouter/angularjs';
import '../style/app.scss';
import '../route/route.js'
import StartCtrl from '../pages/start/start';
import route from '../route/route.js';
import GameCtrl from '../pages/game/game';
import puzzle from '../component/puzzle/puzzle';
import 'bootstrap';
import SERVICE_MODULE_NAME from '../service/service.module';
/* import $ from 'jquery';
window.$ = $; */
let app = () => {
    return {
        template: require('./app.html'),
        controllerAs: 'app'
    }
};


const MODULE_NAME = 'app';
/**
 * application entry
 */
angular.module(MODULE_NAME, ['ui.router', SERVICE_MODULE_NAME])
    /**
     * register router
     */
    .config(route)
    /**
     * register entry component
     */
    .directive('app', app)
    /**
     * register each single puzzle
     */
    .directive('puzzle', puzzle)
    /**
     * register controller
     */
    .controller('StartCtrl', StartCtrl)
    .controller('GameCtrl', GameCtrl)
export default MODULE_NAME;
import angular from 'angular';
import storage from './storage.service';
import GameService from './game.service';
const SERVICE_MODULE_NAME = 'ServiceModule'
angular.module(SERVICE_MODULE_NAME, [])
    /**
     * storageService Provide HTML5Localstorage function
     */
    .service('storageService', storage)
    /**
     * gameService Provide initail puzzles array and some util function
     */
    .service('gameService', GameService)
export default SERVICE_MODULE_NAME;
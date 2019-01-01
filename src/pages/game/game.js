import './game.scss';
class GameCtrl {
    constructor($scope, $state, gameService) {
        $('#myModal').on('hidden.bs.modal', () => {
            $state.go('start');
        })
        $('.game-container').height($('.game-container').width());
        $('.game-container').sortable({
            update: function(event, ui) {
                $scope.step++;
                let isGameOver = gameService.isGameOver($('.game-container .puzzle'), $scope.step);
                if (isGameOver) {
                    $('#myModal').modal('show');
                }
                $scope.$apply();
            }
        });
        $('.game-container').disableSelection();
        /**
         * initail puzzles array
         */
        $scope.puzzles = gameService.initPuzzles();
        $scope.step = gameService.initSteps();
    }
}
export default GameCtrl
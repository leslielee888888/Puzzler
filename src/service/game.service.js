let GameService = (storageService) => {
    let puzzles = [];
    let step = 0;
    return {
        initPuzzles: () => {
            const _cache = storageService.getDate();
            if (_cache) {
                puzzles = _cache.puzzles;
            } else {
                puzzles = [];
                let _index = 0;
                for (let row = 1; row <= 3; row++) {
                    for (let column = 1; column <= 3; column++) {
                        puzzles.push({
                            row,
                            column,
                            _index
                        })
                        _index++;
                    }
                }
                /**
                 * random rearrange puzzles array
                 */
                puzzles = puzzles.sort(() => (0.5 - Math.random()));
                storageService.setDate({
                    puzzles,
                    step: 0
                })
            }

            return puzzles;
        },
        initSteps: () => {
            const _cache = storageService.getDate();
            if (_cache) {
                step = _cache.step;
            } else {
                step = 0
            }
            return step;
        },
        isGameOver: (array, step) => {
            let isGameOver = true;
            let cache = [];
            array.map((i, v) => {
                if ($(v).attr('data-index') != i) {
                    isGameOver = false
                }
                const row = $(v).attr('row');
                const column = $(v).attr('column');
                const _index = $(v).attr('data-index');
                cache.push({
                    row,
                    column,
                    _index
                })
            })
            if (!isGameOver) {
                storageService.setDate({
                    puzzles: cache,
                    step
                })
            } else {
                storageService.setDate(null)
            }
            return isGameOver;
        }
    }

}
export default GameService;
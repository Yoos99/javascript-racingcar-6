import App from "./App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import {isvalidCarNames, isvalidAttempt} from './validate.js';
import { RaceController } from './RaceController.js';

export async function startGame() {
        const carNamesInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
        const carNames = carNamesInput.split(',');
        isvalidCarNames(carNames);
        
        

        const attemptInput = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
        const attempt = parseInt(attemptInput);
        
        isvalidAttempt(attempt);
        
        
        
        startRacing(carNames, attempt);
}

function startRacing(carNames, attempt) {
    const raceController = new RaceController(carNames);
    raceController.startRace(attempt);
}

startGame();
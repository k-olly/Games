import { useState } from 'react';
import rock from '../Images/rock.png';
import paper from '../Images/paper.png';
import scissors from '../Images/scissors.png';

export default function RockPaperScissors() {
    const [playerChoose, setPlayerChoose] = useState(null);
    const [computerChoose, setComputerChoose] = useState(null);

    function chooseRandomButton() {
        const randomNumber = Math.ceil(Math.random()*3);
        if (randomNumber === 1) {
            setComputerChoose('rock');
        } else if (randomNumber === 2) {
            setComputerChoose('paper');
        } else {
            setComputerChoose('scissors');
        }
    };

    function handleClick(e) {
        chooseRandomButton();
        //User can click both on the button or on the image
        const id = e.target.id? e.target.id : e.target.parentNode.id;
        setPlayerChoose(id);
    };

    /*function newHandleClick(choice) {
        return () => {
            chooseRandomButton();
            setPlayerChoose(choice);
        }
    }*/

    function chooseWinner() {
        if (playerChoose === 'rock' && computerChoose === 'scissors' || playerChoose === 'paper' && computerChoose === 'rock' || playerChoose === 'scissors' && computerChoose === 'paper') {
            return 'You won. Congratulations!';
        } else if ( playerChoose === computerChoose) {
            return 'Tie. Give it another try!';
        } else {
            return 'Computer won. Better luck next time.';
        }
    };

    function handleNewGame() {
        setComputerChoose(null);
        setPlayerChoose(null);
    };

    return (
        <>
            <span>Choose your next step:</span>
            <br></br>

            <button id='rock' onClick={handleClick}  /*onClick={newHandleClick('rock')}*/ >
                <img src={rock} alt='rock icon' width='150px' />
            </button>
            <button id='paper' onClick={handleClick} /*onClick={newHandleClick('paper')}*/>
                <img src={paper} alt='paper icon' width='150px' />
            </button>
            <button id='scissors' onClick={handleClick} /*onClick={newHandleClick('scissors')}*/>
                <img src={scissors} alt='scissors icon' width='150px' />
            </button>
            <br></br>

            <span>Computer chose: {computerChoose}</span>
            <br></br>
            <span>The Winner is: {chooseWinner()}</span>
            <br></br>
            
            <button id='new-game' onClick={handleNewGame} >New Game</button>
        </>
    )
};
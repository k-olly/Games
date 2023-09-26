import { useState } from 'react';
import style from './RPSGame.css';
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
        if (playerChoose === null) {
            return '';
        } else if (playerChoose === 'rock' && computerChoose === 'scissors' || playerChoose === 'paper' && computerChoose === 'rock' || playerChoose === 'scissors' && computerChoose === 'paper') {
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

    const winner = computerChoose ? (
        <>
            <span className='winner'>Computer chose: {computerChoose}</span>
            <span className='winner'>{chooseWinner()}</span>
        </>
    ) : '';
    
    return (
        <div className='rpscomponent'>
            <section id='rock-paper-scissors'>
                <h3>Rock-Paper-Scissors</h3>
                <h4>How to play the game?</h4>
                <p id='description'>Choose a shape from the buttons below. You will play against a computer. Rock crushes scissors, scissors cut paper, and paper covers rock. See who wins each round! If you want to play another round click on New Game.</p>
            </section>
            <span id='choose'>Choose your next step:</span>

            <div className='iconbuttons'>
                <button className='rpsbutton' id='rock' title='Rock' onClick={handleClick}  /*onClick={newHandleClick('rock')}*/ >
                    <img src={rock} alt='rock icon' width='150px' />
                </button>
                <button className='rpsbutton' id='paper' title='Paper' onClick={handleClick} /*onClick={newHandleClick('paper')}*/>
                    <img src={paper} alt='paper icon' width='150px' />
                </button>
                <button className='rpsbutton' id='scissors' title='Scissors' onClick={handleClick} /*onClick={newHandleClick('scissors')}*/>
                    <img src={scissors} alt='scissors icon' width='150px' />
                </button>
            </div>
            {winner}
            <button className='rpsbutton' id='new-game' onClick={handleNewGame} >New Game</button>
        </div>
    )
};
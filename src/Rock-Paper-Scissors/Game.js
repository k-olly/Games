import rock from '../Images/rock.png';
import paper from '../Images/paper.png';
import scissors from '../Images/scissors.png';

export default function RockPaperScissors() {
    return (
        <>
            <span>Choose your next step:</span>
            <br></br>

            <button id='rock'>
                <img src={rock} alt='rock icon' width='150px' />
            </button>
            <button id='paper'>
                <img src={paper} alt='paper icon' width='150px' />
            </button>
            <button id='scissors'>
                <img src={scissors} alt='scissors icon' width='150px' />
            </button>
            <br></br>

            <span>Computer chose:</span>
            <br></br>
            <span>The Winner is:</span>
            <br></br>
            
            <button id='new-game'>New Game</button>
        </>
    )
};
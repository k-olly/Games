import RockPaperScissors from "./Rock-Paper-Scissors/RPSGame";
import Board from "./Tic-Tac-Toe/TTTGame";
import style from './App.css';

export default function App() {
  return (
    <div>
      <header>
        <h1>2Games2You</h1>
      </header>
      <main>
        <h2>Welcome on my page, Stranger!</h2>
        <h3>Do you feel bored or just have a few minutes to play some retro games? Then you're at the best place!</h3>
        <p className='tryout' >Try out my nostalgic Rock-Paper-Scissors or Tic-Tac-Toe game below and have some fun. </p>
      </main>
      <RockPaperScissors/>
      <Board/>
    </div>
  );
}


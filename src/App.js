import RockPaperScissors from "./Rock-Paper-Scissors/RPSGame";

export default function App() {
  return (
    <>
      <header>
        <h1>Welcome on my Page!</h1>
      </header>
      <main>
        <h2>Do you feel bored or just have a few minutes to play some retro games? Then you're at the best place!</h2>
        <p>Try out my nostalgic Rock-Paper-Scissors or Tic-Tac-Toe game below and have some fun. </p>
      </main>
      <section id='rock-paper-scissors'>
        <h3>Rock-Paper-Scissors</h3>
        <h4>How to play the game?</h4>
        <p>Enter your name and choose a shape from the buttons below. You will play against a computer. Rock crushes scissors, scissors cut paper, and paper covers rock. See who wins each round! If you want to play another round click on New Game.</p>
      </section>
      <RockPaperScissors/>
    </>
  );
}


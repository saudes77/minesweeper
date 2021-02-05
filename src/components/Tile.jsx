import GameContext from "../contexts/GameContext";

const Tile = ({ row, column }) => {
  return (
    <GameContext.Consumer>
      {game => (
        <span className="inline-block border border-pink-900 rounded-md w-8 h-8">
          {game.isMine(row, column) ? "*" : "."}
        </span>
      )}
    </GameContext.Consumer>
  );
}

export default Tile;
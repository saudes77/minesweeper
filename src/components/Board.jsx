import Tile from "./Tile";

const createGrid = (rowCount, colCount) => {
  let tiles = []

  for (let rIndex = 1; rIndex <= rowCount; rIndex++) {
    for (let cIndex = 1; cIndex <= colCount; cIndex++) {
      tiles.push(<Tile key={`${rIndex}-${cIndex}`} row={rIndex} column={cIndex} />)
    }
  }

  return tiles
}

const Board = ({ rows, columns }) => {
  return (
    <div className={`border-2 border-indigo-900 p-2 rounded-lg grid grid-cols-${columns}`}>
      {createGrid(rows, columns)}
    </div>
  );
}

export default Board;
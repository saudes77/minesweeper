import Utils from "./Utils";

class Game {
  constructor({rows, columns, mines}) {
    this.rowCount = rows
    this.columnCount = columns
    this.mineCount = mines

    this.createBoard()
    this.placeMines()
  }

  createBoard() {
    let board = []

    for (let i = 0; i < this.rowCount; i++) {
      let row = []
      for (let j = 0; j < this.columnCount; j++) {
        row.push(0)
      }
      board.push(row)
    }

    this.board = board
  }

  isMine(rIndex, cIndex) {
    return this.board[rIndex][cIndex] === 1
  }

  placeMine(rIndex, cIndex) {
    this.board[rIndex][cIndex] = 1
  }

  placeMines() {
    let minesPlaced = 0

    while (minesPlaced < this.mineCount) {
      let rIndex = Utils.getRandomIntInRange(0, this.rowCount - 1)
      let cIndex = Utils.getRandomIntInRange(0, this.columnCount - 1)

      if (!this.isMine(rIndex, cIndex)) {
        this.placeMine(rIndex, cIndex)
        minesPlaced++
      }
    }
  }
}
export default Game;

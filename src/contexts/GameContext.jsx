import React from "react";
import Game from "../modules/Game";

const defaultGameSettings = {rows: 10, columns: 10, mines: 10};

const GameContext = React.createContext(new Game(defaultGameSettings));

export default GameContext
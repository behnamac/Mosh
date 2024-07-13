import { useState } from "react";

const Player = () => {
    const [game, setGame] = useState({ id: 1, player: { name: "Ben" } });
    
    const handlePlayer = () => {
     setGame({ ...game, player: { ...game.player, name: "jack" } });
    console.log(
      `the player ID is: ${game.id} and his Name is:${game.player.name}`
    );
  };

  return (
    <>
      <div>
        <button onClick={handlePlayer}>Click</button>
      </div>
    </>
  );
};

export default Player;

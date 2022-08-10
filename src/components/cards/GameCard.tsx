import Image from "next/Image";
import Link from "next/link";
import { Game } from "../../utils/types/game";

export interface IGameCard {
  game: Game;
}

const GameCard: React.FC<IGameCard> = ({ game }) => {
  return (
    <article className="wrapper min-h-[300px] overflow-hidden rounded-md bg-white">
      <div className="relative h-[40%] w-full">
        <Image src={game.thumb} alt={`${game.title} thumbnail`} layout="fill" />
      </div>
      <div className="p-3 text-zinc-900">
        <Link href="">
          <a className="text-lg font-semibold">{game.title}</a>
        </Link>
      </div>
    </article>
  );
};

export default GameCard;

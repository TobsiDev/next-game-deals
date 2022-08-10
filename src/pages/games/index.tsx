import GameCard from "../../components/cards/GameCard";
import GameSearchForm from "../../components/forms/GameSearchForm";
import PageLayout from "../../components/layouts/PageLayout";
import { Game } from "../../utils/types/game";
import { NextPageWithLayout } from "../../utils/types/page";

const Games: NextPageWithLayout<{ games: Game[] }> = ({ games }) => {
  return (
    <>
      <h1>Games</h1>
      <GameSearchForm />
      <div className="grid grid-cols-4">
        {games.map((game, index) => {
          return <GameCard key={index} game={game} />;
        })}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1`);
  const games = await res.json();

  return { props: { games } };
}

Games.getLayout = (page) => {
  return (
    <>
      <PageLayout>{page}</PageLayout>
    </>
  );
};

export default Games;

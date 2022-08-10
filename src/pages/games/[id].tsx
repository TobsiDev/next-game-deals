import PageLayout from "../../components/layouts/PageLayout";
import { NextPageWithLayout } from "../../utils/types/page";

const Game: NextPageWithLayout = () => {
  return <>Single game</>;
};

Game.getLayout = (page) => {
  return (
    <>
      <PageLayout>{page}</PageLayout>
    </>
  );
};

export default Game;

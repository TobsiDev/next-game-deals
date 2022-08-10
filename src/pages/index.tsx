import PageLayout from "../components/layouts/PageLayout";
import { NextPageWithLayout } from "../utils/types/page";

const Home: NextPageWithLayout = () => {
  return <>Content</>;
};

Home.getLayout = (page) => {
  return (
    <>
      <PageLayout>{page}</PageLayout>
    </>
  );
};

export default Home;

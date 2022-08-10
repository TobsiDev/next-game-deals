import { ReactNode } from "react";
import Footer from "../navigation/Footer";
import Header from "../navigation/Header";

export interface IPageLayout {
  children: ReactNode;
}

const PageLayout: React.FC<IPageLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;

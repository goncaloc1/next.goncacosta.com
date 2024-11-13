import Head from "next/head";
import { ReactNode } from "react";
import MainWithHorizontalScroll from "./main-with-horizontal-scroll/main-with-horizontal-scroll";

type LayoutProps = {
  children: ReactNode;
  title: string;
  metaDescription: string;
  horizontalScrollEnabled?: boolean;
};

const Layout = ({
  children,
  title,
  metaDescription,
  horizontalScrollEnabled,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      {horizontalScrollEnabled ? (
        <MainWithHorizontalScroll>{children}</MainWithHorizontalScroll>
      ) : (
        <main>{children}</main>
      )}
    </>
  );
};

export default Layout;

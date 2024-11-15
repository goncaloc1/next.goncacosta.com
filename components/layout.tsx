import Head from "next/head";
import { ReactNode, useMemo } from "react";
import MainWithHorizontalScroll from "./main-with-horizontal-scroll";
import NavigationMenu from "./navigation-menu";

type LayoutProps = {
  children: ReactNode;
  title: string;
  metaDescription: string;
  horizontalScrollEnabled?: boolean;
  slotNavigationMenu?: ReactNode;
};

const Layout = ({
  children,
  title,
  metaDescription,
  horizontalScrollEnabled,
  slotNavigationMenu = <NavigationMenu />,
}: LayoutProps) => {
  const childrenWrapper = useMemo(
    () => (
      <div className="wrapper">
        <div className="cell align-top">{slotNavigationMenu}</div>
        {children}
      </div>
    ),
    [children, slotNavigationMenu]
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      {horizontalScrollEnabled ? (
        <MainWithHorizontalScroll>{childrenWrapper}</MainWithHorizontalScroll>
      ) : (
        <main>{childrenWrapper}</main>
      )}
    </>
  );
};

export default Layout;

import Head from "next/head";
import { ReactNode } from "react";

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

      <main className={horizontalScrollEnabled ? "horizontal_scroll" : ""}>
        {children}
      </main>
    </>
  );
};

export default Layout;

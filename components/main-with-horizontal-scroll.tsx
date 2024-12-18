import { useWheel } from "../hooks/useWheel";

type MainWithHorizontalScrollProps = {
  children: React.ReactNode;
};

const MainWithHorizontalScroll = ({
  children,
}: MainWithHorizontalScrollProps) => {
  useWheel();

  return (
    <main className="horizontal_scroll">
      {children}
      <style jsx>{`
        main.horizontal_scroll {
          overflow-x: scroll;
        }

        ::-webkit-scrollbar {
          height: 8px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
          -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
          -webkit-border-radius: 10px;
          border-radius: 10px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          -webkit-border-radius: 10px;
          border-radius: 10px;
          background: #eee;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
          -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </main>
  );
};

export default MainWithHorizontalScroll;

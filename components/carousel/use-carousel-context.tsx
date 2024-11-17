import React, { createContext, ReactNode, useContext } from "react";

const CarouselContext = createContext<
  { defaultSlideClassName: string } | undefined
>(undefined);

const CarouselProvider = ({
  children,
  defaultSlideClassName,
}: {
  children: ReactNode;
  defaultSlideClassName: string;
}) => {
  return (
    <CarouselContext.Provider value={{ defaultSlideClassName }}>
      {children}
    </CarouselContext.Provider>
  );
};

const useCarouselContext = () => {
  const context = useContext(CarouselContext);
  if (context === undefined) {
    throw new Error(
      "useCarouselContext must be used within a CarouselProvider"
    );
  }
  return context;
};

export { CarouselProvider, useCarouselContext };

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { getRandomPhotoMetadata, PhotoMetadata } from "../lib/randomPhoto";

import Image from "next/image";

export type Photo = {
  metadata: PhotoMetadata;
  src: StaticImageData;
};

const StateContext = createContext<(() => Promise<Photo>) | undefined>(
  undefined
);

/**
 * PhotoProvider makes `getRandomPhoto` available. The function
 * caches the next random photo once its called making the main
 * entry image immediately available.
 */
export function PhotoProvider({ children }: { children: ReactNode }) {
  const [cachedPhoto, setCachedPhoto] = useState<Photo | null>(null);

  const refreshCache = useCallback(async (): Promise<Photo> => {
    const metadata = getRandomPhotoMetadata();

    const src = (
      await import(`/public/images/${metadata.path}${metadata.filename}`)
    ).default;

    setCachedPhoto({ metadata, src });

    return { metadata, src };
  }, []);

  /**
   * Gets cached photo - if it exists - and prepares next cached photo.
   */
  const getRandomPhoto = useCallback(async (): Promise<Photo> => {
    const photo = cachedPhoto ?? (await refreshCache());

    refreshCache();

    return photo;
  }, [cachedPhoto, refreshCache]);

  return (
    <>
      <StateContext.Provider value={getRandomPhoto}>
        {children}
      </StateContext.Provider>
      {cachedPhoto && (
        <div style={{ display: "none" }}>
          <Image
            alt="cache"
            src={cachedPhoto.src}
            priority={true}
            quality={100}
          />
        </div>
      )}
    </>
  );
}

export function usePhoto() {
  return useContext(StateContext);
}

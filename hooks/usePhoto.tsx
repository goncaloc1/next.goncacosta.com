import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { getRandomPhotoMetadata, PhotoMetadata } from "../lib/randomPhoto";

import Image from "next/image";

const StateContext = createContext<(() => PhotoMetadata | null) | undefined>(
  undefined
);

/**
 * PhotoProvider makes `getRandomPhoto` available. The function
 * caches the next random photo once its called making the main
 * entry image immediately available.
 */
export function PhotoProvider({ children }: { children: ReactNode }) {
  const [cachedPhoto, setCachedPhoto] = useState<PhotoMetadata | null>(null);

  const refreshCache = useCallback((): PhotoMetadata  => {
    const photoMetadata = getRandomPhotoMetadata();

    setCachedPhoto(photoMetadata);

    return photoMetadata;
  }, []);

  /**
   * Gets current cached photo - if it exists - and prepares future cached photo.
   */
  const getRandomPhoto = useCallback((): PhotoMetadata | null => {
    const photo = cachedPhoto;

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
            src={cachedPhoto.source}
            priority={true}
            quality={70}
          />
        </div>
      )}
    </>
  );
}

export function usePhoto() {
  return useContext(StateContext);
}

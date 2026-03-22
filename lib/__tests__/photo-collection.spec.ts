import { buildPhotosCollection } from "../photo-collection";
import type { PhotoMetadata } from "../photo-collection";

describe("buildPhotosCollection", () => {
  let collection: PhotoMetadata[];

  beforeAll(() => {
    collection = buildPhotosCollection();
  });

  describe("basic structure", () => {
    it("should return a non-empty array", () => {
      expect(collection.length).toBeGreaterThan(0);
    });

    it("each item should have required properties", () => {
      collection.forEach((photo) => {
        expect(photo).toHaveProperty("path");
        expect(photo).toHaveProperty("title");
        expect(photo).toHaveProperty("source");
        expect(typeof photo.path).toBe("string");
        expect(typeof photo.title).toBe("string");
        expect(photo.source).toBeDefined();
      });
    });
  });

  describe("reminiscencia collection", () => {
    it("reminiscencia photos should not have is35mm flag", () => {
      const reminiscenciaPhotos = collection.filter(
        (photo) => photo.path === "/reminiscencia",
      );
      reminiscenciaPhotos.forEach((photo) => {
        expect(photo.is35mm).toBeUndefined();
      });
    });
  });

  describe("alba collection", () => {
    it("alba photos should not have is35mm flag", () => {
      const albaPhotos = collection.filter((photo) => photo.path === "/alba");
      albaPhotos.forEach((photo) => {
        expect(photo.is35mm).toBeUndefined();
      });
    });
  });

  describe("when collection", () => {
    it("when photos should not have is35mm flag", () => {
      const whenPhotos = collection.filter((photo) => photo.path === "/when");
      whenPhotos.forEach((photo) => {
        expect(photo.is35mm).toBeUndefined();
      });
    });
  });

  describe("paperbag collection", () => {
    it("paperbag photos should have is35mm flag set to true", () => {
      const paperbagPhotos = collection.filter(
        (photo) => photo.path === "/paperbag",
      );
      paperbagPhotos.forEach((photo) => {
        expect(photo.is35mm).toBe(true);
      });
    });
  });

  describe("oulu collection", () => {
    it("oulu photos should have is35mm flag set to true", () => {
      const ouluPhotos = collection.filter((photo) => photo.path === "/oulu");
      ouluPhotos.forEach((photo) => {
        expect(photo.is35mm).toBe(true);
      });
    });
  });

  describe("photo sources", () => {
    it("should have unique source objects for each photo", () => {
      const sources = collection.map((photo) => photo.source.src);
      const uniqueSources = new Set(sources);
      expect(uniqueSources.size).toBe(collection.length);
    });

    it("each photo should have a source with src property", () => {
      collection.forEach((photo) => {
        expect(photo.source).toHaveProperty("src");
        expect(typeof photo.source.src).toBe("string");
      });
    });
  });

  describe("consistency", () => {
    it("should return the same collection on multiple calls", () => {
      const collection2 = buildPhotosCollection();
      expect(collection).toEqual(collection2);
    });

    it("should have valid paths", () => {
      const validPaths = [
        "/reminiscencia",
        "/alba",
        "/when",
        "/paperbag",
        "/oulu",
      ];
      collection.forEach((photo) => {
        expect(validPaths).toContain(photo.path);
      });
    });
  });
});

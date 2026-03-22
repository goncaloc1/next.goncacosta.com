/**
 * These import do not actually download the images, only the metadata.
 */
import reminiscencia_a from "../public/images/reminiscencia/a.jpg";
import reminiscencia_b from "../public/images/reminiscencia/b.jpg";
import reminiscencia_c from "../public/images/reminiscencia/c.jpg";
import reminiscencia_d from "../public/images/reminiscencia/d.jpg";
import reminiscencia_e from "../public/images/reminiscencia/e.jpg";
import reminiscencia_k from "../public/images/reminiscencia/k.jpg";
import reminiscencia_l from "../public/images/reminiscencia/l.jpg";
import reminiscencia_m from "../public/images/reminiscencia/m.jpg";
import reminiscencia_o from "../public/images/reminiscencia/o.jpg";
import reminiscencia_p from "../public/images/reminiscencia/p.jpg";
import reminiscencia_q from "../public/images/reminiscencia/q.jpg";
import reminiscencia_r from "../public/images/reminiscencia/r.jpg";
import reminiscencia_s from "../public/images/reminiscencia/s.jpg";
import reminiscencia_t from "../public/images/reminiscencia/t.jpg";
import reminiscencia_u from "../public/images/reminiscencia/u.jpg";
import alba_b from "../public/images/alba/b.jpg";
import alba_c from "../public/images/alba/c.jpg";
import alba_d from "../public/images/alba/d.jpg";
import alba_e from "../public/images/alba/e.jpg";
import alba_j from "../public/images/alba/j.jpg";
import alba_k from "../public/images/alba/k.jpg";
import alba_l from "../public/images/alba/l.jpg";
import alba_m from "../public/images/alba/m.jpg";
import alba_n from "../public/images/alba/n.jpg";
import alba_o from "../public/images/alba/o.jpg";
import alba_p from "../public/images/alba/p.jpg";
import alba_q from "../public/images/alba/q.jpg";
import alba_r from "../public/images/alba/r.jpg";
import alba_v from "../public/images/alba/v.jpg";
import alba_w from "../public/images/alba/w.jpg";
import when_a from "../public/images/when/a.jpg";
import when_b from "../public/images/when/b.jpg";
import when_c from "../public/images/when/c.jpg";
import when_d from "../public/images/when/d.jpg";
import when_e from "../public/images/when/e.jpg";
import when_f from "../public/images/when/f.jpg";
import when_i from "../public/images/when/i.jpg";
import when_k from "../public/images/when/k.jpg";
import when_l from "../public/images/when/l.jpg";
import when_n from "../public/images/when/n.jpg";
import when_o from "../public/images/when/o.jpg";
import when_z from "../public/images/when/z.jpg";
import paperbag_7 from "../public/images/paperbag/7.jpg";
import paperbag_6 from "../public/images/paperbag/6.jpg";
import paperbag_t from "../public/images/paperbag/high-res/t.jpg";
import paperbag_x from "../public/images/paperbag/high-res/x.jpg";
import oulu_2 from "../public/images/oulu/high-res/2.jpg";
import oulu_6 from "../public/images/oulu/high-res/6.jpg";
import oulu_12 from "../public/images/oulu/high-res/12.jpg";
import { StaticImageData } from "next/image";
import { random } from "./helpers";

export type PhotoMetadata = {
  path: string;
  title: string;
  source: StaticImageData;
  is35mm?: boolean;
};

interface BuildPhotosCollectionProps {
  sources: StaticImageData[];
  path: string;
  title: string;
  is35mm?: boolean;
}

/**
 * Helper function to create photo metadata for a collection
 */
const buildPhotosCollection = ({
  sources,
  path,
  title,
  is35mm = false,
}: BuildPhotosCollectionProps): PhotoMetadata[] => {
  return sources.map((source) => ({
    path,
    title,
    source,
    ...(is35mm && { is35mm: true }),
  }));
};

const photos: PhotoMetadata[] = [
  ...buildPhotosCollection({
    sources: [
      reminiscencia_a,
      reminiscencia_b,
      reminiscencia_c,
      reminiscencia_d,
      reminiscencia_e,
      reminiscencia_k,
      reminiscencia_l,
      reminiscencia_m,
      reminiscencia_o,
      reminiscencia_p,
      reminiscencia_q,
      reminiscencia_r,
      reminiscencia_s,
      reminiscencia_t,
      reminiscencia_u,
    ],
    path: "/reminiscencia",
    title: "reminiscencia",
  }),
  ...buildPhotosCollection({
    sources: [
      alba_b,
      alba_c,
      alba_d,
      alba_e,
      alba_j,
      alba_k,
      alba_l,
      alba_m,
      alba_n,
      alba_o,
      alba_p,
      alba_q,
      alba_r,
      alba_v,
      alba_w,
    ],
    path: "/alba",
    title: "alba",
  }),
  ...buildPhotosCollection({
    sources: [
      when_a,
      when_b,
      when_c,
      when_d,
      when_e,
      when_f,
      when_i,
      when_k,
      when_l,
      when_n,
      when_o,
      when_z,
    ],
    path: "/when",
    title: "when was the last time someone wrote you a love letter?",
  }),
  ...buildPhotosCollection({
    sources: [paperbag_7, paperbag_6, paperbag_t, paperbag_x],
    path: "/paperbag",
    title: "it's a paper bag to scream, it's a bag of affections",
    is35mm: true,
  }),
  ...buildPhotosCollection({
    sources: [oulu_2, oulu_6, oulu_12],
    path: "/oulu",
    title: "oulu",
    is35mm: true,
  }),
];

export const getRandomPhotoMetadata = (): PhotoMetadata => {
  const idx = random(0, photos.length - 1);
  return photos[idx];
};

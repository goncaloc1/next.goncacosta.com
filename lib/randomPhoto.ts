export type PhotoMetadata = {
  path: string;
  title: string;
  source: StaticImageData;
  proportion?: number;
};

/**
 * These import do not actually download the images, only the metadata.
 */
import reminiscencia_a from "/public/images/reminiscencia/a.jpg";
import reminiscencia_b from "/public/images/reminiscencia/b.jpg";
import reminiscencia_c from "/public/images/reminiscencia/c.jpg";
import reminiscencia_d from "/public/images/reminiscencia/d.jpg";
import reminiscencia_e from "/public/images/reminiscencia/e.jpg";
import reminiscencia_k from "/public/images/reminiscencia/k.jpg";
import reminiscencia_l from "/public/images/reminiscencia/l.jpg";
import reminiscencia_m from "/public/images/reminiscencia/m.jpg";
import reminiscencia_o from "/public/images/reminiscencia/o.jpg";
import reminiscencia_p from "/public/images/reminiscencia/p.jpg";
import reminiscencia_q from "/public/images/reminiscencia/q.jpg";
import reminiscencia_r from "/public/images/reminiscencia/r.jpg";
import reminiscencia_s from "/public/images/reminiscencia/s.jpg";
import reminiscencia_t from "/public/images/reminiscencia/t.jpg";
import reminiscencia_u from "/public/images/reminiscencia/u.jpg";
import alba_a from "/public/images/alba/a.jpg";
import alba_b from "/public/images/alba/b.jpg";
import alba_d from "/public/images/alba/d.jpg";
import alba_e from "/public/images/alba/e.jpg";
import alba_h from "/public/images/alba/h.jpg";
import alba_k from "/public/images/alba/k.jpg";
import alba_l from "/public/images/alba/l.jpg";
import alba_m from "/public/images/alba/m.jpg";
import alba_n from "/public/images/alba/n.jpg";
import alba_o from "/public/images/alba/o.jpg";
import alba_p from "/public/images/alba/p.jpg";
import alba_q from "/public/images/alba/q.jpg";
import alba_r from "/public/images/alba/r.jpg";
import alba_v from "/public/images/alba/v.jpg";
import alba_w from "/public/images/alba/w.jpg";
import when_a from "/public/images/when/a.jpg";
import when_b from "/public/images/when/b.jpg";
import when_c from "/public/images/when/c.jpg";
import when_d from "/public/images/when/d.jpg";
import when_e from "/public/images/when/e.jpg";
import when_f from "/public/images/when/f.jpg";
import when_i from "/public/images/when/i.jpg";
import when_k from "/public/images/when/k.jpg";
import when_l from "/public/images/when/l.jpg";
import when_n from "/public/images/when/n.jpg";
import when_o from "/public/images/when/o.jpg";
import when_z from "/public/images/when/z.jpg";
import paperbag_1 from "/public/images/paperbag/1.jpg";
import paperbag_5 from "/public/images/paperbag/5.jpg";
import paperbag_7 from "/public/images/paperbag/7.jpg";
import paperbag_6 from "/public/images/paperbag/6.jpg";
import paperbag_i from "/public/images/paperbag/i.jpg";
import oulu_q from "/public/images/oulu/q.jpg";
import oulu_99 from "/public/images/oulu/99.jpg";
import fado_proven0004 from "/public/images/fado/proven0004.jpg";
import fado_pro0018 from "/public/images/fado/pro0018.jpg";
import fado_prov0012 from "/public/images/fado/prov0012.jpg";
import fado_35_2 from "/public/images/fado/35(2).jpg";
import { StaticImageData } from "next/image";

const photos: PhotoMetadata[] = [
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_a },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_b },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_c },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_d },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_e },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_k },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_l },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_m },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_o },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_p },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_q },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_r },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_s },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_t },
  { path: "/reminiscencia", title: "reminiscencia", source: reminiscencia_u },
  { path: "/alba", title: "alba", source: alba_a },
  { path: "/alba", title: "alba", source: alba_b },
  { path: "/alba", title: "alba", source: alba_d },
  { path: "/alba", title: "alba", source: alba_e },
  { path: "/alba", title: "alba", source: alba_h },
  { path: "/alba", title: "alba", source: alba_k },
  { path: "/alba", title: "alba", source: alba_l },
  { path: "/alba", title: "alba", source: alba_m },
  { path: "/alba", title: "alba", source: alba_n },
  { path: "/alba", title: "alba", source: alba_o },
  { path: "/alba", title: "alba", source: alba_p },
  { path: "/alba", title: "alba", source: alba_q },
  { path: "/alba", title: "alba", source: alba_r },
  { path: "/alba", title: "alba", source: alba_v },
  { path: "/alba", title: "alba", source: alba_w },
  {
    path: "/when",
    title: "when was the last time someone wrote you a love letter?",
    source: when_a,
  },
  {
    path: "/when",
    title: "when was the last time someone wrote you a love letter?",
    source: when_b,
  },
  {
    path: "/when",
    title: "when was the last time someone wrote you a love letter?",
    source: when_c,
  },
  {
    path: "/when",
    title: "when was the last time someone wrote you a love letter?",
    source: when_d,
  },
  {
    path: "/when",
    title: "when was the last time someone wrote you a love letter?",
    source: when_e,
  },
  {
    path: "/when",
    title: "when was the last time someone wrote you a love letter?",
    source: when_f,
  },
  {
    path: "/when",
    title: "when was the last time someone wrote you a love letter?",
    source: when_i,
  },
  {
    path: "/when",
    title: "when was the last time someone wrote you a love letter?",
    source: when_k,
  },
  {
    path: "/when",
    title: "when was the last time someone wrote you a love letter?",
    source: when_l,
  },
  {
    path: "/when",
    title: "when was the last time someone wrote you a love letter?",
    source: when_n,
  },
  {
    path: "/when",
    title: "when was the last time someone wrote you a love letter?",
    source: when_o,
  },
  {
    path: "/when",
    title: "when was the last time someone wrote you a love letter?",
    source: when_z,
  },
  {
    path: "/paperbag",
    title: "it's a paper bag to scream, it's a bag of affections",
    source: paperbag_1,
  },
  {
    path: "/paperbag",
    title: "it's a paper bag to scream, it's a bag of affections",
    source: paperbag_5,
  },
  {
    path: "/paperbag",
    title: "it's a paper bag to scream, it's a bag of affections",
    source: paperbag_7,
  },
  {
    path: "/paperbag",
    title: "it's a paper bag to scream, it's a bag of affections",
    source: paperbag_6,
  },
  {
    path: "/paperbag",
    title: "it's a paper bag to scream, it's a bag of affections",
    source: paperbag_i,
  },
  { path: "/oulu", title: "oulu", source: oulu_q },
  { path: "/oulu", title: "oulu", source: oulu_99 },
  { path: "/fado", title: "fado", source: fado_proven0004 },
  { path: "/fado", title: "fado", source: fado_pro0018 },
  { path: "/fado", title: "fado", source: fado_prov0012 },
  { path: "/fado", title: "fado", source: fado_35_2 },
];

const randomFromInterval = (from: number, to: number) => {
  return Math.floor(Math.random() * (to - from + 1) + from);
};

const calcProportion = (height: number): number => {
  const targetHeight = 650;
  return height > targetHeight ? targetHeight / height : 1;
};

export const getRandomPhotoMetadata = (): PhotoMetadata => {
  const idx = randomFromInterval(0, photos.length - 1);
  const photo = photos[idx];

  photo.proportion = calcProportion(photo.source.height);

  return photo;
};

import { useEffect, useMemo, useState } from "react";

const prefix = "/public/images/";

export type PhotoMetadata = {
  path: string;
  filename: string;
  title: string;
};

const photos = [
  { path: "reminiscencia/", filename: "a.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "b.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "c.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "d.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "e.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "k.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "l.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "m.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "o.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "p.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "q.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "r.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "s.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "t.jpg", title: "reminiscencia" },
  { path: "reminiscencia/", filename: "u.jpg", title: "reminiscencia" },
  { path: "alba/", filename: "a.jpg", title: "alba" },
  { path: "alba/", filename: "b.jpg", title: "alba" },
  { path: "alba/", filename: "d.jpg", title: "alba" },
  { path: "alba/", filename: "e.jpg", title: "alba" },
  { path: "alba/", filename: "h.jpg", title: "alba" },
  { path: "alba/", filename: "k.jpg", title: "alba" },
  { path: "alba/", filename: "l.jpg", title: "alba" },
  { path: "alba/", filename: "m.jpg", title: "alba" },
  { path: "alba/", filename: "n.jpg", title: "alba" },
  { path: "alba/", filename: "o.jpg", title: "alba" },
  { path: "alba/", filename: "p.jpg", title: "alba" },
  { path: "alba/", filename: "q.jpg", title: "alba" },
  { path: "alba/", filename: "r.jpg", title: "alba" },
  { path: "alba/", filename: "v.jpg", title: "alba" },
  { path: "alba/", filename: "w.jpg", title: "alba" },
  {
    path: "when/",
    filename: "a.jpg",
    title: "when was the last time someone wrote you a love letter?",
  },
  {
    path: "when/",
    filename: "b.jpg",
    title: "when was the last time someone wrote you a love letter?",
  },
  {
    path: "when/",
    filename: "c.jpg",
    title: "when was the last time someone wrote you a love letter?",
  },
  {
    path: "when/",
    filename: "d.jpg",
    title: "when was the last time someone wrote you a love letter?",
  },
  {
    path: "when/",
    filename: "e.jpg",
    title: "when was the last time someone wrote you a love letter?",
  },
  {
    path: "when/",
    filename: "f.jpg",
    title: "when was the last time someone wrote you a love letter?",
  },
  {
    path: "when/",
    filename: "i.jpg",
    title: "when was the last time someone wrote you a love letter?",
  },
  {
    path: "when/",
    filename: "k.jpg",
    title: "when was the last time someone wrote you a love letter?",
  },
  {
    path: "when/",
    filename: "l.jpg",
    title: "when was the last time someone wrote you a love letter?",
  },
  {
    path: "when/",
    filename: "n.jpg",
    title: "when was the last time someone wrote you a love letter?",
  },
  {
    path: "when/",
    filename: "o.jpg",
    title: "when was the last time someone wrote you a love letter?",
  },
  {
    path: "when/",
    filename: "z.jpg",
    title: "when was the last time someone wrote you a love letter?",
  },
  {
    path: "paperbag/",
    filename: "1.jpg",
    title: "it's a paper bag to scream, it's a bag of affections",
  },
  {
    path: "paperbag/",
    filename: "5.jpg",
    title: "it's a paper bag to scream, it's a bag of affections",
  },
  {
    path: "paperbag/",
    filename: "7.jpg",
    title: "it's a paper bag to scream, it's a bag of affections",
  },
  {
    path: "paperbag/",
    filename: "6.jpg",
    title: "it's a paper bag to scream, it's a bag of affections",
  },
  {
    path: "paperbag/",
    filename: "i.jpg",
    title: "it's a paper bag to scream, it's a bag of affections",
  },
  { path: "oulu/", filename: "q.jpg", title: "oulu" },
  { path: "oulu/", filename: "99.jpg", title: "oulu" },
  { path: "fado/", filename: "proven0004.jpg", title: "fado" },
  { path: "fado/", filename: "pro0018.jpg", title: "fado" },
  { path: "fado/", filename: "prov0012.jpg", title: "fado" },
  { path: "fado/", filename: "35(2).jpg", title: "fado" },
];

const randomFromInterval = (from: number, to: number) => {
  return Math.floor(Math.random() * (to - from + 1) + from);
};

export const getRandomPhotoMetadata = (): PhotoMetadata => {
  const idx = randomFromInterval(0, photos.length - 1);
  return photos[idx];
};

// export const useRandomPhoto = () => {
//   const [photo, setPhoto] = useState(getRandomPhoto());

//   const refresh = useMemo(() => {
//     const newPhoto = getRandomPhoto();
//     setPhoto(newPhoto);
//   }, []);

//   return { photo, refresh };
// };

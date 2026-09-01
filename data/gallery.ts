// Homepage photo carousel.
//
// The order here is deliberately shuffled rather than following the files'
// numbering, and it is *hardcoded* rather than randomised at runtime: the
// carousel renders on the server and hydrates on the client, so a fresh shuffle
// on each render would produce two different orders and a hydration mismatch.
// To reshuffle, reorder this array by hand.
//
// Files are landscape and the slots are square, so `object-cover` trims the
// sides — every photo here was checked to survive a centre crop.

export interface GalleryPhoto {
  src: string;
  alt: string;
  /**
   * CSS `object-position`, for photos whose subject isn't centred in the frame.
   * Only the overflow can pan, so how far a given percentage moves the subject
   * depends on the file's aspect ratio — a 4:3 photo in a square slot overflows
   * 33% of the box, a 16:9 one overflows 78%. Lower values push the subject
   * right, higher values push it left. Omit for a plain centre crop.
   */
  position?: string;
  /**
   * Extra magnification past `object-cover`, e.g. 1.15 for 15% closer. Applied
   * as a transform inside a clipping wrapper, so it crops in rather than
   * overflowing the slot. Omit for no extra zoom.
   */
  zoom?: number;
}

const DIR = "/images/gallery photos";

/** Per-file zoom past `object-cover`; everything else sits at cover scale. */
const ZOOM: Record<string, number> = {
  "gallery photo 5.JPG": 1.15,
};

/** Per-file object-position overrides; everything else centre-crops. */
const POSITION: Record<string, string> = {
  // subject sits left of centre — nudge it right
  "gallery photo 5.JPG": "20% center",
  // subject sits right of centre — nudge it left
  "gallery photo 10.JPEG": "69% center",
};

export const galleryPhotos: GalleryPhoto[] = [
  "gallery photo 8.JPG",
  "gallery photo 2.webp",
  "Gallery Photo 11.jpg",
  "gallery photo 3.webp",
  "gallery photo 7.JPG",
  "gallery photo 1.webp",
  "gallery photo 6.JPG",
  "Gallery Photo 12.jpg",
  "gallery photo 9.JPG",
  "gallery photo 5.JPG",
  "gallery photo 10.JPEG",
  "gallery photo 4.JPG",
].map((file) => ({
  src: `${DIR}/${file}`,
  alt: "UCLA Delta Sigma Pi brothers at a chapter event",
  position: POSITION[file],
  zoom: ZOOM[file],
}));

// "Follow our journey on Instagram" grid on the homepage.
//
// Unlike the gallery carousel, order here is meaningful: these render in the
// chapter's supplied file-number order, left to right and top to bottom.
//
// Filenames are the chapter's originals, verbatim — note the numbering runs
// 0..7 with two of them written as "(4.0)" and "(5.0)". Keep them as-is so the
// files can be matched back to their source posts.

export interface InstagramPost {
  src: string;
  alt: string;
}

const DIR = "/images/Instagram photos";

export const instagramPosts: InstagramPost[] = [
  "Instagram Image (0).jpg",
  "Instagram Image (1).jpg",
  "Instagram Image (2).jpg",
  "Instagram Image (3).jpg",
  "Instagram Image (4.0).jpg",
  "Instagram Image (5.0).jpg",
  "Instagram Image (6).jpg",
  "Instagram Image (7).jpg",
].map((file, i) => ({
  src: `${DIR}/${file}`,
  alt: `UCLA Delta Sigma Pi Instagram post ${i + 1}`,
}));

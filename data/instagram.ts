// "Follow our journey on Instagram" grid on the homepage.
//
// Unlike the gallery carousel, order here is meaningful: newest post first,
// left to right and top to bottom, mirroring the Instagram feed. The grid shows
// 8 posts — when adding new ones, prepend them and drop the oldest off the end.
//
// Filenames are the chapter's originals, verbatim — note the older numbering
// has two of them written as "(4.0)" and "(5.0)". Keep them as-is so the files
// can be matched back to their source posts.

export interface InstagramPost {
  src: string;
  alt: string;
}

const DIR = "/images/Instagram photos";

export const instagramPosts: InstagramPost[] = [
  "jeffrey offer.jpg",
  "kayla offer.jpg",
  "Instagram Image (0).jpg",
  "Instagram Image (1).jpg",
  "Instagram Image (2).jpg",
  "Instagram Image (3).jpg",
  "Instagram Image (4.0).jpg",
  "Instagram Image (5.0).jpg",
].map((file, i) => ({
  src: `${DIR}/${file}`,
  alt: `UCLA Delta Sigma Pi Instagram post ${i + 1}`,
}));

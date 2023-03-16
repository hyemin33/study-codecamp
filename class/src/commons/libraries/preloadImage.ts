export const PRELOAD_IMAGES: HTMLImageElement[] = [
  "https://cdn.aitimes.com/news/photo/202204/143854_149285_5324.jpg",
];
export const preloadImage = (images: string[]) => {
  PRELOAD_IMAGES.forEach((el) => {
    const img = new Image();
    img.src = el;
    img.onload = () => PRELOADED_IMAGES.push(img);
  });
};

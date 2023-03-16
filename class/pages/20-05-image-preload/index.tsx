import { useRouter } from "next/router";
import { useEffect } from "react";
import { preloadImage } from "../../src/commons/libraries/preloadImage";

const PRELOAD_IMAGES = [
  "https://cdn.aitimes.com/news/photo/202204/143854_149285_5324.jpg",
];

export default function ImagePreloadPage() {
  const router = useRouter();

  useEffect(() => {
    preloadImage(PRELOAD_IMAGES);
  }, []);

  const onClickMove = () => {
    void router.push("/20-06-image-preload-moved");
  };

  return <button onClick={onClickMove}>페이지 이동하기</button>;
}

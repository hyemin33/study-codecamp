import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  // 다른페이지에서 버튼으로 map 페이지 이동할때 button 태그가 아닌 a태그를 사용해서 새로운 데이터 받아서 지도를 보여줘야 오류가 안난다.

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=beb802be8b0ae7236c8b37ed31502b2f";
    document.head.appendChild(script);

    script.onload = () => {
      // spa에서는 페이지 이동이 지도 불러오는것보다 빠르기 때문에 script가 다 로드된 후 작동하도록 설정함
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=beb802be8b0ae7236c8b37ed31502b2f"
        ></script>
      </Head> */}
      <div
        id="map"
        style={{
          width: 500,
          height: 400,
        }}
      ></div>
    </>
  );
}

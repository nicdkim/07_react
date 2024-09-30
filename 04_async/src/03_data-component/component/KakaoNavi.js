import React, { useState } from "react";

const KakaoNavi = () => {
  const [startAddress, setStartAddress] = useState(""); 
  const [endAddress, setEndAddress] = useState(""); 
  const [startCoords, setStartCoords] = useState({ x: "", y: "" });
  const [endCoords, setEndCoords] = useState({ x: "", y: "" });

  const geocodeAddress = (address, callback) => {

    if (window.kakao && window.kakao.maps) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      geocoder.addressSearch(address, (result, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = {
            x: result[0].x,
            y: result[0].y 
          };
          callback(coords);
        } else {
          alert("주소를 찾을 수 없습니다.");
        }
      });
    } else {
      alert("카카오 지도 API가 로드되지 않았습니다.");
    }
  };

  const navigate = () => {
    const appKey = "YOUR_KAKAO_APP_KEY";
    if (!startAddress || !endAddress) {
      alert("출발지와 도착지 주소를 입력해 주세요.");
      return;
    }

    geocodeAddress(startAddress, (startCoords) => {
      setStartCoords(startCoords);
      
      geocodeAddress(endAddress, (endCoords) => {
        setEndCoords(endCoords);

        const url = `https://map.kakao.com/link/navi?appkey=${appKey}&sx=${startCoords.x}&sy=${startCoords.y}&sname=${encodeURIComponent(
          startAddress
        )}&ex=${endCoords.x}&ey=${endCoords.y}&ename=${encodeURIComponent(endAddress)}`;

        window.location.href = url;
      });
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>카카오 네비</h1>

      <div>
        <h3>출발지</h3>
        <input
          type="text"
          placeholder="출발지"
          value={startAddress}
          onChange={(e) => setStartAddress(e.target.value)}
        />
      </div>

      <div>
        <h3>도착지</h3>
        <input
          type="text"
          placeholder="도착지"
          value={endAddress}
          onChange={(e) => setEndAddress(e.target.value)}
        />
      </div>

      <button onClick={navigate}>카카오 길찾기</button>
    </div>
  );
};

export default KakaoNavi;
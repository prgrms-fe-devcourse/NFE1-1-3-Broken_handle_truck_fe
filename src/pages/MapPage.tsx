import { useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import Toggle from "../components/Toggle";
import Search from "../components/map/Search";
import MyLocation from "../components/map/MyLocation";

export default function MapPage() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggleHandler = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <>
      <Map
        center={{ lat: 37.5563, lng: 126.99581 }}
        className="w-full h-full relative"
        level={4}
      >
        <Search />
        <div className="absolute bottom-24 right-3 z-10">
          <Toggle
            isOn={isOn}
            onClick={toggleHandler}
            text={{ on: "영업중", off: "영업 종료" }}
          />
        </div>
        <MyLocation />
      </Map>
    </>
  );
}

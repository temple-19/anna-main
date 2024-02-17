import { useMemo } from 'react';

const TripLowerContainer = ({
  locationDescription,
  locationSubtitle,
  priceRange,
  propPadding,
  propBorderRadius,
  propBackgroundImage,
  frameDivWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      width: frameDivWidth,
    };
  }, [propPadding, frameDivWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundImage: propBackgroundImage,
    };
  }, [propBorderRadius, propBackgroundImage]);

  return (
    <div
      className="self-stretch w-[357.2px] flex flex-row items-end justify-between py-5 px-0 box-border text-left text-13xl text-white font-caption"
      style={frameDivStyle}
    >
      <div
        className="w-[357.2px] rounded-t-232xl-9 rounded-b-[15.98px] h-[426.5px] flex flex-col items-start justify-end py-[37px] px-2.5 box-border gap-[10px] bg-[url('/public/frame-34@3x.png')] bg-cover bg-no-repeat bg-[top]"
        style={frameDiv1Style}
      >
        <div className="self-stretch relative leading-[150%]">
          <p className="m-0 pl-4 font-medium">{locationDescription}</p>
          <p className="m-0 pl-4 text-7xl text-gray-400">
            <b>{locationSubtitle}</b>
          </p>
        </div>
        <div className="relative pl-4 text-3xl">
          <span className=" leading-[170%]">{priceRange}</span>
          <span className="text-xs leading-[120%]">/Night</span>
        </div>
      </div>
    </div>
  );
};

export default TripLowerContainer;

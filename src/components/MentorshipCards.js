import { useMemo } from "react";

const MentorshipCards = ({
  imageDimensions,
  dimensionText,
  answerMedia,
  businessMentorText,
  propBorderRadius,
  propFlexDirection,
  propFlex,
  propWidth,
  propOverflow,
}) => {
  const textMessageStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const viewStyle = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  const frameIconStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const textMessage1Style = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div
      className="self-stretch rounded-25xl flex flex-row flex-wrap items-center justify-start py-[30px] px-0 gap-[60px_100px] text-left text-lgi-5 text-black font-caption"
      style={textMessageStyle}
    >
      <div
        className="flex-1 rounded-[33.41px] overflow-hidden flex flex-row items-center justify-center min-w-[320px] max-w-[540px]"
        style={viewStyle}
      >
        <img
          className="flex-1 relative max-w-[413px] overflow-hidden h-[588.6px] object-cover"
          alt="textImg"
          loading="lazy"
          src={imageDimensions}
          style={frameIconStyle}
        />
      </div>
      <div
        className="flex-1 flex flex-col items-start justify-center py-0 pr-[50px] pl-[45px] box-border gap-[30px] min-w-[320px]"
        style={textMessage1Style}
      >
        <div className="rounded-[5.93px] bg-dimgray flex flex-row items-center justify-center py-0 px-[12.704999923706055px] gap-[10.16px]">
          <img
            className="w-[13.6px] relative h-[11.8px] object-cover"
            alt="textIcon"
            loading="eager"
            src={dimensionText}
          />
          <div className="relative leading-[170%]">{answerMedia}</div>
        </div>
        <b className="self-stretch relative text-27xl-6 leading-[120%] text-gray-200">
          {businessMentorText}
        </b>
      </div>
    </div>
  );
};

export default MentorshipCards;

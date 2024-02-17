import { useMemo } from 'react';

const HeroContainer = ({ getInTouchFill }) => {
  const getInTouchStyle = useMemo(() => {
    return {
      fill: getInTouchFill,
    };
  }, [getInTouchFill]);

  const onFrameButtonClick = () => {
    const anchor = document.querySelector("[data-scroll-to='trip']");
    if (anchor) {
      anchor.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  };

  const onFrameButton1Click = () => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  };

  return (
    <section
      className="w-full flex flex-row flex-wrap items-center justify-center max-w-[1280px] text-left text-50xl text-black font-caption"
      id="hero"
      data-scroll-to="hero"
    >
      <div className="flex-1 flex flex-col items-start justify-center gap-[30px] min-w-[350px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[140%] font-black font-inherit z-[3]">
          <span>{`Welcome to `}</span>
          <span className="text-orange-100">ANNA</span>
        </h1>
        <h4 className="m-0 self-stretch relative text-16xl leading-[140%] font-medium font-inherit text-extra-stuff-70-blak z-[2]">
          One-Stop Shop for All Things Africa
        </h4>
        <p className="m-0 self-stretch relative text-4xl leading-[150%] text-gray-300 z-[1]">
          Get top-notch accommodations, connect with talented minds in your
          field, and embrace mentorship, connection, and even profitability.
        </p>
        <div className="flex flex-row flex-wrap items-start justify-start gap-[27px] z-[0]">
          <button className="cursor-pointer border-none py-5 px-[30px]  bg-buttons-primary rounded-39xl flex flex-row items-center justify-center text-lg leading-[150%] hover:border-[3px]  font-caption hover:text-primary-greeen hover:bg-white  text-warm-white transition-transform transform hover:scale-105">
            See more
          </button>
          <button
            className="cursor-pointer py-5 px-[30px] bg-[transparent] w-[164px] rounded-39xl box-border flex flex-row items-center justify-center border-[3px] border-solid border-buttons-primary hover:bg-buttons-primary md:hover:bg-buttons-primary text-gray-200 hover:text-oldlace text-lg transition-transform transform hover:scale-105"
            onClick={onFrameButton1Click}
          >
            Get in touch
          </button>
        </div>
      </div>
      <div className="flex-1 h-[615.4px] flex flex-col items-end justify-center gap-[30px] min-w-[350px]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt="heroImg"
          loading="lazy"
          src="/Hero_img@2x.png"
        />
        <div className="self-stretch relative rounded-[50%] [background:linear-gradient(-90deg,_rgba(6,_10,_5,_0.4),_rgba(6,_10,_5,_0))] [filter:blur(39.4px)] h-[31.4px]" />
      </div>
    </section>
  );
};

export default HeroContainer;

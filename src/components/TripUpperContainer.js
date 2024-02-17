const TripUpperContainer = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-[15px] px-0 pb-0 text-left text-13xl-9 text-white font-caption">
      <div className="w-[357.2px] rounded-t-[487.82px] rounded-b-[15.98px] h-[426.5px] flex flex-col items-start justify-end py-[37px] px-2.5 box-border gap-[10px] bg-[url('/public/frame-33@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="self-stretch relative leading-[150%]">
          <p className="m-0 pl-4 font-medium">Accra Annex</p>
          <p className="m-0 pl-4 text-7xl text-gray-400">
            <b>Accra, Nigeria</b>
          </p>
        </div>
        <div className="pl-4 relative text-3xl">
          <span className="leading-[170%]">$40</span>
          <span className="text-xs leading-[120%]">/Night</span>
        </div>
      </div>
    </div>
  );
};

export default TripUpperContainer;

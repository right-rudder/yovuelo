import CountUp from "react-countup";

const Counter = ({ value, title }) => {
  return (
    <div>
      <div className="bg-dark-blue flex flex-col py-10 group">
        <div className="border-r border-white/20 px-10 flex flex-col items-center gap-1 group-last:border-0">
          <span className="text-7xl font-medium">
            <span className="sr-only">{value}</span>
            <CountUp
              end={value}
              enableScrollSpy
              scrollSpyDelay={100}
              scrollSpyOnce
            />
            <span className="text-main-blue">+</span>
          </span>
          <h2 className="text-main-black/80 text-lg text-center whitespace-nowrap">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Counter;

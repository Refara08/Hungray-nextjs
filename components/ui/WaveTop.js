import WavesDown from "../home/waves-down";

const WaveTop = ({ children }) => {
  return (
    <>
      <div className="rotate-180">
        <WavesDown />
      </div>
      {children}
    </>
  );
};

export default WaveTop;

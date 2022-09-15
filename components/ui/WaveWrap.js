import WavesDown from "../home/waves-down";

const WaveWrap = ({ children }) => {
  return (
    <>
      <div className="rotate-180">
        <WavesDown />
      </div>
      {children}
      <WavesDown />
    </>
  );
};

export default WaveWrap;

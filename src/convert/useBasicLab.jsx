import ConvLabel from "./ConvLabel.jsx";
const useBasicLab = ({ adjNou }) => {
  const label = <ConvLabel adjNou={adjNou} />;
  return { label };
};

export default useBasicLab;

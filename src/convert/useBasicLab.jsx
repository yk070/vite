import ConvLabel from "./ConvLabel.jsx";
const useBasicLab = ({ adjKey }) => {
  const label = <ConvLabel adjKey={adjKey} />;
  return { label };
};

export default useBasicLab;

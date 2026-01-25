import ConvLabel from "./ConvLabel.jsx";
const useBasicLab = ({ modKey }) => {
  const label = <ConvLabel modKey={modKey} />;
  return { label };
};

export default useBasicLab;

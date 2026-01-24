import convLabel from "./convLabel.jsx";
const useBasicLab = ({ modKey }) => {
  const label = convLabel(modKey);
  return { label };
};

export default useBasicLab;

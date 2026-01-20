import AssignConvert from "./AssignConvert.jsx";
const useBasicLab = ({ modKey }) => {
  const label = AssignConvert(modKey);
  return { label };
};

export default useBasicLab;

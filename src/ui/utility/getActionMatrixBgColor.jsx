const getacMatrixBgColor = ({ isDisabled, isAssigned, isSpaceHold }) => {
  if (isDisabled) return "#555555";
  if (isAssigned) return "#333333";
  if (isSpaceHold) return "#999999";
  return "transparent";
};

export default getacMatrixBgColor;

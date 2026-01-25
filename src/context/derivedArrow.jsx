import convPosition from "../convert/convPosition.jsx";
import nouLabelObj from "../obj/nouLabelObj.js";
import ConvLabel from "../convert/ConvLabel.jsx";

export const derivedArrow = (base, main) => {
  const hdAdjNouTgLabel = <ConvLabel adjNou={base.hdAdjNouTg} />;

  const [hdAdj, hdNou] = base.hdAdjNouTg?.split("*") ?? [];
  const { x: tailX, y: tailY } = convPosition(hdNou);
  const remoteHdAdjNou = base.acTgObjs?.find(
    (o) => o.ac === base.hdAdjNouTg,
  )?.tg;
  const isRemoteExist = !!remoteHdAdjNou;
  const [remoteHdAdj, remoteHdNou] = remoteHdAdjNou?.split("*") ?? [];
  const remoteHdNouLabel = nouLabelObj[remoteHdNou];

  const tgCapsLength = main.tgCaps.length;
  const onsiteNumber = main.tgCaps.indexOf(hdAdj);
  const remoteNumber = main.tgCaps.indexOf(remoteHdAdj);
  const currentTgCapsLength = main.tgCaps.indexOf(base.currentAdjTg);
  const isRemoteSame = hdAdj === remoteHdAdj;

  const getHeadPos = () => {
    if (isRemoteSame) {
      return convPosition(remoteHdNou);
    }
    return {
      x: ((remoteNumber + 0.5) * 100) / tgCapsLength,
      y: 108,
    };
  };

  const { x: headX, y: headY } = getHeadPos();

  return {
    headX,
    headY,
    onsiteNumber,
    remoteNumber,
    currentTgCapsLength,
    tgCapsLength,
    isRemoteSame,
    isRemoteExist,
    remoteHdAdj,
    remoteHdNou,
    remoteHdNouLabel,
    remoteHdAdjNou,
    hdAdj,
    hdNou,
    hdAdjNouTgLabel,
    tailX,
    tailY,
  };
};

export default derivedArrow;

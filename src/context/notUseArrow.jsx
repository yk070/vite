import convPosition from "../convert/convPosition.jsx";
import nouLabelObj from "../obj/nouLabelObj.js";
import ConvLabel from "../convert/ConvLabel.jsx";

export const notUseArrow = (ctx) => {
  const hdAdjNouTgLabel = <ConvLabel adjNou={ctx.hdAdjNouTg} />;

  const [hdAdj, hdNou] = ctx.hdAdjNouTg?.split("*") ?? [];
  const { x: tailX, y: tailY } = convPosition(hdNou);
  const remoteHdAdjNou = ctx.preferences?.find(
    (o) => o.ac === ctx.hdAdjNouTg,
  )?.tg;
  const isRemoteExist = !!remoteHdAdjNou;
  const [remoteHdAdj, remoteHdNou] = remoteHdAdjNou?.split("*") ?? [];
  const remoteHdNouLabel = nouLabelObj[remoteHdNou];

  const tgCapsLength = ctx.tgCaps.length;
  const onsiteNumber = ctx.tgCaps.indexOf(hdAdj);
  const remoteNumber = ctx.tgCaps.indexOf(remoteHdAdj);
  const currTgCapsLength = ctx.tgCaps.indexOf(ctx.currCapTg);
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
    currTgCapsLength,
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

export default notUseArrow;

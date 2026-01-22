import useCtx from "../context/useCtx.jsx";
import look from "../style/look.jsx";

const Download = () => {
  const ctx = useCtx();
  const handleDownload = () => {
    const ahkContent = ctx.script;
    const blob = new Blob([ahkContent], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "keymap.ahk";
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div style={look.download1} onClick={handleDownload}>
      {"設定をダウンロード"}
    </div>
  );
};

export default Download;

import useCtx from "../context/useCtx.jsx";

const Header = () => {
  // ✅ ここはOK
  const ctx = useCtx();

  const handleDownload = () => {
    // ctx はもう取得済みなので普通に使える
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

  return <button onClick={handleDownload}>AHKダウンロード</button>;
};

export default Header;

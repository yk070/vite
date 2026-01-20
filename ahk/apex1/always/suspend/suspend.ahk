global isSuspended := false

if (A_ComputerName = "PRO7") {
    SetTimer(ShowMousePos, 50)
}
ShowMousePos() {
    global isSuspended
    ; 変数を事前に
    ; 変数初期化
    ; 変数初期化
    x := 0
    y := 0
    winX := 0
    winY := 0
    W := 0
    H := 0
    positionX := 0
    positionY := 0
    isSuspended := false

    ; マウス座標取得
    MouseGetPos(&x, &y)

    ; アクティブウィンドウのハンドル取得
    hwnd := WinExist("A")

    ; ウィンドウ位置取得
    if hwnd {
        WinGetPos(&winX, &winY, &W, &H, hwnd)
        positionX := x + winX
        positionY := y + winY
    } else {
        ; ToolTip("アクティブウィンドウが見つかりません")
        ; positionX/Y は 0 のまま
    }

    ; positionX/Y を使う処理
    if (positionY < 10) {
        if (!isSuspended) {
            ; ToolTip("左上隅に到達")
            Suspend(true)
            isSuspended := true
        }
    } else {
        Suspend(false)
        isSuspended := false
    }

}

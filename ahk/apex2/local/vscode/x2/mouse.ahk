XButton2 & LButton:: {
    Send("^{LButton}") ;go
}
XButton2 & RButton:: {
    Send("+!{q}") ;close other tabs
    Sleep(10)
    Send("+!{f}") ;エクスプローラーを折り畳む
    Sleep(10)
    Send("+!{f}") ;エクスプローラーを折り畳む
    Sleep(10)
    Send("+!{4}") ;現在のファイルを表示する
    Sleep(10)
    Send("+!{3}") ;お気に入りを折り畳む
}
XButton2 & WheelUp:: {
    Send("+!{;}")
}
XButton2 & WheelDown:: {
    Send("+!{:}")
}
XButton2 & XButton1:: {
}

; Send("+!{u}") ;close all tabs

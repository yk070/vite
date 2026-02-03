XButton2 & LButton:: {
    send("^{LButton}") ;go
}
XButton2 & RButton:: {
    send("+!{q}") ;close other tabs
    sleep(10)
    send("+!{f}") ;エクスプローラーを折り畳む
    sleep(10)
    send("+!{f}") ;エクスプローラーを折り畳む
    sleep(10)
    send("+!{4}") ;現在のファイルを表示する
    sleep(10)
    send("+!{3}") ;お気に入りを折り畳む
}
XButton2 & WheelUp:: {
    send("+!{;}")
}
XButton2 & WheelDown:: {
    send("+!{:}")
}
XButton2 & XButton1:: {
    send("+!{p}") ;エクスプローラーにフォーカス
    sleep(10)
    send("+!{f}") ;エクスプローラーを折り畳む
    sleep(10)
    send("+!{f}") ;エクスプローラーを折り畳む
    sleep(10)
    send("+!{3}") ;お気に入りを折り畳む
}

; send("+!{u}") ;close all tabs

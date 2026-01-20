edge_bookmark(No) {
    Send("^t")       ; 新しいタブ
    Sleep(100)
    Send("{F6}")     ; アドレスバーへ
    Sleep(100)
    loop No {
        Send("{Right}")  ; 次のブックマークへ
        Sleep(10)
    }
    Send("{Enter}")   ; 開く
    Sleep(10)
}

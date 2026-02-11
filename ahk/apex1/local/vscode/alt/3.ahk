!sc3A:: {
    send("+!{w}") ;右のタブを閉じる
}
!a:: {
    send("^{1}") ;editor focus
    Sleep(100)
    send("{esc}")
    Sleep(100)
    send("+!{r}") ;フォルダ内検索
    Sleep(100)
    Send("{Delete}")
    Sleep(100)
    send("^{1}") ;editor focus
    Sleep(100)
}
!s:: {
}

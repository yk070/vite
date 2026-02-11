!sc0F:: {
    send("+!{r}") ;フォルダ内検索
    Sleep(100)
    send("^+{h}") ;フォルダ内置換
    Sleep(100)
    Send("{Enter}")
    Sleep(100)
    Send("{tab}")
    Sleep(100)
    Send("^{a}")
}
!q:: {
    send("^{@}") ; ターミナル
}
!w:: {
    send("^{@}") ; ターミナル
    sleep(100)
    send("^{@}") ; ターミナル
}

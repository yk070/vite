MButton:: {
    ; send("+!{;}")
}
XButton1:: {
    Click "Left", 2
    Sleep(100)
    send("+!{r}") ;フォルダ内検索
    Sleep(100)
    Send("{Enter}")
}

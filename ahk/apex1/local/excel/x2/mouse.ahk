XButton2 & RButton:: {
    send("{LButton}")
    sleep(10)
    send("{Esc}")
    sleep(10)
    send("^g")
    sleep(30)
    send_text("G!A1")
    sleep(10)
    send("{Enter}")
    sleep(10)
}

SC7B & Shift:: {
    send("{Esc}")
}
SC7B & z:: {
    send("^{z}")
}
SC7B & x:: {
    send("^{x}")
}
SC7B & c:: {
    send("^{c}")
}
SC7B & v:: {
    send("^{v}")
}
SC7B & b:: {
    send("^{h}")
}

SC7B & n:: {
    sleep(100)
    loop 1 {
        send("{F10}")
        sleep(100)
    }
    send("{Enter}")
    sleep(10)
}
SC7B & m:: {
    sleep(100)
    loop 2 {
        send("{F10}")
        sleep(100)
    }
    send("{Enter}")
    sleep(10)
}
SC7B & SC33:: {
    send_text("、")
}
SC7B & SC34:: {
    send_text("。")
}
SC7B & SC35:: {
    send_text("？")
}

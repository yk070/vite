SC39 & SC3A:: {
    loop 1 { ;komoji
        send("{F10}")
        sleep(100)
    }
    send("{Enter}")
    sleep(10)
}
SC39 & a:: {
    send("^{a}")
}
SC39 & s:: {
    send("^{s}")
}
SC39 & d:: {
    send("^{d}")
}
SC39 & SC21::AltTab
SC39 & g:: {
    send("^{y}")
}

SC39 & h:: {
    send("^{Left}") ;delBlock
    sleep(100)
    send("^+{right}")
    sleep(100)
    send("{backspace}")
    sleep(100)
}
SC39 & j:: {
    send("{Tab}") ;henkan1
    sleep(50)
    send("1")
    sleep(50)
}
SC39 & k:: {
    send("{Tab}") ;henkan2
    sleep(50)
    send("2")
    sleep(50)
}
SC39 & l:: {
    send("{Tab}") ;henkan3
    sleep(50)
    send("3")
    sleep(50)
}
SC39 & SC27:: {
    send("{Tab}") ;henkan4
    sleep(50)
    send("4")
    sleep(50)
}
SC39 & SC28:: {
    send("{Tab}") ;henkan5
    sleep(50)
    send("5")
    sleep(50)
}

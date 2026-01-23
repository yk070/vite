SC39 & SC3A:: {
    completeSpa
    loop 1 { ;komoji
        send("{F10}")
        sleep(100)
    }
    send("{Enter}")
    sleep(10)
}
SC39 & a:: {
    completeSpa
    send("^{a}")
}
SC39 & s:: {
    completeSpa
    send("^{s}")
}
SC39 & d:: {
    completeSpa
    send("^{d}")
}
SC39 & SC21::AltTab
SC39 & g:: {
    completeSpa
    send("^{y}")
}

SC39 & h:: {
    completeSpa
    send("^{Left}") ;delBlock
    sleep(100)
    send("^+{right}")
    sleep(100)
    send("{backspace}")
    sleep(100)
}
SC39 & j:: {
    completeSpa
    completeSpa
    send("{Tab}") ;henkan1
    sleep(50)
    send("1")
    sleep(50)
}
SC39 & k:: {
    completeSpa
    send("{Tab}") ;henkan2
    sleep(50)
    send("2")
    sleep(50)
}
SC39 & l:: {
    completeSpa
    send("{Tab}") ;henkan3
    sleep(50)
    send("3")
    sleep(50)
}
SC39 & SC27:: {
    completeSpa
    send("{Tab}") ;henkan4
    sleep(50)
    send("4")
    sleep(50)
}
SC39 & SC28:: {
    completeSpa
    send("{Tab}") ;henkan5
    sleep(50)
    send("5")
    sleep(50)
}

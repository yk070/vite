SC39 & SC3A:: {
    fxBarUsed
    loop 1 { ;komoji
        send("{F10}")
        sleep(100)
    }
    send("{Enter}")
    sleep(10)
}
SC39 & a:: {
    fxBarUsed
    send("^{a}")
}
SC39 & s:: {
    fxBarUsed
    send("^{s}")
}
SC39 & d:: {
    fxBarUsed
    send("^+{tab}")
}
SC39 & SC21::AltTab
SC39 & g:: {
    fxBarUsed
    send("^{tab}")
}

SC39 & h:: {
    fxBarUsed
    send("^{Left}") ;delBlock
    sleep(100)
    send("^+{right}")
    sleep(100)
    send("{backspace}")
    sleep(100)
}
SC39 & j:: {
    fxBarUsed
    send("{space}") ;henkan1
    sleep(100)
    send("{space}")
    sleep(10)
    send("{home}")
}
SC39 & k:: {
    fxBarUsed
    send("{Tab}") ;henkan2
    sleep(50)
    send("2")
    sleep(50)
}
SC39 & l:: {
    fxBarUsed
    send("{Tab}") ;henkan3
    sleep(50)
    send("3")
    sleep(50)
}
SC39 & SC27:: {
    fxBarUsed
    send("{Tab}") ;henkan4
    sleep(50)
    send("4")
    sleep(50)
}
SC39 & SC28:: {
    fxBarUsed
    send("{Tab}") ;henkan5
    sleep(50)
    send("5")
    sleep(50)
}

sc1D & h:: {
    send("^{Left}") ;delBlock
    sleep(100)
    send("^+{right}")
    sleep(100)
    send("{backspace}")
    sleep(100)
}
sc1D & j:: {
    send("{Tab}") ;henkan1
    sleep(50)
    send("1")
    sleep(50)
}
sc1D & k:: {
    send("{Tab}") ;henkan2
    sleep(50)
    send("2")
    sleep(50)
}
sc1D & l:: {
    send("{Tab}") ;henkan3
    sleep(50)
    send("3")
    sleep(50)
}
sc1D & sc27:: {
    send("{Tab}") ;henkan4
    sleep(50)
    send("4")
    sleep(50)
}
sc1D & sc28:: {
    send("{Tab}") ;henkan5
    sleep(50)
    send("5")
    sleep(50)
}

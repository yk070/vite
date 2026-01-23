XButton2 & sc2A:: {
    send("{LButton}")
    sleep(10)
    send("{End}")
    sleep(10)
    send("+{Home}")
    sleep(10)
    send("+{Home}")
    sleep(10)
}

XButton2 & z:: {
    send("+{Home}")
}

XButton2 & x:: {
    send("+{Left}")
}

XButton2 & c:: {
    send("+{Right}")
}

XButton2 & v:: {
    send("+{End}")
}

XButton2 & b:: {
    return
}

XButton2 & Shift:: {
    Send("{LButton}")
    Sleep(10)
    Send("{End}")
    Sleep(10)
    Send("+{Home}")
    Sleep(10)
    Send("+{Home}")
    Sleep(10)
}

XButton2 & z:: {
    Send("{LButton}")
    Sleep(10)
    Send("^+{Home}")
}

XButton2 & x:: {
    Send("{LButton}")
    Sleep(10)
    Send("+{Home}")
}

XButton2 & c:: {
    Send("{LButton}")
    Sleep(10)
    Send("+{End}")
}

XButton2 & v:: {
    Send("{LButton}")
    Sleep(10)
    Send("^+{End}")
}

XButton2 & b:: {
    return
}

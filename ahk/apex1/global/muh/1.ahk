sc7B & sc29:: {
    send("!{space}") ;maximize
    sleep(800)
    send("{x}")
}
sc7B & vkF4:: {
    send("!{space}") ;maximize
    sleep(200)
    send("{x}")
}
sc7B & 1:: {
    send("#{v}") ;back1
    sleep(800)
    loop 0 {
        send("{Down}")
        sleep(200)
    }
    sleep(200)
    send("{Enter}")
    sleep(10)
}
sc7B & 2:: {
    send("#{v}") ;back2
    sleep(800)
    loop 1 {
        send("{Down}")
        sleep(200)
    }
    sleep(200)
    send("{Enter}")
    sleep(10)
}
sc7B & 3:: {
    send("#{v}") ;back3
    sleep(800)
    loop 2 {
        send("{Down}")
        sleep(200)
    }
    sleep(200)
    send("{Enter}")
    sleep(10)
}
sc7B & 4:: {
    send("#{v}") ;back4
    sleep(800)
    loop 3 {
        send("{Down}")
        sleep(200)
    }
    sleep(200)
    send("{Enter}")
    sleep(10)
}
sc7B & 5:: {
    send("#{v}") ;back5
    sleep(800)
    loop 4 {
        send("{Down}")
        sleep(200)
    }
    sleep(200)
    send("{Enter}")
    sleep(10)
}

sc7B & 6:: {
}
sc7B & 7:: {
}

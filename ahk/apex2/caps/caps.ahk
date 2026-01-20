#Include .\function\function.ahk

Hotkey("$" sc_capslock, (*) => capslock_down())
Hotkey("$" sc_capslock " Up", (*) => capslock_up())

global capslock_pressed := false
global alttab_running := false
global usHKL := DllCall("LoadKeyboardLayout", "Str", "00000409", "Int", 1)
global jpHKL := DllCall("LoadKeyboardLayout", "Str", "00000411", "Int", 1)

; capslock_down
capslock_down() {
    global capslock_pressed
    if (!capslock_pressed) {
        capslock_pressed := true

        hWnd := WinGetID("A")
        className := WinGetClass(hWnd)
        if (className = "Progman" || className = "WorkerW") { ; Desktop
            keyhistory_transparent()
            switch_force(usHKL)
        }
        else if (hWnd) {
            swich_normal(usHKL)
        }
    }
}

; capslock_up
capslock_up() {
    global capslock_pressed
    capslock_pressed := false

    hWnd := WinGetID("A")
    className := WinGetClass(hWnd)
    if (className = "Progman" || className = "WorkerW") { ; Desktop
        keyhistory_transparent()
        switch_force(jpHKL)
    }
    else if (hWnd) {
        swich_normal(jpHKL)
    }

    global alttab_running
    if (alttab_running) {
        Send("{LAlt Up}")
        alttab_running := false
    }
}

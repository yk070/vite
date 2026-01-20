    gui_command := Gui("+AlwaysOnTop +ToolWindow -Caption")
    gui_command.BackColor := "FFFFFF"
    gui_command.SetFont("s10")

    gui_command.Show("x0 y0 w" A_ScreenWidth " h" A_ScreenHeight " NA")

    WinSetTransparent(180, gui_command.Hwnd)
    WinSetExStyle("+0x20", gui_command.Hwnd)

    #SingleInstance Force
    Persistent true
    ProcessSetPriority("Realtime")
    SendMode("Input")
    SetDefaultMouseSpeed(0)
    SetKeyDelay(0)
    SetTitleMatchMode(2)
    DetectHiddenWindows(true)

    $SC03A:: { ;CapsLock
        Send("{Space}")
    }

    $Tab:: {
        Send("{Backspace}")
    }

    $SC07B:: { ;無変換
        Send("{Enter}")
    }
    $SC29:: { ;半角
        Send("{0}")
    }
    $vk1C:: { ;変換
        Send("{vkF3}")
    }

    XButton2 & LButton:: {
        Send("^{LButton}") ;go
    }
    ; Send("+!{1}}") ;back
    ; Send("+!{z}") ;選択範囲の縮小
    ; Send("+!{d}") ;選択範囲の拡大
    ; Send("+!{c}") ;ブックマーク全部削除
    ; Send("+!{b}") ;ブックマークのトグル
    XButton2 & RButton:: {
        Send("+!{f}") ;エクスプローラーを折り畳む
        Sleep(10)
        Send("+!{f}") ;エクスプローラーを折り畳む
        Sleep(10)
        Send("+!{3}") ;お気に入りを折り畳む
    }
    XButton2 & XButton1:: {
        Send("#{a}")
    }
    XButton2 & WheelUp:: {
        Sleep(500)
    }
    XButton2 & WheelDown:: {
        Send("+!{p}") ;エクスプローラーにフォーカス
        Sleep(100)
        Send("+!{f}") ;エクスプローラーを折り畳む
        Sleep(100)
        Send("+!{f}") ;エクスプローラーを折り畳む
        ; Sleep(100)
        ; Send("{Home}")
        ; Sleep(10)
        ; Send("{Home}")
        ; Sleep(10)
        ; Send("{Enter}")
        ; Sleep(100)
    }

    LButton:: {
    }

    fx_register(scancode_for, index) {
        Hotkey("$" scancode_for, (*) => fx_branch(scancode_for, index))
    }

    ; ctrl_down
    global ctrl_pressed := false
    ctrl_down() {
        if (space_pressed) {
            Send("{a}")
        }
        global ctrl_pressed
        ctrl_pressed := true
    }

    ; ctrl_up
    ctrl_up() {
        global ctrl_pressed
        ctrl_pressed := false
    }

    ; shift_down
    global shift_pressed := false
    shift_down() {
        if (space_pressed) {
            Send("{a}")
        }
        global shift_pressed
        shift_pressed := true
    }

    ; shift_up
    shift_up() {
        global shift_pressed
        shift_pressed := false
    }

    ; alt_down
    global alt_pressed := false
    alt_down() {
        if (space_pressed) {
            Send("{a}")
        }
        global alt_pressed
        alt_pressed := true
    }

    ; alt_up
    alt_up() {
        global alt_pressed
        alt_pressed := false
    }

    ; $F1:: {
    ;     Run("..\apex\pc_5600XT.ahk")
    ;     WinClose("ctrl_spce.ahk ahk_class AutoHotkey")
    ; }

    ; ~LButton::
    ; {
    ;     Sleep(500)
    ;     ; ここに追加処理を書く（例：Ctrl+Vを一時的に有効化）
    ;     Hotkey("$" sc_leftctrl, "On")
    ;     Hotkey("$" sc_v, "On")
    ; }

    ; 1
    fx_gl_shift_hankaku(*) {
        Send("!{F4}")
    }
    fx_gl_shift_1(*) {
        Send("+{1}")
    }
    fx_gl_shift_2(*) {
        Send("+{2}")
    }
    fx_gl_shift_3(*) {
        Send("+{3}")
    }
    fx_gl_shift_4(*) {
        Send("+{4}")
    }
    fx_gl_shift_5(*) {
        Send("+{5}")
    }
    fx_gl_shift_6(*) {
        Send("+{6}")
    }
    fx_gl_shift_7(*) {
        Send("+{7}")
    }
    fx_gl_shift_8(*) {
        Send("+{8}")
    }
    fx_gl_shift_9(*) {
        Send("+{9}")
    }
    fx_gl_shift_0(*) {
        Send("+{0}")
    }
    fx_gl_shift_hyphen(*) {
        Send("+{-}")
    }
    fx_gl_shift_caret(*) {
        Send("+{^}")
    }
    fx_gl_shift_yen(*) {
        Send("|")
    }
    ; 2
    fx_gl_shift_tab(*) {
    }
    fx_gl_shift_q(*) {
        Send("+{q}")
    }
    fx_gl_shift_w(*) {
        Send("+{w}")
    }
    fx_gl_shift_e(*) {
        Send("+{e}")
    }
    fx_gl_shift_r(*) {
        Send("+{r}")
    }
    fx_gl_shift_t(*) {
        Send("+{t}")
    }
    fx_gl_shift_u(*) {
        Send("+{u}")
    }
    fx_gl_shift_i(*) {
        Send("{i}")
    }
    fx_gl_shift_o(*) {
        Send("{o}")
    }
    fx_gl_shift_p(*) {
        Send("+{p}")
    }
    fx_gl_shift_atmark(*) {
        Send("+{@}")
    }
    fx_gl_shift_leftbracket(*) {
        Send("+{[}")
    }
    ; 3
    fx_gl_shift_a(*) {
        Send("+{a}")
    }
    fx_gl_shift_s(*) {
        Send("+{s}")
    }
    fx_gl_shift_d(*) {
        Send("+{d}")
    }
    fx_gl_shift_f(*) {
        Send("+{f}")
    }
    fx_gl_shift_g(*) {
        Send("+{g}")
    }
    fx_gl_shift_h(*) {
        Send("+{h}")
    }
    fx_gl_shift_j(*) {
        Send("+{j}")
    }
    fx_gl_shift_k(*) {
        Send("+{k}")
    }
    fx_gl_shift_l(*) {
        Send("+{l}")
    }
    fx_gl_shift_semicolon(*) {
        Send("+{;}")
    }
    fx_gl_shift_colon(*) {
        Send("+{:}")
    }
    fx_gl_shift_rightbrachet(*) {
        Send("+{]}")
    }
    ; 4
    fx_gl_shift_z(*) {
        Send("+{z}")
    }
    fx_gl_shift_x(*) {
        Send("+{x}")
    }
    fx_gl_shift_c(*) {
        Send("+{c}")
    }
    fx_gl_shift_v(*) {
        Send("+{v}")
    }
    fx_gl_shift_b(*) {
        Send("+{b}")
    }
    ; 5
    fx_gl_shift_leftctrl(*) {
        Send("{Delete}")
    }
    fx_gl_shift_leftwin(*) {
        Send("{F12}")
    }
    fx_gl_shift_leftalt(*) {
        Send("{F11}")
    }
    fx_gl_shift_muhenkan(*) {
        Send("{F2}")
    }
    fx_gl_shift_henkan(*) {
        Send("{F7}")
        Sleep(100)
        Send("{Enter}")
        Sleep(10)
    }

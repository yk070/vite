const notModKeyObj = {
  reload: `
Reload()
`,
  スリープ: `
DllCall("PowrProf\\SetSuspendState", "int", 0, "int", 0, "int", 0)
`,
  シャットダウン: `
DllCall("ExitWindowsEx", "UInt", 0x00000001, "UInt", 0)
`,
  再起動: `
DllCall("ExitWindowsEx", "UInt", 0x00000002, "UInt", 0)
`,
  第1候補: `
send("{Tab}") 
sleep(50)
send("1")
sleep(50)
`,
  第2候補: `
send("{Tab}") 
sleep(50)
send("2")
sleep(50)
`,
  第3候補: `
send("{Tab}") 
sleep(50)
send("3")
sleep(50)
`,
  第4候補: `
send("{Tab}") 
sleep(50)
send("4")
sleep(50)
`,
  第5候補: `
send("{Tab}") 
sleep(50)
send("5")
sleep(50)
`,
  入力モード入力ミス挽回: `
    loop 1 { ;komoji
        send("{F10}")
        sleep(100)
    }
    send("{Enter}")
    sleep(10)
`,
  大文字小文字チェンジ: `
    loop 2 { ;komoji
        send("{F10}")
        sleep(100)
    }
    send("{Enter}")
    sleep(10)
`,
  頭文字大文字: `
    loop 3 { ;komoji
        send("{F10}")
        sleep(100)
    }
    send("{Enter}")
    sleep(10)
`,
};
export default notModKeyObj;

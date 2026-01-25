const notModKeyObj = {
  reload: "Reload()",
  sleep: 'DllCall("PowrProf\\SetSuspendState", "int", 0, "int", 0, "int", 0)',
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
};
export default notModKeyObj;

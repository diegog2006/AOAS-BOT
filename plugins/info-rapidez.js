let handler = async m => {
 let old = performance.now()
 let neww = performance.now()
 let speed = neww - old
 let txt = `${eg}*_COMENZANDO PRUEBA DE VELOCIDAD..._*\n*_STARTING SPEED TEST..._*`.trim()
  m.reply(txt)


let veloz = 
`𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳\n *${speed}* *Milisegundos*\n\n𝚂𝙿𝙴𝙴𝙳:\n *${speed}* *Milliseconds*`

 const templateButtonsReplyMessage = [
{index: 1, urlButton: {displayText: '𝙲𝚛𝚎𝚊𝚍𝚘𝚛', url: 'https://wa.me/34643694252'}},
{index: 3, quickReplyButton: {displayText: '𝐌𝐄𝐍𝐔', id: '#menu'}},
{index: 4, quickReplyButton: {displayText: '𝐄𝐒𝐓𝐀𝐃𝐎', id: '#estado'}},
{index: 5, quickReplyButton: {displayText: '𝐌𝐄𝐍𝐔', id: '#menu'}},
]
let tm = {
text: veloz,
footer: global.wm,
templateButtons: templateButtonsReplyMessage
}
conn.sendMessage(m.chat, tm, m)
}
// let veloz = `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`.trim() 
//conn.sendButton(m.chat, `${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`, wm, veloz, [['Vista', /${command}]], m)
                                               
//m.reply(`${rg}*VELOCIDAD:* *${speed}* *Milisegundos*\n*SPEED:* *${speed}* *Milliseconds*`)

  

handler.help = ['ping']
handler.tags = ['info']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler

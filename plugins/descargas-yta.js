let limit = 200
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) throw `${mg}πππππππ ππ ππππΌπΎπ πΏπ ππππππ½π ππΌππΌ πΏπππΎπΌπππΌπ ππ πΌππΏππ\nπππππππ\n*${usedPrefix + command} https://youtu.be/aPu9wQi-z8U*\n\nπππππ πππ ππππππ½π ππππ  πΌππΏππ\nπππΌππππ\n*${usedPrefix + command} https://youtu.be/aPu9wQi-z8U**`
try {
let chat = global.db.data.chats[m.chat]
const isY = /y(es)/gi.test(args[1])
const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
const limitedSize = (isPrems || isOwner ? 350 : 200) * 3074
let audio, source, res, link, lastError, isLimit
for (let i in _audio) {
try {
audio = _audio[i]
isLimit = limitedSize < audio.fileSize
if (isLimit) continue
link = await audio.download()
if (link) res = await fetch(link)
isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
if (isLimit) continue
if (res) source = await res.arrayBuffer()
if (source instanceof ArrayBuffer) break
} catch (e) {
audio = link = source = null
lastError = e
}}
conn.sendFile(m.chat, source, title + '.mp3', `
βγπΦΌ π»ππππ’ α΅α΅α΅β»α΄Ήα΄°γ
ββπ₯ππΈπππ»πΎ: ${title}
βββββΧ`.trim(), m, null, {
asDocument: chat.useDocument
})
}catch(e){
m.reply(`${fg}ππ πππππ½ππ πππ ππ πΌππΎππππ πππΌ πππ ππππΌπΏπ. πππππππ πΎππ ππππ\n\nππ ππ ππππππ½ππ πππΌπ πππ ππππ ππ ππππ πππΌππ. πππ πΌππππππ`)
console.log(e)
}}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.exp = 35
export default handler

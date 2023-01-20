import fetch from 'node-fetch'
import fs from 'fs';
import crypto from 'crypto'
import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
try {
  if (!text) throw `Use example ${usedPrefix}${command} gustixa`
  let vid = (await youtubeSearch(text)).video[0]
  await m.reply(`*_${md} @${m.sender.split(`@`)[0]}..._*`)
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  let whmodsdev = `*${htki} PLAY ${htka}*

  📌 *Title:* ${title}
🔗 *Url:* ${url}
📔 *Description:* ${description}

⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `
  await conn.sendButton(m.chat, whmodsdev, wm, botdate, [
    ['🎶 Audio', `${usedPrefix}yta ${url} yes`],
    ['🎥 Video', `${usedPrefix}ytv ${url} yes`],
    ['🔎 Youtube Search', `${usedPrefix}yts ${text}`]
], m, fdoc)
} catch {
if (!text) throw 'Input Query'
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak Ditemukan'
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
  let ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  let capt = `*${htki} PLAY ${htka}*

  📌 *Title:* ${title}
🔗 *Url:* ${url}
📔 *Description:* ${description}

⏲️ *Published:* ${publishedTime}
⌚ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
  `
  let buttons = [{ buttonText: { displayText: '🎶 Audio/Vn' }, buttonId: `${usedPrefix}yta ${url}` }, { buttonText: { displayText: '🎥 Video' }, buttonId: `${usedPrefix}ytv ${url}` }, { buttonText: { displayText: '🔎 Youtube Search' }, buttonId: `${usedPrefix}yts ${text}` }]
  let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: '_Audio on progress..._', buttons }, { quoted: m })
  // if (durationS > 4000) return conn.sendMessage(m.chat, { text: `*Download:* ${await shortUrl(ytLink)}\n\n_Duration too long..._` }, { quoted: msg })
  conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: msg })

    let img1 = fs.readFileSync('./img/yt.png');
    let img2 = fs.readFileSync('./img/bawah.png');
    return conn.sendButton(m.chat, `${htki} YT PLAY ${htka}`, sewa, thumbnail, [["menu", usedPrefix + "menu"], ["profile", usedPrefix + "profile"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: url,
                mediaType: "VIDEO",
                title: 'Click video di atas untuk melihat',
                body: bottime,
                previewType: 0,
                thumbnail: img1
            }
        }
    })
}
handler.help = ['play', '].map(v => v + ' <pencarian>')
handler.tags = ['YouTube']
handler.command = /^(play)$/i

handler.exp = 0
handler.limit = false
handler.register = true

export default handler

/*       
*
*     SC ORI/BASE : MHANKBARBAR
*     MODIFIKASI : zayy 
*
*/

const { MessageType, Mimetype, GroupSettingChange } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os');
const FormData = require('form-data')
const axios = require("axios")
const speed = require('performance-now')
const qrcodes = require("qrcode")
const qrcode = require("qrcode-terminal")
const { EmojiAPI } = require("emoji-api");
const request = require('request')
const requests = require("node-fetch")
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const phoneNum = require('awesome-phonenumber')
const ffmpeg = require('fluent-ffmpeg')
const base64Img = require('base64-img')
const imageToBase64 = require('image-to-base64')
const lolis = require('lolis.life')
const loli = new lolis()
const Exif = require('./lib/exif');
const exif = new Exif();
const emoji = new EmojiAPI()

//********** FUNCTIONS **********//
const { removeBackgroundFromImageFile } = require('remove.bg')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText, kyun } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require('child_process')
const { uploadimg } = require('./lib/uploadimg')
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
//********** DATABASE **********/
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))


//*********** CUSTOMABLE ***********//
prefix = ''
setgrup = "6281804680327-1611127287@g.us"
numbernye = '6281804680327'
owner = '6281804680327'
offline = false
shape = '⬡'
waktu = '-'
alasan = 'Tidur'
blocked = []
fake = '</ 𝘚𝘦𝘯𝘬𝘶𝘶⁴̅⁰͍⁴̵〆⁩'
fakereply = fs.readFileSync(`./media/fakereply.jpeg`)
fakeimage = fs.readFileSync(`./media/zayy.jpeg`)
numbernye = '0@s.whatsapp.net'
public = false
        
//*********** VCARD  ***********//
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:zayyシ︎\n'
            + 'ORG:Owner zayy;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6281804680327:+62 831-1800-241\n'
            + 'END:VCARD'
            
            function parseMention(text) {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
function formatDate(n, locale = 'id') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}

//*********** 𝗔𝗣𝗜𝗞𝗘𝗬 ***********//
const XteamKey = 'Ini Apikey'        //XTEAM
const ZeksApi = 'Ini Apikey'                  //ZEKS
const LolKey = 'Ini Apikey'                 //LOLHUMAN
	
	
//**************************************************\\
	module.exports = zayy = async (zayy, zay) => {
		try {
            if (!zay.hasNewMessage) return
            zay = zay.messages.all()[0]
			if (!zay.message) return
			if (zay.key && zay.key.remoteJid == 'status@broadcast')
    		global.prefix
    		zay.message = (Object.keys(zay.message)[0] === 'ephemeralMessage') ? zay.message.ephemeralMessage.message : zay.message
  			global.blocked
  			
  			const content = JSON.stringify(zay.message)
  			const from = zay.key.remoteJid
  			const type = Object.keys(zay.message)[0]
			
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const date = new Date().toLocaleDateString()
            const jam = moment.tz('Asia/Jakarta').format("HH:mm:ss DD:MM:YYYY")
            const wita = moment.tz('Asia/Makassar').format("HH:mm:ss DD:MM:YYYY")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss DD:MM:YYYY")
    		const apiKey = setting.apiKey 
    			
      
            const { text, extendedText, contact, caption, location, liveLocation, image, video,quotedMsgObj, sticker, document, audio, product } = MessageType
  	    const mentionByTag = type == "extendedTextMessage" && zay.message.extendedTextMessage.contextInfo != null ? zay.message.extendedTextMessage.contextInfo.mentionedJid : []
	    const mentionByReply = type == "extendedTextMessage" && zay.message.extendedTextMessage.contextInfo != null ? zay.message.extendedTextMessage.contextInfo.participant || "" : ""
	    const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
	    mention != undefined ? mention.push(mentionByReply) : []
	    const mentionUser = mention != undefined ? mention.filter(n => n) : []
	    var pes = (type === 'conversation' && zay.message.conversation) ? zay.message.conversation : (type == 'imageMessage') && zay.message.imageMessage.caption ? zay.message.imageMessage.caption : (type == 'videoMessage') && zay.message.videoMessage.caption ? zay.message.videoMessage.caption : (type == 'extendedTextMessage') && zay.message.extendedTextMessage.text ? zay.message.extendedTextMessage.text : ''
	    const messagesC = pes.slice(0).trim()
		
	
     //BY TANAKA (ALL PREFIX)
            const cmd = (type === 'conversation' && zay.message.conversation) ? zay.message.conversation : (type == 'imageMessage') && zay.message.imageMessage.caption ? zay.message.imageMessage.caption : (type == 'videoMessage') && zay.message.videoMessage.caption ? zay.message.videoMessage.caption : (type == 'extendedTextMessage') && zay.message.extendedTextMessage.text ? zay.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#$,|`÷?;:%^&./\\©^]/gi) : '-'	  
	    var pes = (type === 'conversation' && zay.message.conversation) ? zay.message.conversation : (type == 'imageMessage') && zay.message.imageMessage.caption ? zay.message.imageMessage.caption : (type == 'videoMessage') && zay.message.videoMessage.caption ? zay.message.videoMessage.caption : (type == 'extendedTextMessage') && zay.message.extendedTextMessage.text ? zay.message.extendedTextMessage.text : ''
            const messagesCC = pes.slice(0).trim().split(/ +/).shift()		  
	    body = (type === 'conversation' && zay.message.conversation.startsWith(prefix)) ? zay.message.conversation : (type == 'imageMessage') && zay.message.imageMessage.caption.startsWith(prefix) ? zay.message.imageMessage.caption : (type == 'videoMessage') && zay.message.videoMessage.caption.startsWith(prefix) ? zay.message.videoMessage.caption : (type == 'extendedTextMessage') && zay.message.extendedTextMessage.text.startsWith(prefix) ? zay.message.extendedTextMessage.text : ''	
	    budy = (type === 'conversation') ? zay.message.conversation : (type === 'extendedTextMessage') ? zay.message.extendedTextMessage.text : ''
	    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
	    const args = body.trim().split(/ +/).slice(1)
	    const isCmd = body.startsWith(prefix)
	    chats = (type === 'conversation') ? zay.message.conversation : (type === 'extendedTextMessage') ? zay.message.extendedTextMessage.text : ''
	    const arg = chats.slice(command.length + 2, chats.length)

			mess = {
				wait: '⌛ Sedang di Prosess ⌛',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: 'Error su :v',
					Iv: 'Link nya mokad :v'
				},
				only: {
					group: '*Pakainya Only Group Mhank!*',
					ownerB: '*Ente owner?_*',
					admin: '*Member gosah sok keras cok!!*',
					Badmin: '*Gabisa cokk!! Jadiin gua admin dulu..*'
				}
			}
			
                        const totalchat = await zayy.chats.all()
			const botNumber = zayy.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? zay.participant : zay.key.remoteJid
			const groupMetadata = isGroup ? await zayy.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isfilter = isGroup ? sfilter.includes(from) : false
			const isGcdetect = isGroup ? gcdetect.includes(from) : false
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const itsMe = sender == botNumber ? true : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const q = args.join(' ')
			const conts = zay.key.fromMe ? zayy.user.jid : zayy.contacts[sender] || { notify: jid.replace(/@.+/, '') }
                        const pushname = zay.key.fromMe ? zayy.user.name : conts.notify || conts.vname || conts.name || '-'

			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			
				const sendImage = (teks) => {
		    zayy.sendMessage(from, teks, image, {quoted:zay})
		    }
		    
		    const costum = (pesan, tipe, target, target2) => {
			zayy.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			
		    const sendPtt = (teks) => {
		    zayy.sendMessage(from, audio, mp3, {quoted:zay})
		    }
			
			const reply = (teks) => {
				zayy.sendMessage(from, teks, text,{sendEphemeral : true,quoted : zay, thumbnail : fakereply})
			}
			
			const reply2 = (teks) => {
				zayy.sendMessage(from, teks, text, {quoted : zay,thumbnail : fakereply})
			}
			
			result = fs.readFileSync(`./media/ciap.webp`)
			const reply3= (teks) => {
            zayy.sendMessage(from, result, sticker, {
            sendEphemeral : true,quoted : zay, thumbnail : fakereply})
			}
			
			result = fs.readFileSync(`./media/gip.mp4`)
			const replywithgif= (teks) => {
            zayy.sendMessage(from, result, video, {mimetype: Mimetype.gif,quoted : zay})
			}
			
			const sendMess = (hehe, teks) => {
				zayy.sendMessage(hehe, teks, text,{quoted : troli})
			}
			
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
	    	if(mids.length > 0){
		    text = normalizeMention(to, text, mids)
	    	}
		    const fn = Date.now() / 10000;
		    const filename = fn.toString()
	     	let mime = ""
		    var download = function (uri, filename, callback) {
		    request.head(uri, function (err, res, body) {
			mime = res.headers['content-type']
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		    });
		    };
		    download(url, filename, async function () {
		    console.log('done');
		    let media = fs.readFileSync(filename)
		    let type = mime.split("/")[0]+"Message"
		    if(mime === "image/gif"){
			type = MessageType.video
			mime = Mimetype.gif
		    }
		    if(mime.split("/")[0] === "audio"){
			mime = Mimetype.mp4Audio
		    }
		    zayy.sendMessage(to, media, type, { quoted: zay, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		    
		    fs.unlinkSync(filename)
		    });
	        }
			
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? zayy.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : zayy.sendMessage(from, teks.trim(), extendedText, {quoted: zay, contextInfo: {"mentionedJid": memberr}})
		 	}

const ftroli =  {
  "key": {
    "fromMe": false,
"participant":"0@s.whatsapp.net",
    "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
   orderMessage: {
itemCount: 10,
 status: 200,
 thumbnail: fs.readFileSync('./media/zayy.jpeg'), 
surface: 200, 
message: `${fake}\n> : ${command}`, 
orderTitle: 'zayy', 
sellerJid: '0@s.whatsapp.net'}
  }
}

const gcin = {
  "key": {
    "fromMe": false,
    "participant": `0@s.whatsapp.net`,
    "remoteJid": `0@s.whatsapp.net`
  },
  "message": {
    "groupInviteMessage": {
      "groupJid": "628983583288-1620319322@g.us",
      "inviteCode": "NgsCIU2lXKh3VHJT",
      "groupName": "IstMeZitsraa",
      "jpegThumbnail": fs.readFileSync('./media/zayy.jpeg'), 
      "caption": `${fake}\n> : ${command}`
    }
  }
}

 const troli = {key: {remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 10, status: 200, thumbnail: fs.readFileSync('./media/zayy.jpeg'), surface: 200, message: `${fake}\n> : ${command}`, orderTitle: 'zayy', sellerJid: '0@s.whatsapp.net'} } } 
 
 const stc = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, "message":{ "stickerMessage":{ "url": "https://mmg.whatsapp.net/d/f/AiDWA0F-5MzV99yGn7ngJtmt5t9n9zQ9cZyvrlbxMtdj.enc",
	"fileSha256": "mt6E483P3Gikf30QQ8oz+VmxZVSdLy9sz8kSHlPTLQA=",
	"fileEncSha256": "pzxT+Px6rUrtJPiMoRloiDUdPFg2S9W68yp8uIwSWGM=","mediaKey": "QQn1u0TXzOBMinYx5TNKux5255w4aq0Q8jMU22OIsz4=","mimetype":"image/webp","height":64,"width":64,"directPath":"/v/t62.15575-2/32345423_459812608453382_6993892542959882986_n.enc?ccb=11-4&oh=dd4cfcf103999d2e5be0b28b8417463a&oe=60AF9BAF","fileLength":"64684","mediaKeyTimestamp":"1619523143","isAnimated":false}}}

const fakestatus = (teks) => {
            zayy.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/zayy.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            zayy.sendMessage(from, teks, image, {thumbnail : fakeimage,quoted:zay,caption:yes})
        }
        const fakegroup = (teks) => {
            zayy.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/zayy.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
		
		if (setiker.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/stick/${namastc}.webp`)
	zayy.sendMessage(from, buffer, sticker, {quoted:zay })
	}
	
	if (audionye.includes(messagesC)){
	namastc = messagesC
	buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
	zayy.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: zay, ptt: true })
	}
	
		//***** FILTER *****//
		if(isGroup && isfilter){
         if(zay.message.stickerMessage) return
         for(let i=0; i<filter.length; i++){
         if(messagesCC.includes(filter[i].Filter)){
         console.log(filter[i].Jawaban)
         reply2(filter[i].Jawaban)
      }}}
   //********** FUNCTION OFFLINE **********//
  cekafk(afk)
            if (!zay.key.remoteJid.endsWith('@g.us') && offline){
            if (!zay.key.fromMe){
            if (isAfk(zay.key.remoteJid)) return
            addafk(zay.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            zayy.sendMessage(zay.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./media/zayy.jpeg')}}}})
            }
            }   
        if (zay.key.remoteJid.endsWith('@g.us') && offline) {
        if (!zay.key.fromMe){
        if (zay.message.extendedTextMessage != undefined){
        if (zay.message.extendedTextMessage.contextInfo != undefined){
        if (zay.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of zay.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(zay.key.remoteJid)) return
        addafk(zay.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        zayy.sendMessage(zay.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./media/zayy.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    

    
      // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await zayy.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}


const uploadImages = (buffData, type) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const cmd = text.toLowerCase()
        const filePath = 'utils/tmp.' + ext
        const _buffData = type ? await resizeImage(buffData, false) : buffData
        fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp.' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then(res => res.json())
                .then(res => {
                    if (res.error) return reject(res.error)
                    resolve('https://telegra.ph' + res[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch(err => reject(err))
        })
    })
}
const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        zayy.sendMessage(to, media, MessageType.sticker,{quoted:zay})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }

const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					zayy.sendMessage(to, media, sticker,{quoted : zay})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 
			const isQuotedextendedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			
			
   // FUNTION DETECT TROLI
 /* try{
if(!zay.message.extendedTextMessage.contextInfo.quotedMessage.orderMessage == ''){
console.log('oke aman')
	try{
		teks = `*T R O L I  D E T E C T E D*\n\n${shape} remoteJid : ${zay.key.remoteJid}\n${shape} fromMe : ${zay.key.fromMe}\n${shape} id : ${zay.key.id}`
		reply(teks)
	//	zayy.deleteChat(zay.key.remoteJid)
	}catch(e){
	}
}}catch(e){
}*/
			if (!public){
    if (!zay.key.fromMe && !isOwner) return
  }

			if (!isGroup && !isCmd) console.log(color(time, "white"), color("[ PRIVATE ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "white"), color("[  GROUP  ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"))
            if (isGroup && isCmd) console.log(color(time, "white"), color("[ COMMAND ]", "aqua"), color(budy, "white"), "from", color(sender.split('@')[0], "yellow"), "in", color(groupName, "yellow"))
            

			switch(command) {
      case 'menu':
			    case 'help':
			      case '?':
			        const publc = public ? 'FALSE': 'TRUE'
			  const onl = offline ? 'FALSE' : 'TRUE'
			  const user = !zay.key.fromMe ? 'FALSE':'TRUE'
			  var groups = zayy.chats.array.filter(v => v.jid.endsWith('g.us'))
					  var private = zayy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
					  const totalchatt = await zayy.chats.all()
					  const timestampp = speed();
                const latensot = speed() - timestampp
                const shp = shape
 
if(zay.key.fromMe){
tag = zayy.user.jid.split('@')[0]
mjid = zayy.user.jid
}
else{
tag = sender.split('@')[0]
mjid = sender
}
			      gambar = fs.readFileSync('./media/help.jpeg')
		 zayy.sendMessage(from, gambar,image,{contextInfo: { forwardingScore: 9999, isForwarded: true, mentionedJid: [mjid]},quoted : gcin,caption:help(pushname,prefix, publc, onl, groups, private, latensot, totalchatt,jam, wita, tag, wit, user, shp),thumbnail : fs.readFileSync('./media/zayy.jpeg')})
			    break
			
	case 'inspect':
					var codee = body.slice(9).split('https://chat.whatsapp.com/')[1]
					var res = await zayy.query({
				        json: ["query", "invite", codee],
			    		expect200: true
  					})
  					var todd = `
*「 Group Link Inspector 」*


• *Id:* ${res.id}

• *Judul:* ${res.subject}

• *Dibuat oleh* @${res.id.split('-')[0]}
pada *${formatDate(res.creation * 1000)}*${res.subjectOwner ? `

• *Judul diubah oleh* @${res.subjectOwner.split(`@`)[0]}
pada *${formatDate(res.subjectTime * 1000)}*`: ''}${res.descOwner ? `

• *Deskripsi diubah oleh* @${res.descOwner.split(`@`)[0]}
pada *${formatDate(res.descTime * 1000)}*` : ''}

• *Jumlah Member:* ${res.size}

• *Teman yang diketahui join*: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split(`@`)[0]).join('\n').trim() : 'Tidak ada'}
${res.desc ? `\n• *Deskripsi:*\n
${res.desc}` : '\n*Tidak ada Deskripsi*'}
`
const ppeq = await zayy.getProfilePicture(res.id)
peq = await getBuffer(ppeq)
				await zayy.sendMessage(from, peq, image,{caption:todd ,quoted: ftroli, contextInfo: { mentionedJid: parseMention(todd)}})
				break
			
			case 'noprefix':
			if(!zay.key.fromMe) return reply('_Lu Siapa?_')
				if(args[0] == 'on'){
					if(noprefix == true) return reply('No prefix sudah diaktifkan sebelumnya!')
					noprefix = true
					reply('Sukses Mengubah prefix ke noprefix')
				}
				else if(args[0] == 'off'){
					if(noprefix == false) return reply('No prefix sudah dinonaktifkan sebelumnya!')
					noprefix = false
					reply('Sukses Mengubah nonprefix ke multiprefix')
				}
				break
			    //***** SELF PUBLIC *****\\
			    
case 'self':
			  if (!zay.key.fromMe) return reply('*Ente owner?_*')
			    public = false
			    return reply(  `*「 𝙈𝙊𝘿𝙀 : 𝙎𝙀𝙇𝙁 」*`, text)
			    break
			    
			  case 'public':
			    if (!zay.key.fromMe) return reply('*Ente owner?_*')
			    public = true
			    return reply(`*「 𝙈𝙊𝘿𝙀 : 𝙋𝙐𝘽𝙇𝙄𝘾 」*`, text)
			    break
			    
			  case 'status':
			    const status = public ? 'Public': 'Self'
			  const onlinee = offline ? 'Off' : 'On'
			  const userr = !zay.key.fromMe ? 'User':'Owner'
			    return reply(`*「 𝙎𝙏𝘼𝙏𝙐𝙎 𝘽𝙊𝙏 」*\n\n*⬡ Status : ${status}*\n*⬡ Status : ${onlinee}*\n*⬡ Status : ${userr}*`, text)
			    
			    break
			    
			    case 'on':
          	if (!zay.key.fromMe) return reply('Owner bukan?')
          	offline = false
          	return reply(`*ANDA SEKARANG ONLINE*`,text)
          	break       
          	
      	case 'off':
         	if (!zay.key.fromMe) return reply('Owner bukan?')
          	offline = true
          	waktuafk = Date.now()
          	anuu = args.join(" ") ? args.join(" ") : 'Tidur'
          	alasanafk = anuu
          	return reply(`*ANDA SEKARANG OFFLINE*\n*DENGAN ALASAN : ${alasanafk}*`,text)
          	break
			    
				case 'runtime':
uptime = process.uptime()
const timestampi = speed();
const latensip = speed() - timestampi
			             anjink =`◪ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲
 \`\`\`${kyun(uptime)}\`\`\``
			             zayy.sendMessage(from, anjink, text,{quoted : ftroli})
			           break
				
					case 'ping':
					  const statusss = public ? 'PUBLIC': 'SELF'
					  var groups = zayy.chats.array.filter(v => v.jid.endsWith('g.us'))
					  var private = zayy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
					  const chatsIds = await zayy.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Loaded Message\`\`\`
                
\`\`\` - [ ${totalchat.length} ]  Total Chat\`\`\`
\`\`\` - [ ${groups.length} ] Group Chat\`\`\`
\`\`\` - [ ${private.length} ] Private Chat\`\`\`
\`\`\` - [ ${zayy.user.phone.device_manufacturer} ] HANDPHONE\`\`\`
\`\`\` - [ ${zayy.user.phone.wa_version} ] WA Version\`\`\`
\`\`\` - [ Baileys ] Server\`\`\`
\`\`\` - [ ${statusss} ] MODE\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB ] RAM\`\`\`

\`\`\`Speed : ${latensi.toFixed(4)} Second\`\`\``
                return reply(p0, text)
                    break
			    //***** OWNER ONLY *****\\
			    case 'bc':
					if (!zay.key.fromMe) return reply('*Ente owner?_*')
					if (args.length < 1) return reply('.......')
					anu = await zayy.chats.all()
					if (isMedia && !zay.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zay
						bc = await zayy.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							zayy.sendMessage(_.jid, bc, image, {quoted:ftroli,caption: `*「 Zays BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 Zays BROADCAST 」*\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
					
						case 'bcsticker':
					if (!zay.key.fromMe) return reply('*Ente owner?_*')
					anu = await zayy.chats.all()
					if (isMedia && !zay.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zay
						bc = await zayy.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							zayy.sendMessage(_.jid, bc, sticker, {quoted:trolibc})
						}
						reply('Suksess broadcast')
					}
					break
					
					case 'bcvideo':
					if (!zay.key.fromMe) return reply('*Ente owner?_*')
					if (args.length < 1) return reply('.......')
					anu = await zayy.chats.all()
					if (isMedia && !zay.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zay
						bc = await zayy.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							zayy.sendMessage(_.jid, bc, video, {quoted:troli,caption: `*「 Zays BROADCAST 」*\n\n${body.slice(9)}`})
						}
						reply('Suksess broadcast')
					}
					break
					
					case 'bcgif':
					if (!zay.key.fromMe) return reply('*Ente owner?_*')
					if (args.length < 1) return reply('.......')
					anu = await zayy.chats.all()
					if (isMedia && !zay.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zay
						bc = await zayy.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							zayy.sendMessage(_.jid, bc, video, {mimetype: Mimetype.gif,quoted : troli,caption: `*「 Zays BROADCAST 」*\n\n${body.slice(7)}`})
						}
						reply('Suksess broadcast')
					}
					break
					
					case 'blocklist':
				  case 'listblock':
					teks = '❒ \`\`\`This is list of blocked number\`\`\`\n'
					for (let block of blocked) {
						teks += `└  @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					zayy.sendMessage(from, teks.trim(), extendedText, {quoted: zay, contextInfo: {"mentionedJid": blocked}})
					break
					
					case 'return':
                                case 'run':
                                  if (!isOwner && !zay.key.fromMe) return reply('*Ente owner?')
                                        return reply(JSON.stringify(eval(args.join(''))))
                                        break
                                        
                   case 'term': 
case 'exec':
if (!zay.key.fromMe) return reply('*Ente owner?_*')
const cmyd = body.slice(6)
var itsme = `0@s.whatsapp.net`
var split = `*Zay-BotWeA*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmyd, (err, stdout) => {
if (err) return zayy.sendMessage(from, ` ${err}`, text, { quoted: zay })
if (stdout) {
zayy.sendMessage(from, stdout, text, term)
}
})
break                     

case 'creategroup':
				  if (!zay.key.fromMe)return reply(mess.only.owner)
const pepekk = body.slice(13)
const adann = pepekk.split("|")[0]
const y = pepekk.split("|")[1].replace("@","")
zayy.groupCreate (`${adann}`, [`${numbernye}@s.whatsapp.net`,`${y}@s.whatsapp.net`])
reply('_Sucses creategroup_')
	break

			    //********** STICKER **********\\
			  
			 case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
					if ((isMedia && !zay.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zay
						const media = await zayy.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								zayy.sendMessage(from, fs.readFileSync(ran), sticker, { quoted : zay}) 
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && zay.message.videoMessage.seconds < 11 || isQuotedVideo && zay.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zay
						const media = await zayy.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Yah error dek`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								zayy.sendMessage(from, buff, sticker, {quoted: zay})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zay
						const media = await zayy.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'J93DHS3AqHmXJQWm4XLv9iRY'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Yah error dek')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								zayy.sendMessage(from, buff, sticker, {quoted: zay})
							})
						    })					
					} else {
						reply(`𝗸𝗶𝗿𝗶𝗺 𝗴𝗮𝗺𝗯𝗮𝗿 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗮𝗽𝘁𝗶𝗼𝗻 ${prefix}𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗮𝘁𝗮𝘂 𝗿𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝗴𝗮𝗺𝗯𝗮𝗿`)
					}
					break
					
					case 'emoji':
			if (!q) return fakestatus('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break

           case 'swm':
                    case 'stickerwm':
                    if ((isMedia && !zay.message.videoMessage || isQuotedImage)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} zayy|Rapayee`)
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await zayy.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            zayy.sendMessage(from, ini_buff, sticker, { quoted: zay }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
                              case 'rs':
                      case 'rsticker':
                    if ((isMedia && !zay.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await zayy.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `https://api.lolhuman.xyz/api/convert/towebpwround?apikey=${LolKey}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            zayy.sendMessage(from, ini_buff, sticker, { quoted: zay}).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
                    }
                    break
                    
                    case 'stickflip':
									 var ghs = body.slice(11)
									if ((isMedia || isQuotedImage) && args.length == 0) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zay
                                        reply(mess.wait)
					owgi = await zayy.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.jpg')
                                        teks = `${uploade.result.image}`
										buffer = `https://api.lolhuman.xyz/api/editor/flip?apikey=${LolKey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 } else if (isQuotedSticker && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await zayy.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api.lolhuman.xyz/api/editor/flip?apikey=${LolKey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break

case 'stickwasted':
									 var ghs = body.slice(13)
									if ((isMedia || isQuotedImage) && args.length == 0) {
										   ger = isQuotedImage ? JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zay
                                        reply(mess.wait)
					owgi = await zayy.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.jpg')
                                        teks = `${uploade.result.image}`
										buffer = `http://lolhuman.herokuapp.com/api/editor/wasted?apikey=${LolKey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 } else if (isQuotedSticker && args.length == 0) {
										   ger = JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await zayy.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `http://lolhuman.herokuapp.com/api/editor/wasted?apikey=${LolKey}&img=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break
									
case 'stickmeme':
									 var ghs = body.slice(11)
									 if (zay.message.extendedTextMessage != undefined || zay.message.extendedTextMessage != null) {
                                          ger = JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        reply(mess.wait)
					owgi = await zayy.downloadAndSaveMediaMessage(ger)
					 var uploade = await uploadimg(owgi, Date.now() + '.webp')
                                        teks = `${uploade.result.image}`
										buffer = `https://api.memegen.link/images/custom/_/${ghs}.png?background=${teks}`
										sendStickerUrl(from, buffer)
									 }
									break															
									
									case 'sticknobg':
									if (!isQuotedSticker) return reply('stickernya mana anjeng')
					if (isQuotedSticker) {
												 if (zay.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) return reply('Reply sticker gambar!')
ger = JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
ran = getRandom('.png')
ehgmediabi = await zayy.downloadAndSaveMediaMessage(ger)
exec(`ffmpeg -i ${ehgmediabi} ${ran}`, (err) => {
	fs.writeFileSync('sticknobg.png', fs.readFileSync(ran))
						if (err) return reply('Error om')
							ranp = getRandom('.png')
					keyrmbg = 'J93DHS3AqHmXJQWm4XLv9iRY'
							removeBackgroundFromImageFile({path: 'sticknobg.png', apiKey: keyrmbg, size: 'auto', type: 'auto', ranp})
							.then(res => {
								let buffur = Buffer.from(res.base64img, 'base64')
								fs.writeFileSync(ranp, buffur)
								var imgbb = require('imgbb-uploader')
								reply(mess.wait)
								imgbb("68cb5bee517bce4f74b0e910a5d96346", ranp)
								.then(anu => {
								sendStickerUrl(from, anu.display_url)
								})
							})
					})
					} else {
						reply('Mana sticker nya?')
					}
									break
									
					case 'textmaker':
if ((isMedia && !zay.videoMessage || isQuotedImage)) {
var tex1 = body.slice(11).split('|')[0]
var tex2 = body.slice(11).split('|')[1]
if (!tex2) return reply('Format salah!')
    reply(mess.wait)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zay).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : zay
var media = await zayy.downloadAndSaveMediaMessage(encmedia)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`http://lolhuman.herokuapp.com/api/memegen?apikey=${LolKey}&texttop=${tex1}&textbottom=${tex2}&img=${getUrl}`)
zayy.sendMessage(from, buff, image, {quoted: zay})
}
break

case 'take':
					if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
					var pembawm = body.slice(6)
					var encmedia = JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await zayy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('Error')
					zayy.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: zay})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				
case 'exif':
	        if (!isOwner && !zay.key.fromMe) return reply('*Ente owner?_*')
	        if (args.length < 1) return reply(`Penggunaan ${prefix}exif nama|author`)
		if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)
		    exif.create(arg.split('|')[0], arg.split('|')[1])
		    reply('sukses')
	        break
	        
				case 'colong':
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await zayy.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    zayy.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: zay})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				
				case 'togif':
                                        if (!isQuotedSticker) return reply('Reply stiker nya')
                                        reply(mess.wait)
                                        if (zay.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await zayy.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
                                        zayy.sendMessage(from, buff, video, { mimetype: Mimetype.gif, caption: 'Nih', quoted: zay})
                                }
                                break
				
					
				case 'tovideo':
				case 'tovid':
					reply('Proses Boskuh..')
					 if (zay.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
                                        const encmedia = JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        const media = await zayy.downloadAndSaveMediaMessage(encmedia)
                                        const upload = await uploadimg(media, Date.now() + '.webp')
                                        const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
                                        const buff = await getBuffer(rume.data.result)
						zayy.sendMessage(from, buff, video, { quoted: zay, caption: 'Nih Bos Quee'})
					}
					break
					
					
					case 'toimg':
                                        var b = fs.readFileSync(`./media/zayy.jpeg`)
                                        var encmedia = JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                                        var media = await zayy.downloadMediaMessage(encmedia)
                                        if (!isQuotedSticker) return reply('Reply Stikernya su!')
                                        zayy.sendMessage(from, media, MessageType.image, { thumbnail: b, caption: 'NEHH...', quoted: zay})
                                        break
                                        
					case 'toimage':
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zayy.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						zayy.sendMessage(from, buffer, image, {quoted: zay, caption: fake})
						fs.unlinkSync(ran)
					})
					
					break 
					
				//********** DOWNLOAD **********//
				
				case 'play':
					if (!q) return reply(`*Judul lagu nya mana gan?`)
					reply(mess.wait)
					anu = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${q}&APIKEY=${XteamKey}`)
					infomp3 = `*「 PLAY MUSIC 」*
⌬ Judul : ${anu.judul}
⌬ Size : ${anu.size}
⌬ Source : ${anu.source}

[Wait]Tunggu sebentar kak..`
					pla = await getBuffer(anu.thumbnail)
					play = await getBuffer(anu.url)
					zayy.sendMessage(from, pla, image, { quoted: zay, caption: infomp3 })
					zayy.sendMessage(from, play, audio, { mimetype: 'audio/mp4', quoted: zay })
					break
				
				case 'play2':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                reply(mess.wait)
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=${ZeksApi}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*\n\n⌬  *Judul : ${anu.result.title}*\n⌬  *Source : ${anu.result.source}*\n⌬  *Durasi : ${anu.result.duration}*\n⌬  *Quality : ${anu.result.quality}*\n⌬  *Size : ${anu.result.size}*\n\n*[Wait] Tunggu Sebentar..*`
				buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url_video)
				zayy.sendMessage(from, buffer, image, {quoted: zay, caption: infomp3})
				zayy.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:zay, caption: 'Nih Gan'})
					break 
				
					case 'joox':   
				if (args.length < 1) return reply('*Masukan judul nya?*')
      reply(mess.wait)
				joox = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/joox?apikey=${ZeksApi}&q=${joox}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 JOOX MUSIC 」*\n\n⌬  *Judul : ${anu.data[0].judul}*\n⌬  *Album : ${anu.data[0].album}*\n⌬  *Artis : ${anu.data[0].artist}*\n⌬  *Size : ${anu.data[0].size}*\n\n\n*[Wait] Tunggu sebentar kak..*`
				buffer = await getBuffer(anu.data[0].thumb)
				zayy.sendMessage(from, buffer, image, {quoted: zay, caption: infomp3})
				lagu = await getBuffer(anu.data[0].audio)
				zayy.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.data.audio}.mp3`, quoted: zay})
				break
				
        case 'ig':
          if (args.length < 1) return reply('*Masukan Url nya?*')
          query = args.join(" ")
					anu = await fetchJson(`https://api.zeks.xyz/api/ig?url=${query}&apikey=${ZeksApi}`, {method: 'get'})
				tods = `*「 INSTAGRAM DOWNLOADER 」*\n\nUsername : ${anu.owner}\nCaption : ${anu.caption}
`
					reply(mess.wait)
					buffer = await getBuffer(anu.result[0].url)
					zayy.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result[0].url}.mp4`, quoted: zay, caption : tods})
					break 
					
case 'fb':
  if (args.length < 1) return reply('*Masukan Url nya?*')
  query = args.join(" ")
					anu = await fetchJson(`https://videfikri.com/api/fbdl/?urlfb=${query}`, {method: 'get'})
					wing = `*「 FB DOWNLOADER 」*\n\n*Judul :* ${anu.result.judul}`
					
					reply(mess.wait)
					buffer = await getBuffer(anu.result.url)
					zayy.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.url}.mp4`, quoted: zay, caption: wing})
					break 
					
						case 'ytmp4':
				  if (args.length < 1) return reply('*Masukan Url nya?*')
ini_link = args[0]
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp4?url=${ini_link}&APIKEY=${XteamKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4* 」\n\n*Judul:* ${anu.judul}\n*Size:* ${anu.size}\n\n*[ Wait ]Tunggu Sebentar kak...*`
					 buff = await getBuffer(anu.thumbnail)
					reply(mess.wait)
					buffer = await getBuffer(anu.url)
					zayy.sendMessage(from, buff, image, {quoted: zay, caption: ytt})
					zayy.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.url}.mp4`, quoted: zay, caption: 'Nih Gan'})
					break 

				case 'ytmp3':
				  if (args.length < 1) return reply('*Masukan Url nya?*')
                    ini_link = args[0]
                    anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${ini_link}&APIKEY=${XteamKey}`)
                    					ytt = `「 *YOUTUBE MP3* 」\n\n*Judul:* ${anu.judul}\n*Size:* ${anu.size}\n\n*[Wait]Tunggu Sebentar kak...*`
					 buff = await getBuffer(anu.thumbnail)
					reply(mess.wait)
					buffer = await getBuffer(anu.url)
					zayy.sendMessage(from, buff, image, {quoted: zay, caption: ytt})
					zayy.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.url}.mp3`, quoted: zay})
				break

case 'searchmusic':
				if (isQuotedAudio){
				const dlfile = await zayy.downloadMediaMessage(JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo)
				const bodyForm = new FormData()
			        bodyForm.append('audio', dlfile, 'music.mp3')
           			bodyForm.append('apikey', `${ZeksApi}`)
           			axios('https://api.zeks.xyz/api/searchmusic', {
                		method: 'POST',
                		headers: {
				"Content-Type": "multipart/form-data",
        			...bodyForm.getHeaders()
                		},
                		data: bodyForm
            			})
                		.then(({data}) =>{
				if (data.status){
				reply(`*「 Search Music 」*\n\n\n• *Title*: ${data.data.title}\n\n• *Artists*: ${data.data.artists}\n\n• *Genre*: ${data.data.genre}\n\n• *Album*: ${data.data.album}\n\n• *Release date*: ${data.data.release_date}`)
				} else reply(data.message)
				}).catch(() => reply('Internal server error!, try again later'))
				} else {
				reply('Wrong format!')
				}
				break
				
				case 'igstory':
if(!q) return reply(`Example : ${prefix}igstory n.lidiawaty|1`)
usrnm = q.split('|')[0]
jmlh = q.split('|')[1]
if(!jmlh) return reply('Format Salah')
if(isNaN(jmlh)) return reply('Jumlah harus berupa angka!')
   reply(mess.wait)
data = await axios.get(`http://lolhuman.herokuapp.com/api/igstory/${usrnm}?apikey=${LolKey}`)
for(let i=0; i<jmlh; i++){
   sendMediaURL(from, data.data.result[i], `Instagram Story ${usrnm}`)
}
break

case 'tiktok':
  if (args.length < 1) return reply('*Masukan Url nya?*')
					query = args.join(" ")
					reply(mess.wait)
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/tiktokwm?apikey=${LolKey}&url=${query}`)
					zayy.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: zay})
					break
					
					case 'tiktoknowm':
  if (args.length < 1) return reply('*Masukan Url nya?*')
					query = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${LolKey}&url=${query}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					tt = `「 *TIKTOK NO WM* 」\n\n*Judul:* ${anu.result.title}\n*Keywords:* ${anu.result.keywords}\n*Desc:* ${anu.result.description}`
 buff = await getBuffer(anu.result.link)
 zayy.sendMessage(from, buff, video, {mimetype: 'video/mp4', quoted: zay,caption : tt})
					break
					
					//********** SETTING
					
					case 'setreply':
					if(!zay.key.fromMe)return reply('*Ente owner?_*')
					if (!q) return reply(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break
					
					case 'setshape':
					if(!zay.key.fromMe)return reply('*Ente owner?_*')
					if (!q) return reply(mess.wrongFormat)
					shape = q
					fakegroup(`Succes Mengganti Conversation shape : ${q}`)
					break
				
					case 'replyset':
				  if (!isOwner && !zay.key.fromMe) return reply('*Ente owner?_*')
				if (!isQuotedSticker) return reply('Reply stiker nya')
				boij = JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zayy.downloadMediaMessage(boij)
				fs.writeFileSync(`./media/ciap.webp`, delb)
				reply(`\`\`\`Sukses Mengganti reply sticker\`\`\``)
				break
				
		case 'setthumb':
		  if (!isOwner && !zay.key.fromMe) return reply('*Ente owner?_*')
	        if ((isMedia && !zay.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zay
			delb = await zayy.downloadMediaMessage(boij)
			fs.writeFileSync(`./media/zayy.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break		
				
				case 'fakereply':
				  if (!isOwner && !zay.key.fromMe) return reply('*Ente owner?_*')
				if (!isQuotedImage && !isQuotedSticker) return reply('Reply imagenya')
				boij = JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zayy.downloadMediaMessage(boij)
				fs.writeFileSync(`./media/fakereply.jpeg`, delb)
				reply(`\`\`\`Sukses Mengganti Image Reply\`\`\``)
				break
				
							case 'setthumbmenu':
							  if (!zay.key.fromMe) return reply (mess.only.owner)
				if (!isQuotedImage ) return reply('Reply imagenya')
				boij = JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zayy.downloadMediaMessage(boij)
				imagenye.push(`help`)
				fs.writeFileSync(`./media/help.jpeg`, delb)
				zayy.sendMessage(from, `Sukses Mengganti Thumbnail Menu`, MessageType.text, { quoted: troli })
				break
				
				case 'getstatus':
                var yy = zay.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await zayy.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Status Profile Not Found")
                }
                break
				
				case 'getpic':
				if (zay.message.extendedTextMessage != undefined){
					mentioned = zay.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await zayy.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					zayy.sendMessage(from, thumb,image,{quoted : troli})
				}
				break
				
				//********** ADD **********//
		case 'addstik':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				svst = body.slice(9)
				if (!svst) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zayy.downloadMediaMessage(boij)
				setiker.push(`${svst}`)
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
				zayy.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`, MessageType.text, { quoted: zay })
				break
					case 'dellstik':
					if(!zay.key.fromMe) return fakegroup('Only owner')
					if (!q) return fakegroup(mess.wrongFormat)
					try {
						fs.unlinkSync(`./temp/stick/${q}.webp`)
						setiker.splice(q,1)
						fs.writeFileSync('./temp/stick.json', JSON.stringify(setiker))
						fakegroup(`Succes delete sticker ${q}!`)
					} catch (err) {
						fakegroup(`Gagal delete sticker ${q}!`)
					}
					break
			
				
							case 'addimg':
				if (!isQuotedImage) return reply('Reply imagenya')
				svst = body.slice(8)
				if (!svst) return reply('Nama imagenya apa')
				boij = JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zayy.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				zayy.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`, MessageType.text, { quoted: zay })
				break
				
				case 'addvid':
				if (!isQuotedVideo) return reply('Reply vidionya')
				svst = body.slice(8)
				if (!svst) return reply('Nama vidionya apa')
				boij = JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zayy.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
				zayy.sendMessage(from, `Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: zay })
				break
				
				case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya')
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa')
				boij = JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await zayy.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				zayy.sendMessage(from, `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: zay })
				break
				
				case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*`
				zayy.sendMessage(from, teks.trim(), extendedText, { quoted: zay, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listimg':
				teks = '*Image list :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*`
				zayy.sendMessage(from, teks.trim(), extendedText, { quoted: zay, contextInfo: { "mentionedJid": setiker } })
				break
				
				case 'listvid':
				  case 'listvideo':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}* `
				zayy.sendMessage(from, teks.trim(), extendedText, { quoted: zay, contextInfo: { "mentionedJid": imagenye } })
				break
				
				case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				zayy.sendMessage(from, teks.trim(), extendedText, { quoted: zay, contextInfo: { "mentionedJid": audionye } })
				break
				
				case 'getstik':
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				zayy.sendMessage(from, result, sticker,{quoted:zay})
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				zayy.sendMessage(from, buffer, image, { quoted: zay, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				zayy.sendMessage(from, buffer, video, { quoted: zay, caption: `Result From Database : ${namastc}.mp4` })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				zayy.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: zay, ptt: true })
				} catch {
				  reply('Pack tidak terdaftar')
				}
				break
				
				case 'addrespon':
if(!q) return reply(`ketik perintah addfilter filter|jawab!`)
fltr = q.split('|')[0]
jwb = q.split('|')[1]
if(!jwb) return reply('Format salah!')
for(let i of filter){
  if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
}
const chat = {
Filter : fltr,
Jawaban : jwb
}
filter.push(chat)
fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listchatrespon`)
break

case 'dellrespon':
for(let i=0; i<filter.length; i++){
if(q.includes(filter[i].Filter)){
   obj = {
      txt: filter[i].text,
      balesan: filter[i].balesan
   }
   let del = filter.indexOf(filter[i])
   filter.splice(del, 1)
   fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
   reply(`Sukses Menghapus Respon ${q}`)
}
}
break

case 'autorespon':
	        if(!zay.key.fromMe) return reply('_Only Owner_')
					if (!isGroup) return reply(mess.OnlyGrup)
					if (args.length < 1) return reply('𝗜𝘆𝗮 𝘀𝗮𝘆𝗮𝗻𝗴')
					if (args[0] == 'on') {
						if (sfilter.includes(from)) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳!!!')
						sfilter.push(from)
						fs.writeFileSync('./src/sfilter.json', JSON.stringify(sfilter))
						reply('_Sukses mengaktifkan Autorespon Chat digroup ini_')
					} else if (args[0] == 'off') {
					  let off = sfilter.indexOf(from)
						sfilter.splice(off, 1)
						fs.writeFileSync('./src/sfilter.json', JSON.stringify(sfilter))
						reply('_Sukses menonaktifkan Autorespon Chat digroup ini_')
					} else {
						reply(`_Kirim perintah on untuk mengaktifkan, off untuk menonaktifkan_\nContoh ${prefix + command} on`)
					}
					break
					
					case 'listchatrespon':
   teks = 'List Respon:\n'
   for (let i of filter) {
   teks += `⬡ Filter : ${i.Filter}\n⬡ Jawab : ${i.Jawaban}\n\n---------------------------\n\n`
   }
   teks += `Total : ${filter.length}`
   zayy.sendMessage(from, teks.trim(), extendedText, {quoted: zay})
   break
   
   //********** TAG HIDE **********\\
   case 'tohidetag':
   if(!q) return reply('Ingfonya apa?')
var group = await zayy.groupMetadata(from)
   var member = group['participants']
   var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
   })
var itsme = `0@s.whatsapp.net`
               var split = fake
               var selfbotz = {
                  contextInfo: {
                     mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
                        }
                              }
                      }
               }
               if (isQuotedextendedText){
               teks = zay.message.extendedTextMessage.contextInfo.quotedMessage.conversation
	  zayy.sendMessage(from, teks, MessageType.text,{contextInfo: {mentionedJid: mem},quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281804680327-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }})
               }
if (isQuotedSticker){
   boij = JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
   delb = await zayy.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/stctagg.webp`, delb)
   result = fs.readFileSync(`./media/stctagg.webp`)
   zayy.sendMessage(from, result, MessageType.sticker, {contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281804680327-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/stctagg.webp`)
}
if (isQuotedLocation){
   tod = zay.message.extendedTextMessage.contextInfo.quotedMessage.conversation
   zayy.sendMessage(from, tod, MessageType.location, {contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281804680327-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/stctagg.webp`)
}
else if(isQuotedImage){
   boij = isQuotedImage ? JSON.parse(JSON.stringify(zay).replace("quotedM", "m")).message.extendedTextMessage.contextInfo : zay
   delb = await zayy.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/imgtag.jpg`, delb)
   result = fs.readFileSync(`./media/imgtag.jpg`)
   zayy.sendMessage(from, result, MessageType.image, {contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281804680327-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/imgtag.jpg`)
}
else if(isQuotedAudio){
   boij = JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
   delb = await zayy.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/vntag.mp3`, delb)
   result = fs.readFileSync(`./media/vntag.mp3`)
            zayy.sendMessage(from, result, MessageType.audio, {mimetype: 'audio/mp4', ptt: true, contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281804680327-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/vntag.mp3`)
}
else if(isQuotedVideo){
   boij = JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
   delb = await zayy.downloadMediaMessage(boij)
   await fs.writeFileSync(`./media/videotag.mp4`, delb)
   result = fs.readFileSync(`./media/videotag.mp4`)
   zayy.sendMessage(from, result, MessageType.video, {mimetype: 'video/mp4', contextInfo: {mentionedJid: mem},
            quoted: {
               key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '6281804680327-1604595598@g.us' } : {})
               },
               message: {
                  conversation: `${q}`
               }
            }
         })
   await fs.unlinkSync(`./media/videotag.mp4`)
}

   break
   
   case 'kontag':
const pepek = body.slice(8)
const adan = pepek.split("|")[0]
const nuahh = pepek.split("|")[1]
const trot = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + adan + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' + 'END:VCARD'
let taih = await zayy.groupMetadata(from)
	let setan = taih.participants
	let bruy = []
	for (let go of setan){
		bruy.push(go.jid)
	}
	zayy.sendMessage(from, {displayname: adan, vcard: trot}, MessageType.contact, {quoted:ftroli,contextInfo: {"mentionedJid": bruy}})
	break
   
   case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await zayy.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: zay
					}
					zayy.sendMessage(from, options, text,{quoted :troli})
					break
					
			           case 'stctag':
                                        if (!isQuotedSticker) return reply('Ini sticker?')
                                        boij = JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                                        delb = await zayy.downloadMediaMessage(boij)
                                        await fs.writeFileSync(`stctagg.webp`, delb)
                                        var group = await zayy.groupMetadata(from)
                                        var member = group['participants']
                                        var mem = []
                                        member.map(async adm => {
                                                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                                        })
					var itsme = `0@s.whatsapp.net`
					var split = `${body.slice(8)}`
					var selepbot = {
						contextInfo: {
							mentionedJid: mem,
                                                        participant: itsme,                                                                                                                          quotedMessage: {
                                                                extendedTextMessage: {
                                                                text: split,
							   }
					      	      }
					       }
					}
					result = fs.readFileSync(`stctagg.webp`)
                                        zayy.sendMessage(from, result, sticker, selepbot)
					await fs.unlinkSync(`stctagg.webp`)
					break
					
					case 'imgtag':
                    if ((isMedia && !zay.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zay).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : lol
                        filePath = await zayy.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await zayy.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: zay
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        zayy.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag image yang sudah dikirim`)
                    }
                    break
                    
                    case 'spam':
if (!zay.key.fromMe) return('_Lu Siapa?_')
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(6)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  zayy.sendMessage(from, `${oi1}`, MessageType.text,{quoted :troli})
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = zay.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  zayy.sendMessage(from, teks, MessageType.text,{quoted :troli})
	  }
} else if (isQuotedSticker) {
	encmedia = JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await zayy.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  zayy.sendMessage(from, anu, sticker,{quoted :troli})
	  }
} else if (isQuotedAudio) {
	encmedia = JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            media = await zayy.downloadAndSaveMediaMessage(encmedia)
				anu = fs.readFileSync(media)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  zayy.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', ptt:true, quoted : troli})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(zay).replace('quotedM','m')).message.extendedTextMessage.contextInfo : zay
	delb = await zayy.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  zayy.sendMessage(from, delb, MessageType.image, {quoted : troli,caption: oi1})
	  }
}
	  break
   
				//********** GROUP **********//
	case 'add':
			      if (!isGroupAdmins && !zay.key.fromMe) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (zay.message.extendedTextMessage === undefined || zay.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = zay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, Add :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						zayy.groupAdd(from, mentioned)
					} else {
						mentions(`Perintah di terima, ADD : @${mentioned[0].split('@')[0]}`, mentioned, true)
						zayy.groupAdd(from, mentioned)
					}
					break 
					
			    case 'kick':
			      if (!isGroupAdmins && !zay.key.fromMe) return reply(mess.only.admin)
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (zay.message.extendedTextMessage === undefined || zay.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = zay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						zayy.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						zayy.groupRemove(from, mentioned)
					}
					break 
					
										case 'online':
										  case 'listonline':
                if (!isGroup) return reply(`Only group`)
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(zayy.chats.get(ido).presences), zayy.user.jid]
                zayy.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: zay,
                    contextInfo: { mentionedJid: online }
                })
                break
                
                case 'infoall':
                  if (!isGroupAdmins && !zay.key.fromMe) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					var nom = zay.participant
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `┣❥   @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`*From :@${nom.split("@s.whatsapp.net")[0]}*\n*Info :*  ${body.slice(9)}\n*Total Member :* ${groupMembers.length} \n\n┏━━━⟪ *INFORMATION* ⟫━━━┓`+teks+'╚═ *「 Zays BOT 」* ', members_id, true)
					break
            
					case 'promote':
				case 'pm':
				  if (!zay.key.fromMe && !isGroupAdmins && !isOwner) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (zay.message.extendedTextMessage === undefined || zay.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = zay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						zayy.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						zayy.groupMakeAdmin(from, mentioned)
					}
					break
					case 'demote':
			      case 'dm' : 
			        if (!zay.key.fromMe && !isGroupAdmins && !isOwner) return reply('*Ente siapa?_*')
			    if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (zay.message.extendedTextMessage === undefined || zay.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = zay.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						zayy.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						zayy.groupDemoteAdmin(from, mentioned)
					}
					break
					
					case 'linkgrup':
				case 'linkgc':
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await zayy.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    zayy.sendMessage(from, yeh, text, {quoted: zay})
			        break
			        
        case 'grup':
					case 'gc':
					case 'group':
			  if (!zay.key.fromMe && !isGroupAdmins) return reply('*Ente siapa?_*')
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if(zay.key.fromMe){
tag = zayy.user.jid.split('@')[0]
mjid = zayy.user.jid
}
else{
tag = sender.split('@')[0]
mjid = sender
}
					if (args[0] === 'open') {
					  teks1 = `*_Sukses Membuka Group oleh Admin @${tag}`
					    zayy.sendMessage(from, teks1,text,{contextInfo: { mentionedJid: [nom]},quoted : troli})
						zayy.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
					  teks2 = `*_Sukses Menutup Group oleh Admin @${tag}`
					zayy.sendMessage(from, teks2,text,{contextInfo: { mentionedJid: [nom]},quoted : troli})
						zayy.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break 
					
					case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                    
                  	case 'welcome':
				if (!zay.key.fromMe && !isGroupAdmins) return reply(mess.only.owner)
		if (args.length < 1) return reply(`Ketik ${prefix + command} on/off`)
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('udah on')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Sukses mengaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isWelkom) return reply('udah off')
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Sukses menonaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
                    
                    	case 'groupdetect':
				if (!zay.key.fromMe) return reply(mess.only.owner)
		if (args.length < 1) return reply(`Ketik ${prefix + command} on/off`)
					if ((args[0]) === 'on') {
						if (isGcdetect) return reply('udah on')
						gcdetect.push(from)
						fs.writeFileSync('./src/groupdetect.json', JSON.stringify(gcdetect))
						reply(`\`\`\`✓Sukses mengaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isGcdetect) return reply('anti link sudah off')
						gcdetect.splice(from, 1)
						fs.writeFileSync('./src/groupdetect.json', JSON.stringify(gcdetect))
						reply(`\`\`\`✓Sukses menonaktifkan fitur di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
					
					//********** SEARCH **********\\
					case 'groupwa':
               if (args.length < 1) return reply('*Yang dicari group apa?*')
                    query = args.join(" ")
                    get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/groupwhatsapp?apikey=${LolKey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = "*⬣ G R O U P  WA SEARCH*\n\n\n"
                    for (var x of get_result) {
                        ini_txt += `Nama : ${x.name}\n`
                        ini_txt += `Genre : ${x.genre}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    break
					
					//***** HACK VIRTEX *****\\
				
			    case 'z':
			      case 'buggc':
if (!zay.key.fromMe) return reply('「 *KHUSUS OWNER LU SIAPA?* 」')
					zayy.toggleDisappearingMessages(from, "🥏")
break
		
		case 'sendbug':
if (!zay.key.fromMe) return reply('「 *KHUSUS OWNER LU SIAPA?* 」')
			yaya = body.slice(9)
			anu1 = yaya.split('|')[0]
			anu2 = yaya.split('|')[1]
					zayy.toggleDisappearingMessages(anu1, "🥏")
					yaya = await zayy.groupMetadata(anu1)
					reply(`*Berhasil mengirim bug gc ke ${yaya.subject}*`)
					zayy.sendMessage(anu1, anu2, text)
					break
					
		case 'chats':
if(!zay.key.fromMe) return
ingfo = await getGroup(totalchat)
cpc = await getpc(totalchat)
   teks1 = `*⬣ L I S T  G R O U P*\nJumlah Grup: ${ingfo.length}\n\n`
   for (let i = 0; i < ingfo.length; i++){
   teks1 += `⬡ Nama grup : ${ingfo[i].subject}\n⬡ ID grup : ${ingfo[i].id}\n⬡ Dibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ Jumlah Peserta : ${ingfo[i].participants.length}\n\n`
   }
teks2 = `*⬣ L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpc.length}\n\n`
for(let i=0; i<cpc.length; i++){
	conts = zay.key.fromMe ? zayy.user.jid : zayy.contacts[cpc[i]] || {notify: jid.replace(/@.+/, '')}
	pushnama = zayy.contacts[cpc[i]] != undefined ? zayy.contacts[cpc[i]].vname || zayy.contacts[cpc[i]].notify : undefined
	teks2 += `⬡ Nama : ${pushnama}\n⬡ Tag : @${cpc[i].split("@")[0]}\n⬡ Wa.me : wa.me/${cpc[i].split("@")[0]}\n\n----------------------------------\n\n`
}
mentions(teks1 +'\n\n'+ teks2, cpc, true)
break

case 'listpc':
  if (!zay.key.fromMe) return
  cpcp = await getpc(totalchat)
  teks = `*⬣ L I S T  P E R S O N A L  C H A T*\nJumlah PC: ${cpcp.length}\n\n`
for(let i=0; i<cpcp.length; i++){
	conts = zay.key.fromMe ? zayy.user.jid : zayy.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
	pushnama = zayy.contacts[cpcp[i]] != undefined ? zayy.contacts[cpcp[i]].vname || zayy.contacts[cpcp[i]].notify : undefined
	teks += `⬡ Nama : ${pushnama}\n⬡ Tag : @${cpcp[i].split("@")[0]}\n⬡ Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
}
mentions( teks, cpcp, true)
break
case 'listgroup':
  if(!zay.key.fromMe) return
ingfoo = await getGroup(totalchat)
					teks1 = `*⬣ L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
   for (let i = 0; i < ingfoo.length; i++){
   teks1 += `⬡ Nama grup : ${ingfoo[i].subject}\n⬡ ID grup : ${ingfoo[i].id}\n⬡ Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
   }
   reply(teks1)
   break
   
					case 'cekapikey':
data = await fetchJson(`http://lolhuman.herokuapp.com/api/checkapikey?apikey=${LolKey}`)
data2 = await fetchJson(`https://api.xteam.xyz/cekey?APIKEY=${XteamKey}`)
teks = `⬣ Lolhuman\n\n⬡ Username : ${data.result.username}\n⬡ Request : ${data.result.requests}\n⬡ Today : ${data.result.today}\n⬡ Account Type : ${data.result.account_type}\n⬡ Expired : ${data.result.expired}\n\n⬣ Xteam\n\n⬡ Total Hit : ${data2.response.totalhit}\n⬡ Premium : ${data2.response.premium}\n⬡ Expired : ${data2.response.expired}`
reply(teks)
break


	  case 'mystat': case 'mystatus':
				let i = []
				let giid = []
				for (mem of totalchat){
					i.push(mem.jid)
				}
				for (id of i){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                let timestampii = speed();
				let latensii = speed() - timestampii
                const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = zayy.user.phone
                uptimee = process.uptime()
                teskny = `*V. Whatsapp :* ${wa_version}
*Baterai :* ${baterai.baterai}%
*Charge :* ${baterai.cas === 'true' ? 'Ya' : 'Tidak'}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* ${os_version}
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}
*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${kyun(uptimee)}`
				zayy.sendMessage(from, teskny, text,{quoted : troli})
				break
							
				case 'fakeloc':
if(!q) return reply(`Example : ${prefix}fakeloc Rumah doi|Jl.|degreesLatitude|degreesLongitude`)
namaxx = q.split('|')[0]
jlnxx = q.split('|')[1]
hsus = q.split('|')[2]
iub = q.split('|')[3]
if(!iub) return reply('Format salah')
zayy.sendMessage(from, { "degreesLatitude": hsus,
            "degreesLongitude": iub,
            "name": namaxx,
            "address": jlnxx,
            "jpegThumbnail": fakeimage }, location, { quoted: zay })
					break
					
					case 'sider':
infom = await zayy.messageInfo(from, zay.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `┗━ ${shape} Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
					
					
		default:
		if (chats.startsWith('>')){
				if(!zay.key.fromMe) return
				console.log(color('[EVAL]'), color(moment(zay.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V2 brooo`))
				try{
reply(require('util').format(await eval(`;(async () => { ${chats.slice(2)} })()`)))
}catch(err){
	e = String(err)
	reply(e)
	}
}
if (budy.startsWith('x')){
try {
  if (!zay.key.fromMe)return reply('Only Owner')
return zayy.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: zay})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}

	



/* 
*
*
*
*          THANKS TO :
*               - MHANKBARBAR
*               - zayyシ
*               - Vean
*
*
* 
*/

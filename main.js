const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))

baterai = {
    baterai: 0,
    cas: true
}

require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))

const starts = async (zayy = new WAConnection()) => {
    zayy.logger.level = 'warn'
    console.log(banner.string)
    zayy.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./zayy.json') && zayy.loadAuthInfo('./zayy.json')
    zayy.on('connecting', () => {
        start('2', 'Connecting...')
    })
    zayy.on('open', () => {
        success('2', 'Connected')
    })
    await zayy.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./zayy.json', JSON.stringify(zayy.base64EncodedAuthInfo(), null, '\t'))

    zayy.on('chat-update', async (message) => {
        require('./index.js')(zayy, message)
    })

    zayy.on('CB:Blocklist', json => {                                                                  
        if (blocked.length > 2) return
        for (let i of json[1].blocklist) {
            blocked.push(i.replace('c.us','s.whatsapp.net'))
        }
    })
    zayy.on('CB:action,,battery', json => {
        const a = json[2][0][1].value
        const b = json[2][0][1].live
        baterai.baterai = a
        baterai.cas = b
    })

zayy.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	zayy.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
		  fkontakk = { key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})
               },
               message: {
                  "contactMessage":{"displayName":fake,"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Fajar;;;\nFN:Zayy\nitem1.TEL;waid=6281804680327:+62 812-2354-6913\nitem1.X-ABLabel:Mobile\nEND:VCARD"
               }}}
			const mdata = await zayy.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await zayy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
				ini_user = zayy.contacts[num]
				teks = `*User : @${num.split('@')[0]}*
*Join Group : ${mdata.subject}*`
let	buff = await getBuffer(ppimg)
				zayy.sendMessage(mdata.id, buff, MessageType.image, {quoted:fkontakk,caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await zayy.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
				teks = `*User : @${num.split('@')[0]} Sayonaraa.*`
				let buff = await getBuffer(ppimg)
				zayy.sendMessage(mdata.id, buff, MessageType.image, {quoted : fkontakk,caption: teks, contextInfo: {"mentionedJid": [num]}})
		
			} else if (anu.action == 'promote') {
			const mdata = await zayy.groupMetadata(anu.jid)
			num = anu.participants[0]
			try {
					ppimg = await zayy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝙋𝙍𝙊𝙈𝙊𝙏𝙀 𝘿𝙀𝙏𝙀𝘾𝙏
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`User :\`\`\` @${num.split('@')[0]}

\`\`\`Group :\`\`\` ${mdata.subject}`
			zayy.sendMessage(mdata.id, buff, MessageType.image, {caption : teks, contextInfo: {mentionedJid: [num]}, quoted : fkontakk})
		} else if (anu.action == 'demote') {
			num = anu.participants[0]
			const mdata = await zayy.groupMetadata(anu.jid)
			try {
					ppimg = await zayy.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let buff = await getBuffer(ppimg)
			teks = `𝘿𝙀𝙈𝙊𝙏𝙀 𝘿𝙀𝙏𝙀𝘾𝙏
			
\`\`\`Nomor :\`\`\` ${num.replace('@s.whatsapp.net', '')}

\`\`\`User :\`\`\` @${num.split('@')[0]}

\`\`\`Group :\`\`\` ${mdata.subject}`
			zayy.sendMessage(mdata.id, buff, MessageType.image, {caption:teks,contextInfo: {mentionedJid: [num]}, quoted: fkontakk})
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})

zayy.on('group-update', async (anu) => {
if(!gcdetect.includes(anu.jid)) return
fkontakk = { key: {
                  fromMe: false,
                  participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})
               },
               message: {
                  "contactMessage":{"displayName":fake,"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Fajar;;;\nFN:Zayy\nitem1.TEL;waid=6281804680327:+62 812-2354-6913\nitem1.X-ABLabel:Mobile\nEND:VCARD"
               }}}
  metdata = await zayy.groupMetadata(anu.jid)
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    zayy.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Opened ] - In ${metdata.subject}`)
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    zayy.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Closed ] - In ${metdata.subject}`)
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    zayy.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    zayy.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    zayy.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
})

}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()

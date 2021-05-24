const p = '_'
const help = (pushname,prefix, publc, onl, groups, private, latensot,totalchatt,jam, wita, tag, wit, user, shp) => {
	return `❒ *「 Welcome To WHATSAPP-BOT」* ❒ 

❒ *「 Status Bot 」*
├  *SELF : ${publc}*
├  *ONLINE : ${onl}*
├  *OWNER : ${user}*
├  *Username : ${pushname}*
└  *TAG : @${tag}*

❒ *「 Status Chat 」*
├  *Group Chat : ${groups.length}*
├  *Private Chat : ${private.length}*
├  *Total Chat : ${totalchatt.length}*
└  *Speed Run : ${latensot.toFixed(4)} Seconds*

❒ *「 Informasi Waktu 」*
├  *${jam} WIB⏰*
├  *${wita} WITA⏰*
└  *${wit} WIT⏰*

❒ *「 STICKER CREATOR 」*
├ ${shp} ${p}${prefix}sticker [Reply img]${p}
├ ${shp} ${p}${prefix}stickergif [Reply video/Max 10S]${p}
├ ${shp} ${p}${prefix}stickerwm [author|packname]${p}
├ ${shp} ${p}${prefix}rsticker [Reply img]${p}
├ ${shp} ${p}${prefix}stickmeme [Text]${p}
├ ${shp} ${p}${prefix}stickflip [Reply Stc]${p}
├ ${shp} ${p}${prefix}sticknobg [Reply Stc]${p}
├ ${shp} ${p}${prefix}stickwasted [Reply Img/Stc]${p}
└ ${shp} ${p}${prefix}emoji [Emoticon]${p}

❒ *「 CONVERT 」*
├ ${shp} ${p}${prefix}toimg [Reply Stc|With Fakethumb]${p}
├ ${shp} ${p}${prefix}toimage [Reply Stc]${p}
├ ${shp} ${p}${prefix}textmaker [Text atas|Text bawah]${p}
├ ${shp} ${p}${prefix}take [nama|author]${p}
├ ${shp} ${p}${prefix}exif [nama|author]${p}
├ ${shp} ${p}${prefix}colong [Reply Stc]${p}
├ ${shp} ${p}${prefix}togif [Reply Stickgif]${p}
└ ${shp} ${p}${prefix}tovideo [Reply Stickgif]${p}

❒ *「 DOWNLOADER 」*
├ ${shp} ${p}${prefix}play [Judul Music]${p}
├ ${shp} ${p}${prefix}play2 [Judul video]${p}
├ ${shp} ${p}${prefix}joox [Query]${p}
├ ${shp} ${p}${prefix}ig [Url]${p}
├ ${shp} ${p}${prefix}igstory [username|1]${p}
├ ${shp} ${p}${prefix}fb [Url]${p}
├ ${shp} ${p}${prefix}ytmp3 [Url]${p}
├ ${shp} ${p}${prefix}ytmp4 [Url]${p}
├ ${shp} ${p}${prefix}searchmusic [Tag audio]${p}
├ ${shp} ${p}${prefix}tiktok [Url]${p}
└ ${shp} ${p}${prefix}tiktoknowm [Url${p}]

❒ *「 ONLY GROUP 」*
├ ${shp} ${p}${prefix}group [open|close]${p}
├ ${shp} ${p}${prefix}welcome [on|off]${p}
├ ${shp} ${p}${prefix}groupdetect [on|off]${p}
├ ${shp} ${p}${prefix}autorespon [on|off]${p}
├ ${shp} ${p}${prefix}add [6281xxx/Reply chat]${p}
├ ${shp} ${p}${prefix}kick [@tag/Reply chat]${p}
├ ${shp} ${p}${prefix}promote[@tag]${p}
├ ${shp} ${p}${prefix}demote [@tagadmin]${p}
├ ${shp} ${p}${prefix}linkgroup${p}
├ ${shp} ${p}${prefix}listadmin${p}
├ ${shp} ${p}${prefix}infoall [Notif]${p}
├ ${shp} ${p}${prefix}online${p}
├ ${shp} ${p}${prefix}sider [Reply Chat Bot]${p}
├ ${shp} ${p}${prefix}getpic [@tag/Reply pesan]${p}
└ ${shp} ${p}${prefix}getstatus [@tag/Reply pesan]${p}

❒ *「 ADVANCE 」*
├ ${shp} ${p}${prefix}spam [Reply Text/Stc/Img/Vn | angka]${p}
├ ${shp} ${p}${prefix}tohidetag [Reply Text/Stc/Img/Video/Vn/Lokasi]${p}
├ ${shp} ${p}${prefix}hidetag [Text]${p}
├ ${shp} ${p}${prefix}stctag [Reply Sticker]${p}
├ ${shp} ${p}${prefix}imgtag [Reply image]${p}
├ ${shp} ${p}${prefix}kontag [Nama|Nomor]${p}
├ ${shp} ${p}${prefix}ping${p}
├ ${shp} ${p}${prefix}mystat${p}
├ ${shp} ${p}${prefix}runtime${p}
├ ${shp} ${p}${prefix}fakeloc Nama|Jalan|Lati|long${p}
└ ${shp} ${p}${prefix}inspect [LinkGroup]${p}

❒ *「 COMMAND OWNER 」*
├ ${shp} ${p}${prefix}bc [Text / Reply img]${p}
├ ${shp} ${p}${prefix}bcsticker [Reply Sticker]${p}
├ ${shp} ${p}${prefix}bcvideo [Reply Video] [Text]${p}
├ ${shp} ${p}${prefix}bcgif [Reply Video] [Text]${p}
├ ${shp} ${p}${prefix}creategroup [Nama|@tag]${p}
├ ${shp} ${p}${prefix}run${p}
├ ${shp} ${p}${prefix}term${p}
├ ${shp} ${p}${prefix}self${p}
├ ${shp} ${p}${prefix}public${p}
├ ${shp} ${p}${prefix}status${p}
├ ${shp} ${p}${prefix}listgroup${p}
├ ${shp} ${p}${prefix}listpc${p}
├ ${shp} ${p}${prefix}chats${p}
├ ${shp} ${p}${prefix}cekapikey${p}
├ ${shp} ${p}${prefix}buggc${p}
├ ${shp} ${p}> [Code]${p}
└ ${shp} ${p}x [Code]${p}
   
❒ *「 SEARCH 」*
└ ${shp} ${p}${prefix}groupwa [Query]${p}

❒ *「 SETTING 」*
├ ${shp} ${p}${prefix}cekapikey${p}
├ ${shp} ${p}${prefix}setshape [Simbol]${p}
├ ${shp} ${p}${prefix}setreply [Text]${p}
├ ${shp} ${p}${prefix}replyset [Reply sticker]${p}
├ ${shp} ${p}${prefix}fakereply [Reply img]${p}
├ ${shp} ${p}${prefix}setthumbmenu [Reply img]${p}
└ ${shp} ${p}${prefix}setthumb [Reply img]${p}

❒ *「 STORAGE 」*
├ ${shp} ${p}${prefix}addstick [Optional]${p}
├ ${shp} ${p}${prefix}dellstick [Nama Stc]${p}
├ ${shp} ${p}${prefix}addimg [Optional]${p}
├ ${shp} ${p}${prefix}addvid [Optional]${p}
├ ${shp} ${p}${prefix}addvn [Optional]${p}
├ ${shp} ${p}${prefix}addrespon [Chat|Balasan]${p}
├ ${shp} ${p}${prefix}getstik [Query]${p}
├ ${shp} ${p}${prefix}getimg [Query]${p}
├ ${shp} ${p}${prefix}getvid [Query]${p}
├ ${shp} ${p}${prefix}getvn [Query]${p}
├ ${shp} ${p}${prefix}liststik${p}
├ ${shp} ${p}${prefix}listimg${p}
├ ${shp} ${p}${prefix}listvid${p}
├ ${shp} ${p}${prefix}listvn${p}
├ ${shp} ${p}${prefix}listchatrespon${p}
├ ${shp} ${p}${prefix}listblock${p}
└ ${shp} ${p}${prefix}dellrespon [Respon]${p}

❒ *「 Thanks To MhankBarBar 」* ❒ `
}

exports.help = help


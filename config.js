//Sc recode by TradzID
//Cr : DanzNano

const fs = require("fs");
const chalk = require("chalk");
const moment = require('moment-timezone');
const axios = require('axios');


//aumto presence update
global.autoTyping = false //auto type on = true off = false
global.autoRecord = false //auto recording on = true off = falsep
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)
global.autoreadStory = false

/*~~~~~~status bot~~~~~~~*/
global.status= true //false = bot penggunaan pribadi true = public
global.welcome = false //jika mau hidupin welcome ubah jadi true
global.giveaway = global.giveaway || { status: false, hadiah: "", peserta: [], jumlah: 1 }; //Jangan ubah kalau ga mau error
global.minimaldeposit = 10000; //ubah aja mau berapa


/*~~~~~~All global~~~~~~~*/
global.owner = ['6285892928715'] // SETTING JUGA DI FOLDER DATABASE
global.ownernumber = "6285892928715" //ganti saja ama nomer mu
global.botnumber = "6285892928715" //NOMOR LU
global.botNumber = "6285892928715"
global.ig = '@grevy.music' //ubah jadi nama Instagram lu
global.yt = 'TradzID' //ubah jadi nama yt lu, gapunya yt? biarin aj
global.namabot = "Jinshi | MD✨" // Ganti serah lu
global.botname = "Jinshi | MD✨" // Ganti serah lu
global.footer = "TradzID ✨" //Ganti aja serah
global.namafile = 'Viex 🛍' // Ganti aja
global.ownername = 'ᴛʀᴀᴅᴢ | ᴅᴇᴠ' //NAMA LU
global.socialm = 'GitHub: -'
global.wm = "Viex X Tradz"
global.location = "Indonesia"
global.creator = 'ᴛʀᴀᴅᴢ | ᴅᴇᴠ'
global.namaSaluran = "Viex | Cloud" //Ganti sama nama saluran lu
global.linkSaluran = "https://whatsapp.com/channel/0029Vb5tjub8F2p55FXaN80p"
global.version = "4.5.0"
global.packname = "🛒 Viex | Store"
global.author = "\n\nCreate by TradzID\n Dev : TradzID"

/*~~~~~~Thumbnail Bots~~~~*/
global.thumbnail = 'https://files.catbox.moe/yng1lr.jpg', //THUMB MENU KALIAN
global.vidthumb = "https://files.catbox.moe/gckbi0.mp4" //Ganti aja buat gif di allmenu
global.idSaluran = "120363401647250932@newsletter"//ID SALURAN LU
global.idch = "120363401647250932@newsletter"//ID SALURAN LU
global.my = {
	yt: "https://youtube.com/@TradzID", //ubah saja terserah 
    ch: "https://whatsapp.com/channel/0029Vb5tjub8F2p55FXaN80p", //ubah saja sama link channel lu
    idch: "120363323868732166@newsletter" //ubah idch lu
}

/*~~~~~Setting delayJpm~~~~*/
global.delayjpm = 10000 //ubah saja 1000= 1detik

/*~~~~~~All payment~~~~~~*/
global.nodana = '6285775901603' //Kosongin kalau ga ad dana
global.nogopay = '6285775901603' //Kosongin kalau ga ad gopay
global.noovo = '6285775901603' //Kosongin kalau ga ad ovo
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
global.andana = '083844671188' // KOSONG KAN JIKA TIDAK ADA
global.angopay = '083844671188' // KOSONG KAN JIKA TIDAK ADA
global.anovo = '083844671188' // KOSONG KAN JIKA TIDAK ADA

/*~~~~ Settings Api Orderkuota ~~~~*/
global.merchantIdOrkut = "_"
global.apiOrkut = "_"
global.qrisOrkut = "_"
global.apizero = "zerobotz144"
global.pinOrkut = "-"
global.pwOrkut = "_"

/*~~~~ Settings Pterodactyl ~~~~*/
global.egg = "15" // Egg ID
global.nestid = "6" // nest ID
global.loc = "1" // Location ID
global.domain = "https://pvt.kyzzcloud.xyz"
global.apikey = "ptla_FwByZHcWFH1DRpuKmJLkTP2N8hlnum7O9DWllTjvM8q"
global.capikey = "ptlc_ZTsNZNTBKL1W9DQa3BZpnQmVAp5xdC5f830aDWSK5NP"

/*~~~~ Settings Pterodactyl ~~~~*/
global.egg2 = "15" // Egg ID
global.nestid2 = "6" // nest ID
global.loc2 = "1" // Location ID
global.domain2 = "https://pvt.kyzzcloud.xyz"
global.apikey2 = "ptla_FwByZHcWFH1DRpuKmJLkTP2N8hlnum7O9DWllTjvM8q"
global.capikey2 = "ptlc_ZTsNZNTBKL1W9DQa3BZpnQmVAp5xdC5f830aDWSK5NP"

/*~~~~ Settings Harga Panel ~~~~*/
global.ram1gb = "1000"
global.ram2gb = "2000"
global.ram3gb = "3000"
global.ram4gb = "4000"
global.ram5gb = "5000"
global.ram6gb = "6000"
global.ram7gb = "7000"
global.ram8gb = "8000"
global.ram9gb = "9000"
global.ram10gb = "10000"
global.ramUnli = "10000"
global.adp = "15000"
global.ptp = "25000"
global.ownp = "25000"

global.eggsnya = '15'
global.location3 = '1'

/*~~~~~~~~All mess~~~~~~~*/
global.mess = {
wait: "*[ JinshiMD ]* ⚡ Bersiaplah!",
   error: "*[ JinshiMD ]* ⚠️ Sistem utama sedang tidak merespon",
   success: "*[ JinshiMD ]* ☕ Nih sukses bng",
   on: "*[ JinshiMD ]* 👍 Sudah aktif", 
   off: "*[ JinshiMD ]* 👎 Sudah mati",
   done: "*[ JinshiMD ]* 🎲 Done nih Bang",
   query: {
       text: "ᴛᴇᴋs ɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?",
       link: "ʟɪɴᴋ ɴʏᴀ ᴍᴀɴᴀ ᴋᴀᴋ ?",
   },
   error: {
       fitur: "ᴍᴏʜᴏɴ ᴍᴀᴀғ ᴋᴀᴋ ғɪᴛᴜʀ ᴇʀᴏʀ sɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ ᴀɢᴀʀ ʙɪsᴀ sᴇɢᴇʀᴀ ᴅɪᴘᴇʀʙᴀɪᴋɪ",
   },
   only: {
       group: " 👥 *Fitur ini hanya aktif dalam grup!*",
       private: "📩 *hanya bisa dilakukan secara pribadi.*",
       owner: "👑 *Haha ini hanya milik sang pencipta bot!*",
       admin: "🛡️ *Hanya (admin) yang bisa memakai command ini.*",
       badmin: "⭐ *yang premium doang bisa pakai, mau upgrade?*",
       premium: "❌ *eaduh! lu belum prem nih chat owner untuk beli.*",
   }
}

global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
    menuh: '』––––––',
    menub: '┊☃︎ ',
    menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

//===========================//

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '🪙',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            naga: "🐉",
            phonix: "🦅",
            kyubi: "🦊",
            griffin: "🦒",
            centaur: "🎠",
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

global.prefix = ['.']
global.sessionName = 'session' // Jangan di ubah takut nanti error
global.hituet = 0
global.thum = fs.readFileSync("./library/data/image/thumb.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./library/data/image/thumb.jpg") //ur logo pic
global.err4r = fs.readFileSync("./library/data/image/thumb.jpg") //ur error pic
global.thumb = fs.readFileSync("./library/data/image/thumb.jpg") //ur thumb pic
global.filename = "©ᴛʀᴀᴅᴢ | ᴅᴇᴠ"
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.keyopenai = "pk-pIWAlRroXTOAigkWdHcYvmlmgzEQXuoMWbVAaLAVZswSRbEB"
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

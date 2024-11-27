//my secript by @deltatech v13
//not sale this script

require("./database/module")

//GLOBAL PAYMENT
global.storename = "ཀ͜͡༑ཀ𝐃𝐞𝐥𝐭𝐚⃟༑ཀ͜͡🇮🇩"
global.dana = "6289517977390"
global.qris = "https://img100.pixhost.to/images/345/536527444_skyzopedia.jpg"


// GLOBAL SETTING
global.owner = "6289517977390"
global.namabot = "ཀ͜͡༑ཀ𝐃𝐞𝐥𝐭𝐚⃟༑ཀ͜͡🇮🇩"
global.nomorbot = "6289517977390"
global.nameCreator = "ཀ͜͡༑ཀ𝐃𝐞𝐥𝐭𝐚⃟༑ཀ͜͡🇮🇩💤"
global.linkyt = "https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"
global.autoJoin = false
global.antilink = true
global.versisc = '30'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://img100.pixhost.to/images/345/536527444_skyzopedia.jpg'
global.isLink = "https://whatsapp.com/channel/0029VaZRiKK9WtCDBmbSKn0u"
global.packname = "𝐃𝐞𝐥𝐭𝐚🇮🇩"
global.author = "ཀ͜͡༑ཀ𝐃𝐞𝐥𝐭𝐚⃟༑ཀ͜͡🇮🇩"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
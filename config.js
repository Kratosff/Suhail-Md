const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "e2af6758-17c0-4f75-9f3d-15ca5db2d85d"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f2acaed8c2cbde970a3b6.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "22394918758" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22394918758";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_19_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0LFxuICAgICAgICAxMixcbiAgICAgICAgMTExLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY1LFxuICAgICAgICA0NyxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzMixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDgyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMCxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDczLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI5LFxuICAgICAgICAxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQzLFxuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDk3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDYxLFxuICAgICAgICA2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI3LFxuICAgICAgICA2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMixcbiAgICAgICAgMTA5LFxuICAgICAgICA3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk1LFxuICAgICAgICA4MixcbiAgICAgICAgNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiR2lRNURjT3ZnV1BSc00zUGRiS2VmNElha3N6NnJxdFhJdHRRckxRbURzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyMzk0OTE4NzU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2Q0Y1MUJCRTYwQ0Y4QkFGNURCNkNBNTNFNjdDQjdCNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI5NzU1OTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSU00RzNQRU9TZFM3S0h3dGJELWxoZ1wiLFxuICBcInBob25lSWRcIjogXCI0YjI0N2I3My1kYjk5LTRmZWItODk4Zi0wOGI3MWRkNDQxNjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMTgsXG4gICAgICAxODcsXG4gICAgICAxODksXG4gICAgICAyMzIsXG4gICAgICAxNzMsXG4gICAgICA2MSxcbiAgICAgIDI0LFxuICAgICAgMTA1LFxuICAgICAgMTQzLFxuICAgICAgMTM3LFxuICAgICAgMTE1LFxuICAgICAgMTY1LFxuICAgICAgNjQsXG4gICAgICAxMzMsXG4gICAgICA5MSxcbiAgICAgIDU1LFxuICAgICAgMjMsXG4gICAgICAyMSxcbiAgICAgIDExNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDIwMCxcbiAgICAgIDg5LFxuICAgICAgMTg3LFxuICAgICAgOTEsXG4gICAgICAxMyxcbiAgICAgIDY3LFxuICAgICAgMTQwLFxuICAgICAgMjUzLFxuICAgICAgMTAxLFxuICAgICAgOTAsXG4gICAgICA1NSxcbiAgICAgIDQwLFxuICAgICAgMjcsXG4gICAgICAxMjMsXG4gICAgICAyMjEsXG4gICAgICAxNDIsXG4gICAgICA2MixcbiAgICAgIDIsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNThUTFExWVpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyMzk0OTE4NzU4OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTM1NzY0NTA3NzMwMjU6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTJuNGFNQ0VOK0t5clVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5bk5LakJmQzhzU2I5WW96a0FjQ3RuVkVOTmIwcFB5bFBMYzdzQ0lMT2s0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5FMDBqR2hDd3NkY1lZY0tZR0ttK3BXeEh4dVpMNVpUVzNJOHZtc2V3UlB0eXVtbzdCdnkxQ1B3NUx4S1FiUSsyMUlZZ1d6SmZQUytIRWordk1CaUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZ1OGFTR2YwNGxORFBzc3ltaXIxYjlubnlMVDNaK3RRSXNKSDBVVGp0N040UTdjbktYK1ZoNjdkalEzVmZoRjZ6Ukp2MEpMUWsyS2k1WGRJMW5GdGhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyMzk0OTE4NzU4OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTc1NTg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ1VkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDVWQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaM2VMR1FwQU5Sb0NZQ284TnBNbUpJQjRFaVNONGNzUFcyWkY0WXJlK3pNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYxMTg2NTQ4MSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNF19LFwidGltZXN0YW1wXCI6XCIxNzIwNDQ2MDUyMDAxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "'",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "🇲🇱☬⃢⃟ 𝗞𝗥𝞓𝙏𝞗𝙎𓊉",
  packname: process.env.PACK_NAME || " +223 94 91 87 58",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "🇲🇱☬⃢⃟ 𝗞𝗥𝞓𝙏𝞗𝙎𓊉",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "VFo7zxYpfHREwHf3nmydPXEv",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "a693228a-c8fa-488a-beab-1bf3a7600813",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "059a58cb42127f7ac9897e9b8b696f13";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "false"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

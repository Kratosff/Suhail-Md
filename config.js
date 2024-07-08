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


global.devs = "923184474176" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_26_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExLFxuICAgICAgICA4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MyxcbiAgICAgICAgOCxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMixcbiAgICAgICAgODEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDg4LFxuICAgICAgICA2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDY1LFxuICAgICAgICA4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDczLFxuICAgICAgICAyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDc3LFxuICAgICAgICA1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDQxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMixcbiAgICAgICAgNDgsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDY4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjQ0VWpNMXRnTjFHWDdUVllPQWhmVUQzS2VwdHpZWVA0L05oMVdDVnAxZDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIzOTQ5MTg3NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJGNDhBOTdCQTI3NzU1RDg4QUI1N0U1QzUwMDgwODNDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQ0ODc3NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzMWpOaVB4U1Q3V2c1RXhGbUtiTmxBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhlZjY3ZmViLTE3ZmEtNGQ1Mi04YmJiLTY4MjM2MTY3ZTMxN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTMsXG4gICAgICA0NCxcbiAgICAgIDE1MixcbiAgICAgIDE1MCxcbiAgICAgIDEyNixcbiAgICAgIDExMyxcbiAgICAgIDk4LFxuICAgICAgMjM1LFxuICAgICAgMTg3LFxuICAgICAgMjUzLFxuICAgICAgODQsXG4gICAgICA2NyxcbiAgICAgIDEzNSxcbiAgICAgIDg4LFxuICAgICAgMTc4LFxuICAgICAgMjI4LFxuICAgICAgMjA3LFxuICAgICAgODEsXG4gICAgICA4MCxcbiAgICAgIDM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgMjE4LFxuICAgICAgMjA3LFxuICAgICAgNzMsXG4gICAgICAyNDQsXG4gICAgICAyNCxcbiAgICAgIDIzNSxcbiAgICAgIDE2NSxcbiAgICAgIDEyOSxcbiAgICAgIDI1NCxcbiAgICAgIDIyNixcbiAgICAgIDIxMCxcbiAgICAgIDYzLFxuICAgICAgNTQsXG4gICAgICAyMDIsXG4gICAgICAxNjcsXG4gICAgICAxNjAsXG4gICAgICAxODcsXG4gICAgICAyNyxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLVlNRTlhFV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIzOTQ5MTg3NTg6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExMzU3NjQ1MDc3MzAyNTo5M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbW40YU1DRVAvdHI3UUdHQWdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInluTktqQmZDOHNTYjlZb3prQWNDdG5WRU5OYjBwUHlsUExjN3NDSUxPazQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTUIyMkZPUXBKbGUxdExOc0hBOUxUTzI3Y2tIVlN1MUZCOXlZRWtZaVVUZ2RMbk5pUUxmQlJMNi81SVRXTytBSzFuaVFsYUp3SjNmT0h2VHhTSjE1Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieDhvdnhhcU8wb3NmSUo4TzlmWjRxWGZud1dTMlB5dUljQzhOUHlDNWk5NTFRZGg3RUdiTzdWVnpaN0RtcGlrd3lCNDVJZTdYcGpLbllzZFdqdFI2Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIzOTQ5MTg3NTg6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NDg3NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDVWRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNVZC5qc29uIjogIntcImtleURhdGFcIjpcIlozZUxHUXBBTlJvQ1lDbzhOcE1tSklCNEVpU040Y3NQVzJaRjRZcmUrek09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjExODY1NDgxLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCw0XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0NDYwNTIwMDFcIn0iCn0="  // PUT your SESSION_ID 


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
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

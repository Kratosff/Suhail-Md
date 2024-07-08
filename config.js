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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_22_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDksXG4gICAgICAgIDk2LFxuICAgICAgICA0NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY4LFxuICAgICAgICA0MCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTksXG4gICAgICAgIDMzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyLFxuICAgICAgICA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDksXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgODksXG4gICAgICAgIDUzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTjVzRFdRS1RzNjZ3MzR3N3JTWUxBdzh5azk1c3kzM0pMRG55RGJVUityYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjM5NDkxODc1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTBCODI0Mzk1N0FENUNFNjNCMzQzM0U4N0ZCOUVEOEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMzgzNzY5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIzOTQ5MTg3NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkNEQzEwMDQxRENBM0MzQ0FEQUVDREFGNUYyNTMwRTU2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM4Mzc2OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IHRydWVcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFfY2E3RFdUUThXdHpfZUJOWmN1a0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDJiZjhiNGYtMTc5Ni00YTZhLTg4ZTctNzg1YTUyMWRlZmM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgMjM0LFxuICAgICAgMTkzLFxuICAgICAgMjAyLFxuICAgICAgNDYsXG4gICAgICAxOSxcbiAgICAgIDIxMSxcbiAgICAgIDExMCxcbiAgICAgIDExNSxcbiAgICAgIDEzNyxcbiAgICAgIDQsXG4gICAgICA5LFxuICAgICAgMTMyLFxuICAgICAgMzMsXG4gICAgICAxOTcsXG4gICAgICAyMjgsXG4gICAgICAxNDMsXG4gICAgICAyNixcbiAgICAgIDkxLFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg2LFxuICAgICAgMjEsXG4gICAgICAxMjAsXG4gICAgICAxNTYsXG4gICAgICA2LFxuICAgICAgMjgsXG4gICAgICAxMTUsXG4gICAgICAyNCxcbiAgICAgIDYwLFxuICAgICAgMjI1LFxuICAgICAgNjIsXG4gICAgICA4NixcbiAgICAgIDYyLFxuICAgICAgMTgwLFxuICAgICAgMjAsXG4gICAgICA2MyxcbiAgICAgIDMwLFxuICAgICAgMTU3LFxuICAgICAgMTc4LFxuICAgICAgMTMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkg1M0c3QTFZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjM5NDkxODc1ODo5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEzNTc2NDUwNzczMDI1OjkxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfh7Lwn4ex4pis4oOi4oOfIPCdl57wnZel8J2ek/CdmY/wnZ6X8J2ZjvCTiolcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJbW40YU1DRUlueXE3UUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInluTktqQmZDOHNTYjlZb3prQWNDdG5WRU5OYjBwUHlsUExjN3NDSUxPazQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicXQ1RE04Rnk2NkY0ZWljN3A4TkJFUWRQbDVKMjNOcmZYS3FZaDVIcUx0WG5iekxnVnpZVWVSYkZjYllIV1V1OFhhS09kRHQrcmY5cUFaRGFWYjFjQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTi82RWkxa2xINmtneVZyMSsrTXd5bno1RXlSdzdoMSsvVjBwREtTTW8zV0FYYkRUQ0QweXlCbWtxdWVxckc2Wi9jejkvMzdMbHBvY2Ryb2VGakRraUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIzOTQ5MTg3NTg6OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzODM3NjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDVVpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNVWi5qc29uIjogIntcImtleURhdGFcIjpcIm0yK2tlUlQvNmNLbG5BcUpKbnpLYzVWV0VHKytuM2RSOXBnbEVBczBVV2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjExODY1NDgxLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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

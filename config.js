const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "play" ;  
global.video= "video" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="wilberjimu19999@gmail.com"
global.location="Harare, Zimbabwe."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "AFRICA/Zimbabwe";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaYcD9h4Y9lwW72V7h2Q";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vajfv064yltRqVczL63s" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "263787058139" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263787058139";




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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "True"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_54_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU0LFxuICAgICAgICA0MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMixcbiAgICAgICAgMjIxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDM1LFxuICAgICAgICA4NyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMyxcbiAgICAgICAgNjksXG4gICAgICAgIDU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyOSxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMixcbiAgICAgICAgMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NSxcbiAgICAgICAgNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDgwLFxuICAgICAgICA4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI3LFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDM5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJreVRzaG1PcitGeldjU1JCbkUwTERKcDdDd1pzamJtVkJvb01oUERJMUJnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2Mzc4NzA1ODEzOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDEzRDI4NDQxNDY2ODY4RjgwOUI1RjRDMURGNzM0QjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDE2NDgxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImR0WnNvNU9IVENXSFhNLVBsa29LVXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2ZhMDNkMjktOWY4YS00NDFkLTlkZmMtZTcyZThiNmE0ZTA5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxOSxcbiAgICAgIDE4OCxcbiAgICAgIDgwLFxuICAgICAgMTYwLFxuICAgICAgMTMwLFxuICAgICAgMTAsXG4gICAgICAxMDMsXG4gICAgICAxNTgsXG4gICAgICAyNTIsXG4gICAgICAxMzgsXG4gICAgICAxOTcsXG4gICAgICA1NSxcbiAgICAgIDg1LFxuICAgICAgMTg2LFxuICAgICAgMTcyLFxuICAgICAgMjE1LFxuICAgICAgMTgyLFxuICAgICAgMTU0LFxuICAgICAgMTAyLFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMjI1LFxuICAgICAgMTQ1LFxuICAgICAgODksXG4gICAgICAyMzAsXG4gICAgICAxMTIsXG4gICAgICA1NixcbiAgICAgIDI4LFxuICAgICAgMTg2LFxuICAgICAgMjE5LFxuICAgICAgMTgzLFxuICAgICAgMjU1LFxuICAgICAgMTA4LFxuICAgICAgMTIsXG4gICAgICAyMzYsXG4gICAgICA0NyxcbiAgICAgIDIzOSxcbiAgICAgIDExNyxcbiAgICAgIDYyLFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFJDRjFHSk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NzA1ODEzOTozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE2NjEyNTU2NTk1Njk6MzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHIxOHNjQkVOWEZqN1VHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNaXV0T3I1SHB3V2ZsbkhUb3VybUpVWDMxd1hoV01tMzNubExxd0ZQMFZBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZhODg0NWs0ZkIxbGl2V0dyV2dycENnSHpTek9iMXZuTUZkWXZEdHYzYmREMDlEcStDS3B0WXhXcVZVYURkZ2ROOVVrQUZpNmRPUHR3Nks2dE04T0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhHOFJ0Tjl4Q040TjZXZ3o0NzJyTnphY1A1QXp5a0RxZk90bm1RcTgwaWxaNjExRDdGMHdGdnZVTFdiKzVXMTZpNzR5QW1lQ1RnZlI2TGEwR0VFQml3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4NzA1ODEzOTozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDE2NDczLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0tHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPS0cuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ1MTQ5d09xR1hPZE9HNW5xS0lwV1lLR2tLSXRXZWZqRjZYVE5idDQvU3k4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxOTIxNjEyMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwOTg1NTA1OTgwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "all my ex girlfriends",
  ownername:process.env.OWNER_NAME|| "Wilbert",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "WILBERT"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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

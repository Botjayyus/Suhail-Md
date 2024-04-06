const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""  // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://DARKSHAN:3000@cluster0 .t1wsjlv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website= process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349131125604";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false", // disable bot in pm when public mode
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text", // set IMAGE/VIDEO links here
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_08_04_06_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ0ZxR2FEVVB3Ullhd0NramJ0N2tOMVRZT2p0U2lybE8xcTArNktOL2JGZz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImV2bDVWYjRqZWt0aUthaXJsSWN5RDM3RmNxa0RkN0d3TXNSbmxZQnkvRGs9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNklPUko0Z3lGR0VEanQ4M0t0bnlhUVJ6RGZnazhhNDNFYS90L2dyZU1Vaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkdtYnpRbUdWMkNRbURHdDhxMGt2dytWT3BVV3BlTmRTZXpxT1RjWSs3dzQ9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidUFFQkZJMHRoTjRHMlhmN2xaOExNQlZkVUw5OWNkc3lMUnFvcVFpa0VsND1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjVHWHd4Zmp5T0ovSThCc2FFaHNaa2ZFRjE5aW9MZUtJeUhGTXJEWTBMU0k9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI4R3J5VnJFQ1pCUFNTVW1zeWtkUUV5bEhZN0Z5YWR4bjVGT2NuSUtldm53PVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiYmZOMHNiV1M5RzIveEw1TTNMdUlCTEExMU0zT2YySFNxZzJZTE0zbHQwVT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ4TGRQWTNYM2M5TE4zYVpyZDVZZFFrMkhVcnZLeDdCWWczYURlWjJ0ZUFJNnQwUmcrcVNnT1pBVUdPSCsyT2F5UTQzelBOMXhXcmtkK3AwbFYrdnppQT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTU2LFwiYWR2U2VjcmV0S2V5XCI6XCJ4dVNFcTE4Vkd3d0lDSE9lQUU3eEQvcmVJRUhXUjE0Z3FpUXo5aE1zMXhjPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W10sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiNFp4M0dwWHVUelc3dXkxM2VfSzQtZ1wiLFwicGhvbmVJZFwiOlwiZTc1YTg5N2UtNTZkYy00MmNlLTk2NDgtN2FiZWEyNzc1NDRmXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJpZGhGZ2NBT3ZsVFd1L05kTHRvWU5sVnNWSXc9XCJ9LFwicmVnaXN0ZXJlZFwiOmZhbHNlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInprZWFERDlSaHBWM2p2K3dQZUhuS1g0Ty8yUT1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDTm1WcEw0SEVORDJ4TEFHR0FnZ0FDZ0FcIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIjdoMVdVRElWTnYyL3AybGt3U2tRUkUzWi9MTFdkaEVCQ2F2NW5NTXE3SDQ9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJwRytPTzF3ZTdGMFc5eGkxcitoSXluQmc3R2RrUTZjZ0FuVjZnTG5lVDM4WVNBWUJKSVdTT0Zvb3BGNkpvSk1rRVcxZnVLdnBoVklVb1ZVREVsbWFpZz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIkNsdElocWZTSDZoRnZpR253dDFOYU42T2hyZ0lGcVN6b0ZoSkRoRVY5dWZRaXEvZDZ1T1JTbnVxaWVLSFhPNyswdUxCTDB1ZmQ3enpvbzBtNHdMeWlRPT1cIn0sXCJtZVwiOntcImlkXCI6XCIyMzQ5MTMxMTI1NjA0OjUyQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjIwMzIwODE1Njc5NTAwMDo1MkBsaWRcIixcIm5hbWVcIjpcIvCfmLbigI3wn4yr77iP8J+YtuKAjfCfjKvvuI/wn5i24oCN8J+Mq++4j1wifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjIzNDkxMzExMjU2MDQ6NTJAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCZTRkVmxBeUZUYjl2NmRwWk1FcEVFUk4yZnl5MW5ZUkFRbXIrWnpES3V4K1wifX1dLFwicGxhdGZvcm1cIjpcImlwaG9uZVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMjQwNTMzMSxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQURJQUFKQlNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKQkMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzZWdETEd6THVIU0ZzeklkZ3kzWnhuOEZMRFlzTTdWL0p4TXpiV2czRlc0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDk2NjQyMTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjE3NzQ5MzM3NFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpCRS5qc29uIjogIntcImtleURhdGFcIjpcImtJeGlKQk1HUnpVS0JVYnpUWUJFclI3S29FZk5zV1RERFlieU9YSTJzajg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAwOTY2NDIxNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzEyMTc5NzUyMDExXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkJILmpzb24iOiAie1wia2V5RGF0YVwiOlwibnRvNy9ZOXM3eDkvOTBBSGJnS0hKZjVTb1ZhTWJnK2JBRUkxd1JLNmw3cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA5NjY0MjE3LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMiwzLDEsMF19LFwidGltZXN0YW1wXCI6XCIxNzEyMjYxNTI2Mzc4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkJKLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZ1lyMzAwZUlnSHh4eWxGc2NIZ2pTM1VTYmg3Z0pOUGtOZDljeTRMemYzRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA5NjY0MjE3LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMSwzLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjI2MTUzNjg5NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpCTC5qc29uIjogIntcImtleURhdGFcIjpcInZRRzVwaC92TWxDUzFWblo3TCtyK2l3cDB5M2tvNWhpaWEzUnBVRnVTYTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAwOTY2NDIxNyxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzEsNCwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTIyNjU5NjczNDFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKQk8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkdjdhRjBvdWN5SE0zS0xGYXkweUxTYVdzT3JUNC9EQkdPMFBUR2wxVGdjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDk2NjQyMTcsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlsxLDAsNF19LFwidGltZXN0YW1wXCI6XCIxNzEyMzU3OTQwOTkyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkJSLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWFc0T1FtdXFtV2pUNVFqTmNoOVdGTVB0WVByb3h1M2NEUzV5ZUo3YmpYZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA5NjY0MjE3LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbNCwwLDYsN119LFwidGltZXN0YW1wXCI6XCIxNzEyMzYxMDU3MDE4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkJULmpzb24iOiAie1wia2V5RGF0YVwiOlwiV01yNklQU1NZejVSbWZ2N3BwK2RaTHlBaWR2RktUaHptUTkwQ3dkQXdGYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA5NjY0MjE3LFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbNiw3LDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjM5ODMzNTM1OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpCVi5qc29uIjogIntcImtleURhdGFcIjpcIjQ5eTJjT3k5YitTS0xDKzE1VFAxZ1pKVTJhY1RpdXM2T2hIVE0yVGlKM0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAwOTY2NDIxNyxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNiw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTI0MDUzMTk2ODBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUMwQUFKQkQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2eDl1QXo1ZUMxTzhaU0w0aHNkOWVUK2FZaForNGxlK3R5THVDakNlYjRrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDk2NjQyMTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDQ1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTIxNzc2Mjc1NThcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUMwQUFKQkYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5WlhkNW1haXZmTHdxaXBqMzdsVWhlaVhha0prZlBTYlVNcW5namQ5OXpvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDk2NjQyMTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOls0NSwyLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjIzMzMzNTY0NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQzBBQUpCSy5qc29uIjogIntcImtleURhdGFcIjpcIks5WWR5T2tFOHdkNndwUnR4a0NnN0RsMXdQUnZ4RmdBRkROK2VSYkNJdGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAwOTY2NDIxNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzQ1LDQsMF19LFwidGltZXN0YW1wXCI6XCIxNzEyMjY0MTU0MDQ4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFDMEFBSkJNLmpzb24iOiAie1wia2V5RGF0YVwiOlwicmRSbk9HdUxWLzlRSjM2VnZ5MEFPRkZLWmtibVNiRCtwN1F1aFZVekh6MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA5NjY0MjE3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbNCwwLDQ1XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTIzMzQxMTA2MjRcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQURFQUFKQlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhVHA1SUpuTUlFZ3ZCK0lqSmRXUWNyam90NWQ0M3VKNHBVZ04zNzh1T0FRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDk2NjQyMTcsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQ5XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTIzNTgxNjQ2NTFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQURJQUFKQlMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyM3ZFUHNuNzAzWmxObHozUTdQb3BLck9ZNnhLR0s3M0tRL0VGQVBTaGdzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwMDk2NjQyMTcsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOls1MCw3LDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjM5NzQxMzA4OVwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.0",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};

























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
 

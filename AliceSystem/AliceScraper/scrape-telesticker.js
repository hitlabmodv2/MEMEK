//————————————————————————//

/*

Base XyrooRynzz
Powered By Alice Assistent
© XyrooRynzz 2022 - 2026

Source
WhatsApp : https://wa.me/6281543496975
Tele me : https://t.me/XyrooRynzz
instagram : https://instagram.com/biionlyyone
WhatsApp: https://whatsapp.com/channel/0029VaagYHwCnA82hDK7l31D

*/

//————————————————————————//
const axios = require('axios');

async function Telesticker(url) {
  return new Promise(async (resolve, reject) => {
    if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) {
      throw "Enter your Telegram sticker URL";
    }

    let packName = url.replace("https://t.me/addstickers/", "");
    let data = await axios(
      `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`,
      {
        method: "GET",
        headers: { "User-Agent": "GoogleBot" },
      }
    );

    const hasil = [];
    for (let i = 0; i < data.data.result.stickers.length; i++) {
      let fileId = data.data.result.stickers[i].thumb.file_id;
      let data2 = await axios(
        `https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`
      );

      let result = {
        status: 200,
        author: "Xfarr05",
        url: `https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${data2.data.result.file_path}`,
      };

      hasil.push(result);
    }

    resolve(hasil);
  });
}

module.exports = { Telesticker };
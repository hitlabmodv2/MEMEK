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

async function Python(text) {
    const url = 'https://api.gravitywrite.com/api/singlePrompt/contentsnew';
    const params = new URLSearchParams({
      access_token: 'MPRgSfbvscIEdOKY3307nfU5oIdva20qYDeO98SIaee3309d', // Thanks To Avosky
      prompt_id: '2008',
      tone_id: '10',
      question_461: text,
      question_449: 'python',
    });
  
    const headers = {
      'Authorization': 'Bearer MPRgSfbvscIEdOKY3307nfU5oIdva20qYDeO98SIaee3309d',
      'Accept': 'stream',
      'sec-ch-ua-platform': '"Android"',
      'app': 'MTIzfFdsd2Vi',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Mobile Safari/537.36',
      'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
      'sec-ch-ua-mobile': '?1',
      'Origin': 'https://app.gravitywrite.com',
      'Sec-Fetch-Site': 'same-site',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Dest': 'empty',
      'Referer': 'https://app.gravitywrite.com/',
      'Accept-Encoding': 'gzip, deflate, br, zstd',
      'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
    };
  
    try {
      const response = await fetch(`${url}?${params.toString()}`, {
        method: 'GET',
        headers: headers,
      });
  
      if (response.ok) {
        const data = await response.text();
        return data;
      } else {
        console.error('Error in response:', response.status, response.statusText);
        return null;
      }
    } catch (error) {
      console.error('Request failed:', error.message);
      return null;
    }
  }

  module.exports = Python
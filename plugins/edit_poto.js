const axios = require('axios');

const EditPhotoHandler = async (text, msg) => {
    const cmd = text.split('/');
    if (cmd.length < 2) {
        return msg.reply('Format Salah. ketik *edit_bg/warna*');
    }

    if (msg.hasMedia) {
        if (msg.type != 'image') {
            return msg.reply('hanya bisa edit dengan format image.');
        }

        msg.reply('sedang diproses, tunggu bentar ya.');

        const media = await msg.downloadMedia();

        if (media) {
            const color = cmd[1];
            const newPhoto = await EditPhotoRequest(media.data, color)

            if (!newPhoto.success) {
                return msg.reply('Terjadi kesalahan.');
            }

            const chat = await msg.getChat();
            media.data = newPhoto.base64;
            chat.sendMessage(media, { caption: 'ini hasilnya' })
        }
    }
}

const EditPhotoRequest = async (base64, bg_color) => {

    const result = {
        success: false,
        base64: null,
        message: "",
    }

    return await axios({
        method: 'post',
        url: 'https://api.remove.bg/v1.0/removebg',
        data: {
            image_file_b64: base64,
            bg_color: bg_color
        },
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
            "X-Api-Key": "6S2LsXGkd56cTLxiHdxcUnEv",
        },
    })
        .then((response) => {
            if (response.status == 200) {
                result.success = true;
                result.base64 = response.data.data.result_b64
            } else {
                result.message = "Failed response";
            }

            return result;
        })
        .catch((error) => {
            result.message = "Error : " + error.message;
            return result;
        });
}


m.reply(response.data.choices[0].text)
    }
handler.help = ['edit', 'editpoto']
handler.tags = ['info', 'fun']
handler.command = /^(edit|editpoto)$/i
module.exports = {
    EditPhotoHandler
}

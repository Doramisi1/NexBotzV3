const { Configuration, OpenAIApi } = require("openai");
let handler = async (m, { conn, text }) => {
if (!text) throw "[!] Masukkan teks."

const configuration = new Configuration({
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: text,
  temperature: 0,
  max_tokens: 3000,
  top_p: 1,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: ["\n"],
});

m.reply(response.data.choices[0].text)
    }
handler.help = ['ai', 'openai']
handler.tags = ['info', 'fun']
handler.command = /^(ai|openai)$/i
export default handler

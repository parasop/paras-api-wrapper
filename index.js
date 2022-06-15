const axios = require('axios');
const { url, version } = require("./config.json")
class Base {

    constructor() {
        this.url = url;
        this.version = version;
    }

    async lyrics(song) {

        if (!song) throw new Error("[Paras Api Error] The field 'song' was left empty in the LYRICS function!")
        const req = await axios.get(`${url}/lyrics?q=${encodeURIComponent(song)}`)
        const json = req.data
        if (json.error) throw new Error(json.error)
        return json;
    }
    async movie(movie) {

        if (!movie) throw new Error("[Paras Api Error] The field 'movie' was left empty in the MOVIE function!")
        const req = await axios.get(`${url}/movie?q=${encodeURIComponent(movie)}`)
        const json = req.data
        if (json.error) throw new Error(json.error)
        return json;
    }

    async meme() {
        const req = await axios.get(`${url}/meme`)
        const json = req.data
        if (json.error) throw new Error(json.error)
        return json;

    }
    async advice() {
        const req = await axios.get(`${url}/advice`)
        const json = req.data
        if (json.error) throw new Error(json.error)
        return json;

    }
    async fact() {
        const req = await axios.get(`${url}/fact`)
        const json = req.data
        if (json.error) throw new Error(json.error)
        return json;

    }


}

module.exports.Base = Base;

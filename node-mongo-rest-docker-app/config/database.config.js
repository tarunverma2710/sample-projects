const port=process.env.MONGO_DB_PORT;

module.exports = {
    url: 'mongodb://mongo:${port}'
}

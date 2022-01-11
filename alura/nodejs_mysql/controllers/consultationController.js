module.exports = app => {
    app.get('/atendimentos', (request, response) => response.send("Server running!"))
}
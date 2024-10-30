/*1A) As rotas não estão uniforme*/

/*1B) Corrigindo as rotas deixando elas uniforme pois com as rotas incorretas nem no nivel 1 estaria correto*/


/*1C)
const express = require('express');
const { posix } = require('path')
const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "Engenharia de Software"},
    { id: 2, name: "Sistemas de Informação"},
];

app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/users', (req, res) => { 
    res.status(200).json(users); 
});*/


/*2A) O erro deste código seria a falta do uso dos status 200 e 404*/

/*2B)
app.delete('/users/:id', (req, res) => { 
    const id = parseInt(req.params.id); 
    const userIndex = users.findIndex(user => user.id === id); 
    if (userIndex !== -1) { 
        users.splice(userIndex, 1); 
        res.status(200).json({ message: 'Usuário excluído' }); 
    } else { 
        res.status(404).json({ message: 'Usuário não encontrado' }); 
    } 
}); 

app.listen(port, () => {
    console.log(`O servidor está rodando em http://localhost:${port}`);
})*/

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
app.use(cors());


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'FP_catalog',
    password: 'Fernanda17',
    port: 5432
});

app.get('/', (req, res) => {
    res.send('FP Catalog funcionando!');
});

app.get('/jogos', async (req, res) => {
    const resultado = await pool.query('SELECT * FROM jogos');
    res.json(resultado.rows);
});

// rota da descrição do jogo
app.get('/jogos/:id', async (req, res) => {

    const resultado = await pool.query(
        'SELECT * FROM jogos WHERE id_jogo = $1',
        [req.params.id]
    );

    res.json(resultado.rows[0]);

});

app.listen(3000, () => {
    console.log('FP Catalog API rodando na porta 3000🩷');
    console.log('Aproveite nosso catálogo de jogos! 🎮');
    console.log('Temos uma variedade de jogos para você explorar e se divertir! 🕹️');
    console.log('Volte sempre para conferir as novidades! ✨');
});

app.get('/generos', async (req, res) => {

    const resultado = await pool.query(
        'SELECT * FROM generos'
    );

    res.json(resultado.rows);

});

app.get('/estatisticas', async (req, res) => {

    const totalJogos = await pool.query(
        'SELECT COUNT(*) FROM jogos'
    );

    const mediaNotas = await pool.query(
        'SELECT ROUND(AVG(nota), 1) AS media FROM jogos'
    );

    res.json({
        totalJogos: totalJogos.rows[0].count,
        mediaNotas: mediaNotas.rows[0].media
    });

});
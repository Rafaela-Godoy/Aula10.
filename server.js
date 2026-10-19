// Servidor Express - Projeto #26: Assistência Técnica de Smartphones
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3026;

app.get('/api/assistencia/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 26,
        sistema: "Assistência Técnica de Smartphones",
        categoria: "Tecnologia & Hardware",
        tabela_conectada: process.env.TABELA_ALVO || "reparos_bancada",
        parametro_ambiente: process.env.LABORATORIO_TECNICO || "TECH_FIX_26",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #26] Assistência Técnica de Smartphones rodando em http://localhost:${PORT}/api/assistencia/status`);
});
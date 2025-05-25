let mensagens = [];

export async function GET() {
    return Response.json(mensagens);
}

export async function POST(request) {
    const data = await request.json();
    const { nome, mensagem } = data;
    const novaMensagem = { nome, mensagem, data: new Date().toISOString() };
    mensagens.push(novaMensagem);

    return Response.json({ status: 'sucesso', mensagem: 'Mensagem recebida!', dados: novaMensagem });
}

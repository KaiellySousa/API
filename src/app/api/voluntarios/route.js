export async function POST(request) {
    const data = await request.json();
    const { nome, respostas } = data;

    const resultado = respostas.includes('miaaau') ? "Comunicador Terrestre" : "Aspirante a Gato-nauta";

    return Response.json({
        status: 'sucesso',
        mensagem: `Parabéns ${nome}, você é ${resultado}!`,
        dados: data
    });
}

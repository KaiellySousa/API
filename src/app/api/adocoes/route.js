export async function POST(request) {
    const data = await request.json();
    const { nome, itemAdotado } = data;

    return Response.json({
        status: 'sucesso',
        mensagem: `Parabéns ${nome}, você adotou ${itemAdotado}! 🐾`,
        certificado: `Certificado emitido para ${nome} como guardião de ${itemAdotado}.`
    });
}

export async function GET() {
    const tripulacao = [
        { nome: 'Miau Zeta', funcao: 'Comandante', detalhe: 'Líder destemido, adora caixas.' },
        { nome: 'Pófelino', funcao: 'Piloto', detalhe: 'Tem alergia à poeira estelar.' },
        { nome: 'Sonequinha', funcao: 'Engenheiro', detalhe: 'Dorme em cima dos painéis.' },
        { nome: 'SRD-4000', funcao: 'Gato-robô', detalhe: 'Responsável pela manutenção quântica.' }
    ];

    return Response.json(tripulacao);
}

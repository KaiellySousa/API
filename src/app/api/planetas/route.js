export async function GET() {
    const planetas = [
        { id: 1, nome: "Nebulário", status: "Transformado", descricao: "De escuro para cheio de luz e brinquedos." },
        { id: 2, nome: "Felinis Prime", status: "Em missão", descricao: "Recebendo painéis solares e arranhadores." }
    ];

    return Response.json(planetas);
}

export async function GET() {
    const diarios = [
        { id: 1, titulo: "Partimos da Terra", conteudo: "Todos a bordo, miados registrados.", data: "2025-05-24" },
        { id: 2, titulo: "Primeiro planeta salvo", conteudo: "Nebulário agora brilha!", data: "2025-05-25" }
    ];

    return Response.json(diarios);
}

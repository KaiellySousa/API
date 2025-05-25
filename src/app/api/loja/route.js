export async function GET() {
    const itens = [
        { id: 1, nome: "Adote um Parafuso Vital", descricao: "Com certificado de guardião espacial.", preco: 29.90 },
        { id: 2, nome: "Kit Sobrevivência em Buracos de Minhoca", descricao: "Manual ilustrado + comida desidratada.", preco: 59.90 }
    ];

    return Response.json(itens);
}

export async function GET() {
    const registros = [
        { planeta: "Nebulário", antes: "/images/nebuloso.jpg", depois: "/images/iluminado.jpg" },
        { planeta: "Felinis Prime", antes: "/images/felinis-before.jpg", depois: "/images/felinis-after.jpg" }
    ];

    return Response.json(registros);
}

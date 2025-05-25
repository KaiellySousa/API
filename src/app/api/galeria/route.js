export async function GET() {
    const fotos = [
        { id: 1, titulo: "Soneca no painel", url: "/images/soneca-painel.jpg" },
        { id: 2, titulo: "Consertando motor warp", url: "/images/motor-warp.jpg" },
        { id: 3, titulo: "Brincando com gravidade zero", url: "/images/gravity-play.jpg" }
    ];

    return Response.json(fotos);
}

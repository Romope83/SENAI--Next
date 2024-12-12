export async function GET()
{
    const cursos = [
        {id:1, nome:"Javascript"},
        {id:2, nome:"Java"}
    ];
    return new Response(JSON.stringify(cursos),{headers: {"Content-Type":"application/json"}});
}
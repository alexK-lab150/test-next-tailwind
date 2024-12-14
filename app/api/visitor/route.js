import prisma from "@/lib/prisma";

export async function POST(req) {
    try {
        const visitor = await prisma.visitorCount.upsert({
            where: { id: 1 },
            update: { count: { increment: 1 } },
            create: { id: 1, count: 1 },
        });

        return new Response(
            JSON.stringify({ count: visitor.count }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Database error:", error);

        return new Response(
            JSON.stringify({ error: "Failed to update visitor count" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

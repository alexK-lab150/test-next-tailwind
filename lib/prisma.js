import { PrismaClient } from "@prisma/client";

// Singleton for PrismaClient
let prisma;

if (!global.prisma) {
    global.prisma = new PrismaClient();
    if (process.env.NODE_ENV !== "production") {
        global.prisma = prisma; // Save to global object only in dev mode
    }
}
prisma = global.prisma || new PrismaClient();

export default prisma;


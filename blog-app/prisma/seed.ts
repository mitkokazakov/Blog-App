// import prisma from "@/app/lib/prismadb";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const main = async () => {
  const password = "921106";

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const adminUser = await prisma.user.upsert({
      where: {
        email: "mitko@abv.bg",
      },
      update: {},
      create: {
        email: "mitko@abv.bg",
        name: "Mitko Kazakov",
        role: "ADMIN",
        hashedPassword: hashedPassword,
      },
    });

    console.log("Database was successfuly seeded!");
    
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

main();

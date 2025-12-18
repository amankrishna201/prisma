import "server-only";
import { getPrisma } from "@/lib/prisma";

export async function findUserByEmail(email: string) {
  const prisma = getPrisma();

  return prisma.user.findUnique({
    where: { email },
  });
}

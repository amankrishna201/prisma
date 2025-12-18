import "server-only";
import { getPrisma } from "@/lib/prisma";

export async function findUserByEmail(email: string) {
  const prisma = getPrisma();
  alert(prisma);
console.log(` test ${prisma}`);
  return prisma.user.findUnique({
    where: { email },
  });
}

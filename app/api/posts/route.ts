import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      tags: true,
    },
    orderBy: {
      date: 'desc',
    },
  });
  return NextResponse.json(posts);
}

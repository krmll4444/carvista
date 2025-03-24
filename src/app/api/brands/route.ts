import { NextResponse } from 'next/server';

const brands = [
  { id: 'bmw', name: 'BMW' },
  { id: 'audi', name: 'Audi' },
  { id: 'mercedes', name: 'Mercedes-Benz' },
  { id: 'volkswagen', name: 'Volkswagen' },
  { id: 'toyota', name: 'Toyota' }
];

export async function GET() {
  return NextResponse.json(brands);
} 
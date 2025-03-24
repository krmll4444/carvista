import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

const models = {
  bmw: [
    { id: 'x5', name: 'X5' },
    { id: 'x6', name: 'X6' },
    { id: 'm5', name: 'M5' }
  ],
  audi: [
    { id: 'a4', name: 'A4' },
    { id: 'q7', name: 'Q7' },
    { id: 'rs6', name: 'RS6' }
  ],
  mercedes: [
    { id: 'c200', name: 'C 200' },
    { id: 'e350', name: 'E 350' },
    { id: 'gle', name: 'GLE' }
  ],
  volkswagen: [
    { id: 'golf', name: 'Golf' },
    { id: 'tiguan', name: 'Tiguan' },
    { id: 'passat', name: 'Passat' }
  ],
  toyota: [
    { id: 'camry', name: 'Camry' },
    { id: 'rav4', name: 'RAV4' },
    { id: 'land-cruiser', name: 'Land Cruiser' }
  ]
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const brand = searchParams.get('brand');

  if (!brand) {
    return NextResponse.json({ error: 'Brand parameter is required' }, { status: 400 });
  }

  const brandModels = models[brand as keyof typeof models] || [];
  return NextResponse.json(brandModels);
} 
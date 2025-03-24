"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";

interface Brand {
  id: string;
  name: string;
}

interface Model {
  id: string;
  name: string;
}

export default function HomePage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [selectedBrand, setSelectedBrand] = useState('');

  useEffect(() => {
    // Завантажити бренди з API
    fetch('/api/brands')
      .then(response => response.json())
      .then(data => setBrands(data));
  }, []);

  useEffect(() => {
    if (selectedBrand) {
      // Завантажити моделі для вибраного бренду з API
      fetch(`/api/models?brand=${selectedBrand}`)
        .then(response => response.json())
        .then(data => setModels(data));
    } else {
      setModels([]);
    }
  }, [selectedBrand]);

  return (
    <div className="container mx-auto px-4 py-8 bg-primary-color rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Пошук автомобілів</h1>
      <form>
        <div className="flex gap-4 flex-wrap">
          <select
            name="brand"
            className="p-2 border rounded"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">Марка</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
          <select name="model" className="p-2 border rounded" disabled={!selectedBrand}>
            <option value="">Модель</option>
            {models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
          <div className="flex items-center">
            <input type="number" name="price_min" placeholder="Ціна від" className="p-2 border rounded" />
            <span className="mx-2">-</span>
            <input type="number" name="price_max" placeholder="Ціна до" className="p-2 border rounded" />
            <select name="currency" className="p-2 border rounded ml-2">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="uah">UAH</option>
            </select>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Застосувати фільтри
          </button>
        </div>
      </form>
    </div>
  );
}

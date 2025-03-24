import Layout from '../../components/Layout';

export default function CarsPage() {
  return (
    <Layout>
      <div>
        <h1>Список автомобілів</h1>
        <div className="filters">
          {/* Фільтри */}
        </div>
        <div className="car-grid">
          {/* Грід з автомобілями */}
        </div>
      </div>
    </Layout>
  );
}
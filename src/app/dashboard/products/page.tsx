import EntityDrawerSection from '@/app/dashboard/_components/EntityDrawerSection';
import SimplePlaceholder from '@/app/dashboard/_components/SimplePlaceholder';

export default function ProductsPage() {
  return (
    <div className="space-y-5">
      <EntityDrawerSection
        buttonLabel="Add Product"
        fields={[
          { name: 'name', label: 'Product Name', placeholder: 'Enter product name' },
          { name: 'sku', label: 'SKU', placeholder: 'Enter SKU' },
          { name: 'price', label: 'Price', placeholder: '0.00', type: 'number' },
        ]}
      />
      <SimplePlaceholder entity="products" />
    </div>
  );
}

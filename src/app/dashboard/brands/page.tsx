import BrandsTable from '@/app/dashboard/_components/BrandsTable';
import EntityDrawerSection from '@/app/dashboard/_components/EntityDrawerSection';

export default function BrandsPage() {
  return (
    <div className="space-y-5">
      <EntityDrawerSection
        buttonLabel="Add Brand"
        fields={[
          { name: 'name', label: 'Brand Name', placeholder: 'Enter brand name' },
          { name: 'code', label: 'Brand Code', placeholder: 'Enter brand code' },
          { name: 'description', label: 'Description', placeholder: 'Short brand description' },
        ]}
      />
      <BrandsTable />
    </div>
  );
}

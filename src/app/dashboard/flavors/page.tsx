import EntityDrawerSection from '@/app/dashboard/_components/EntityDrawerSection';
import SimplePlaceholder from '@/app/dashboard/_components/SimplePlaceholder';

export default function FlavorsPage() {
  return (
    <div className="space-y-5">
      <EntityDrawerSection
        buttonLabel="Add Flavor"
        fields={[
          { name: 'name', label: 'Flavor Name', placeholder: 'Enter flavor name' },
          { name: 'code', label: 'Flavor Code', placeholder: 'Enter flavor code' },
          { name: 'notes', label: 'Notes', placeholder: 'Optional notes' },
        ]}
      />
      <SimplePlaceholder entity="flavors" />
    </div>
  );
}

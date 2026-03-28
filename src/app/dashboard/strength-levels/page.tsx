import EntityDrawerSection from '@/app/dashboard/_components/EntityDrawerSection';
import SimplePlaceholder from '@/app/dashboard/_components/SimplePlaceholder';

export default function StrengthLevelsPage() {
  return (
    <div className="space-y-5">
      <EntityDrawerSection
        buttonLabel="Add Strength Level"
        fields={[
          { name: 'name', label: 'Level Name', placeholder: 'Enter level name' },
          { name: 'value', label: 'Value', placeholder: '0', type: 'number' },
          { name: 'description', label: 'Description', placeholder: 'Optional description' },
        ]}
      />
      <SimplePlaceholder entity="strength levels" />
    </div>
  );
}

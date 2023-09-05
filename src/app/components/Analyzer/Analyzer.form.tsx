import Input from '~app/ui/Input';
import TextArea from '~app/ui/TextArea';
import { t } from '~i18n';
import Form from '../Form';
import FormField from '../FormField';

const AnalyzerForm: React.FC = () => {
  return (
    <Form>
      <FormField label={t.get('form.label.fileName')}>
        <Input placeholder={t.get('form.desc.fileName')} />
      </FormField>
      <FormField label={t.get('form.label.fileIndex')} required>
        <Input placeholder={t.get('form.desc.fileIndex')} />
      </FormField>
      <FormField label={t.get('form.label.fileIndex')} required>
        <Input placeholder={t.get('form.desc.fileIndex')} />
      </FormField>
      <FormField label={t.get('form.label.referenceSequence')} required>
        <TextArea placeholder={t.get('form.desc.referenceSequence')} />
      </FormField>
      {/* Used cas ortholog */}
      <FormField label={t.get('form.label.targetSequence')} required>
        <Input placeholder={t.get('form.desc.targetSequence')} />
      </FormField>
      <FormField label={t.get('form.label.standardRange')} required>
        <Input placeholder={t.get('form.desc.standardRange')} />
      </FormField>
      {/* Target nucleotide */}
      {/* Desired change of */}
    </Form>
  );
};

export default AnalyzerForm;

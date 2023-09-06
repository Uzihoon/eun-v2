import Input from '~app/ui/Input';
import RadioGroup from '~app/ui/RadioGroup';
import TextArea from '~app/ui/TextArea';
import Upload from '~app/ui/Upload';
import { NUCLEOTIDE } from '~env/constants';
import { t } from '~i18n';
import Form from '../Form';
import FormField from '../FormField';
import { RadioItems } from '~app/ui/types';

const nucleotideItems: RadioItems = NUCLEOTIDE.map((v) => ({ id: v, label: v }));

const AnalyzerForm: React.FC = () => {
  return (
    <Form>
      <FormField label={t.get('form.label.fileName')}>
        <Input placeholder={t.get('form.desc.fileName')} />
      </FormField>
      <FormField label={t.get('form.label.fileIndex')} required>
        <Input placeholder={t.get('form.desc.fileIndex')} />
      </FormField>
      <FormField label={t.get('form.label.sequencingData')} required>
        <Upload accept="application/gzip, .gz" />
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
      <FormField label={t.get('form.label.targetNucleotide')} required>
        <RadioGroup items={nucleotideItems} defaultItem={NUCLEOTIDE[0]} />
      </FormField>
      <FormField label={t.get('form.label.desiredNucleotide')} required>
        <RadioGroup items={nucleotideItems} defaultItem={NUCLEOTIDE[1]} />
      </FormField>
    </Form>
  );
};

export default AnalyzerForm;

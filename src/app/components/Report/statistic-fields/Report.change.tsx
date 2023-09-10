import { t } from '~i18n';
import {
  ChangeValue,
  ChangeBox,
  ChangeResult,
  ChangeSequence,
  ChangeSequenceBox,
  ReportBox,
  ReportContent,
  ReportText,
  ReportTitleBox,
} from '../Report.style';

interface ReportChangeProps {
  targetSeq: string;
  changeSeq: string;
  changed: number;
  total: number;
}

const ReportChange: React.FC<ReportChangeProps> = ({ targetSeq, changeSeq, total, changed }) => {
  return (
    <ReportBox>
      <ReportTitleBox>
        <ReportText>{t.get('report.change.title')}</ReportText>
      </ReportTitleBox>
      <ReportContent>
        <ChangeBox>
          <ChangeSequenceBox>
            <ChangeSequence>{t.get('form.label.targetNucleotide')}</ChangeSequence>
            <ChangeValue>
              {targetSeq} ({total})
            </ChangeValue>
          </ChangeSequenceBox>
          <ChangeSequenceBox>
            <ChangeSequence>{t.get('form.label.desiredNucleotide')}</ChangeSequence>
            <ChangeValue>
              {changeSeq} ({changed})
            </ChangeValue>
          </ChangeSequenceBox>
          <ChangeSequenceBox>
            <ChangeSequence>{t.get('report.label.result')}</ChangeSequence>
            <ChangeValue> {changed > 0 ? ((changed / total) * 100).toFixed(2) + '%' : 0}</ChangeValue>
          </ChangeSequenceBox>
        </ChangeBox>
      </ReportContent>
    </ReportBox>
  );
};

export default ReportChange;

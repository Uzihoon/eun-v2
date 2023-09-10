import { AnalyzedData } from '~env/models/report';
import { t } from '~i18n';
import {
  ReportBox,
  ReportContent,
  ReportText,
  ReportTitleBox,
  ResultBox,
  ResultContainer,
  ResultTitle,
  ResultValue,
} from '../Report.style';

interface ReportResultProps {
  data: AnalyzedData;
}

const ReportResult: React.FC<ReportResultProps> = ({ data }) => {
  return (
    <ReportBox>
      <ReportTitleBox>
        <ReportText>{t.get('report.result.title')}</ReportText>
      </ReportTitleBox>
      <ReportContent>
        <ResultContainer>
          <ResultBox>
            <ResultTitle>{t.get('report.title.result.totalSeq')}</ResultTitle>
            <ResultValue>{data.joins_length}</ResultValue>
          </ResultBox>
          <ResultBox>
            <ResultTitle>{t.get('report.title.result.indicatorSeq')}</ResultTitle>
            <ResultValue>{data.totlr_count}</ResultValue>
          </ResultBox>
          <ResultBox>
            <ResultTitle>{t.get('report.title.result.frequency')}</ResultTitle>
            <ResultValue>{data.tot_count}</ResultValue>
          </ResultBox>
          <ResultBox>
            <ResultTitle>{t.get('report.title.result.insertions')}</ResultTitle>
            <ResultValue>{data.cnt_ins}</ResultValue>
          </ResultBox>
          <ResultBox>
            <ResultTitle>{t.get('report.title.result.deletions')}</ResultTitle>
            <ResultValue>{data.cnt_del}</ResultValue>
          </ResultBox>
        </ResultContainer>
      </ReportContent>
    </ReportBox>
  );
};

export default ReportResult;

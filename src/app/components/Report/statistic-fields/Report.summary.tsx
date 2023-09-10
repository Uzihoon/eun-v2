import { Summary } from '~env/models/report';
import { t } from '~i18n';
import summaryColorList from '../colors/summary';
import {
  ReportBox,
  ReportColor,
  ReportColorBox,
  ReportColorList,
  ReportColorText,
  ReportContent,
  ReportText,
  ReportTitleBox,
  StatisticTitle,
  SummaryText,
} from '../Report.style';

interface ReportSummaryProps {
  summary: Summary[];
}

const ReportSummary: React.FC<ReportSummaryProps> = ({ summary }) => {
  return (
    <ReportBox>
      <StatisticTitle>{t.get('report.title.summary')}</StatisticTitle>
      <ReportTitleBox>
        <ReportText>{t.get('report.summary.title')}</ReportText>
        <ReportColorList>
          {summaryColorList.map(({ id, title, color }) => (
            <ReportColorBox key={id}>
              <ReportColor color={color} />
              <ReportColorText>{t.get(title)}</ReportColorText>
            </ReportColorBox>
          ))}
        </ReportColorList>
      </ReportTitleBox>
      <ReportContent>
        {summary.map(({ data, type }, i) => (
          <SummaryText type={type} key={i}>
            {data}
          </SummaryText>
        ))}
      </ReportContent>
    </ReportBox>
  );
};

export default ReportSummary;

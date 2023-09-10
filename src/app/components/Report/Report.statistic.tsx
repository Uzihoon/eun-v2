import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Report } from '~env/models/report';
import { reportsState } from '~recoil/atom/report';
import Paper from '../Paper';
import ReportAnalyzer from './statistic-fields/Report.analyzer';
import ReportSummary from './statistic-fields/Report.summary';

interface ReportStatisticProps {
  reportId: string;
}

const ReportStatistic: React.FC<ReportStatisticProps> = ({ reportId }) => {
  const [reports] = useRecoilState(reportsState);
  const [report, setReport] = useState<Report>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!reports[reportId]) {
      navigate('/');
      return;
    }
    setReport(reports[reportId]);
  }, [reportId, reports, navigate]);

  if (!report) {
    return null;
  }

  return (
    <Paper>
      <ReportSummary summary={report?.summary || []} />
      {report.analyzed.map((analyze) => (
        <ReportAnalyzer key={analyze.fileId} data={analyze} />
      ))}
    </Paper>
  );
};

export default ReportStatistic;

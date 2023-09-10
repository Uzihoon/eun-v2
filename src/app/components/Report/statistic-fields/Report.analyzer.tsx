import { AnalyzedData } from '~env/models/report';
import { StatisticBox, StatisticTitle } from '../Report.style';
import ReportChange from './Report.change';
import ReportResult from './Report.result';
import ReportSequenceGraph from './Report.sequence.graph';
import ReportSequenceTable from './Report.sequence.table';

interface ReportAnalyzerProps {
  data: AnalyzedData;
}

const ReportAnalyzer: React.FC<ReportAnalyzerProps> = ({ data }) => {
  return (
    <StatisticBox>
      <StatisticTitle>{data.fileId}</StatisticTitle>
      <ReportResult data={data} />
      <ReportSequenceTable data={data.table} targetSeq={data.targetSeq} changeSeq={data.changeSeq} />
      <ReportSequenceGraph
        target={data.seq_target?.split('') || []}
        change={data.chartIndex}
        total={data.tot_count}
        targetSeq={data.targetSeq}
        changeSeq={data.changeSeq}
      />
      <ReportChange
        targetSeq={data.targetSeq}
        changeSeq={data.changeSeq}
        total={data.tot_count}
        changed={data.changed}
      />
    </StatisticBox>
  );
};

export default ReportAnalyzer;

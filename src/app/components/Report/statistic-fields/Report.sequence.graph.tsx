import { NUCLEOTIDE } from '~env/constants';
import { Nucleotide, SequenceType } from '~env/models/report';
import { t } from '~i18n';
import sequenceColorList from '../colors/sequence';
import {
  ReportBox,
  ReportColor,
  ReportColorBox,
  ReportColorList,
  ReportColorText,
  ReportContent,
  ReportText,
  ReportTitleBox,
  SequenceCell,
  SequenceCellBg,
  SequenceColumn,
  SequenceRow,
} from '../Report.style';

interface ReportSequenceGrphProps {
  target: string[];
  change: Nucleotide[];
  total: number;
  targetSeq: string;
  changeSeq: string;
}

const ReportSequenceGraph: React.FC<ReportSequenceGrphProps> = ({ total, target, change, targetSeq, changeSeq }) => {
  return (
    <ReportBox>
      <ReportTitleBox>
        <ReportText>{t.get('report.graph.title')}</ReportText>
        <ReportColorList>
          {sequenceColorList
            .filter((color) => ['all', 'graph'].includes(color.type || ''))
            .map(({ id, title, color }) => (
              <ReportColorBox key={id}>
                <ReportColor color={color} />
                <ReportColorText>{t.get(title)}</ReportColorText>
              </ReportColorBox>
            ))}
        </ReportColorList>
      </ReportTitleBox>
      <ReportContent>
        <SequenceColumn>
          <SequenceCell isTitle />
          {target.map((sequence, i) => (
            <SequenceCell isTitle key={i} isTargetSequence={sequence === targetSeq}>
              {sequence}
            </SequenceCell>
          ))}
        </SequenceColumn>
        <SequenceColumn>
          <SequenceRow>
            {NUCLEOTIDE.map((nuc) => (
              <SequenceCell isTitle key={nuc} isTargetSequence={nuc === changeSeq}>
                {nuc}
              </SequenceCell>
            ))}
          </SequenceRow>
          {change.map((seq, i) => (
            <SequenceRow key={i}>
              {NUCLEOTIDE.map((nuc, j) => {
                if (target[i] === targetSeq) {
                  console.log(nuc, changeSeq);
                }
                const isChangeCell = !!(nuc === changeSeq);

                const value = seq[nuc]! > 0 ? +((seq[nuc]! / total) * 100).toFixed(1) : 0;
                const origin = value > 0 && nuc === target[i];
                const changed = value > 0 && target[i] === targetSeq && isChangeCell;
                const sub = value > 0 && !changed && nuc !== target[i];
                const opacity = value <= 0 ? 1 : Math.max(Math.floor(value / 10) / 10, 0.1);
                const valueColor = value < 0.1 || opacity < 0.6 ? 'normal' : 'white';

                let sequenceType: SequenceType = 'normal';

                if (origin) {
                  sequenceType = 'original';
                } else if (sub) {
                  sequenceType = 'undesired';
                } else if (changed) {
                  sequenceType = 'desired';
                }
                let backGroundColor = sequenceColorList.find((color) => color.id === sequenceType)?.color;

                return (
                  <SequenceCell valueColor={valueColor} key={j} isChangeCell={target[i] === targetSeq && isChangeCell}>
                    <SequenceCellBg opacity={opacity} backGroundColor={backGroundColor} />
                    {value}
                  </SequenceCell>
                );
              })}
            </SequenceRow>
          ))}
        </SequenceColumn>
      </ReportContent>
    </ReportBox>
  );
};

export default ReportSequenceGraph;

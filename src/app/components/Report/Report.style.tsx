import { css, styled } from 'styled-components';
import { SummaryType } from '~env/models/report';
import palette from '~lib/styles/palette';
import space from '~lib/styles/space';
import { themedPalette } from '~lib/styles/theme';
import { center } from '~lib/styles/variables';
import summaryColorList from './colors/summary';

export const ReportContainer = styled.div`
  padding-bottom: ${space[10]};
`;

export const ReportBox = styled.div`
  margin-bottom: ${space[6]};
`;

export const ReportTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${space[1]};
  border-bottom: 1px solid ${themedPalette.border_report_title};
`;

export const ReportText = styled.div`
  color: ${themedPalette.normal_txt};
  font-weight: bold;
  font-size: 0.9em;
`;

export const ReportColorList = styled.div`
  ${center}
`;

export const ReportColorBox = styled.div`
  margin-left: ${space[1]};
  ${center};
`;

export const ReportColor = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 10px;
  height: 10px;
  margin-right: ${space[0]};
`;

export const ReportColorText = styled.div`
  font-size: 0.7em;
  color: ${themedPalette.normal_txt};
`;

export const ReportContent = styled.div`
  padding: ${space[3]} ${space[1]};
  width: 100%;
  align-items: center;
  word-break: break-all;
  text-align: center;
`;

export const StatisticBox = styled.div`
  padding: ${space[3]} 0;
`;

export const StatisticTitle = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: ${space[5]};
  color: ${themedPalette.primary_color};
`;

export const SummaryText = styled.span<{ type?: SummaryType }>`
  font-size: 0.9em;
  font-weight: 700;
  color: ${(props) =>
    props.type ? summaryColorList.find((summary) => summary.id === props.type)?.color : themedPalette.normal_txt};
`;

export const ResultContainer = styled.div`
  width: 100%;
  ${center}
`;

export const ResultBox = styled.div`
  flex: 1;
  text-align: center;
  padding: 0 ${space[1]};
`;

export const ResultTitle = styled.div`
  font-size: 0.8em;
  margin-bottom: ${space[0]};
  color: ${themedPalette.label_txt};
  min-height: 50px;
  ${center}
`;

export const ResultValue = styled.div`
  font-size: 1.4em;
  font-weight: 700;
`;

export const ReportTableBox = styled.div`
  * {
    box-shadow: none !important;
    font-size: 0.8rem !important;
  }

  svg {
    font-size: 1rem !important;
  }
`;

export const SequenceBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Sequence = styled.span<{ color?: string }>`
  display: inline-block;
  width: 13px;
  height: 13px;
  font-size: 0.7rem !important;
  background-color: ${(props) => props.color};
  color: ${(props) => (props.color ? palette.white : themedPalette.normal_txt)};
  ${center}
`;

export const SequenceCell = styled.div<{
  isTitle?: boolean;
  valueColor?: string;
  isChangeCell?: boolean;
  isTargetSequence?: boolean;
}>`
  flex: 1;
  text-align: center;
  height: 27px;
  font-size: 0.8em;
  color: ${(props) => (props.valueColor === 'white' ? palette.white : themedPalette.normal_txt)};
  font-weight: ${(props) => (props.isTitle ? 'bold' : 'normal')};
  position: relative;
  ${(props) =>
    props.isTitle &&
    css`
      background-color: ${themedPalette.bg_table_header};
    `}
  ${(props) =>
    props.isChangeCell &&
    css`
      // border: 2px solid ${palette.red.l500};
    `}

  ${(props) =>
    props.isTargetSequence &&
    css`
      background-color: ${themedPalette.primary_color};
      color: ${palette.white};
    `}
  ${center}
`;

export const SequenceCellBg = styled.div<{ backGroundColor?: string; opacity?: number }>`
  background-color: ${(props) => props.backGroundColor || 'transparent'};
  position: absolute;
  opacity: ${(props) => props.opacity};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const SequenceColumn = styled.div`
  display: flex;
  width: 100%;
`;

export const SequenceRow = styled.div`
  flex: 1;
`;

export const ChangeBox = styled.div`
  width: 100%;
  padding: ${space[2]} 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
export const ChangeSequenceBox = styled.div`
  margin-bottom: ${space[2]};
`;

export const ChangeValue = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  text-align: right;
`;

export const ChangeSequence = styled.div`
  font-size: 0.8em;
  color: ${themedPalette.normal_txt};
  margin-bottom: ${space[1]};
`;

export const ChangeResult = styled.div`
  margin-top: ${space[1]};
  color: ${themedPalette.normal_txt};
  font-size: 2em;
  font-weight: bold;
`;

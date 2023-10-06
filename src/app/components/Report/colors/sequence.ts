import { ReportColor } from '~env/models/report';

const sequenceColorList: ReportColor[] = [
  {
    title: 'report.sequence.color.original',
    id: 'original',
    color: '#ffc352',
    type: 'graph',
  },
  {
    title: 'report.sequence.color.target',
    id: 'desired',
    color: '#61bfad',
    type: 'all',
  },
  {
    title: 'report.sequence.color.sub',
    id: 'undesired',
    color: '#e54b4b',
    type: 'all',
  },
  {
    title: 'report.sequence.color.insertion',
    id: 'insertion',
    color: '#bc9eec',
    type: 'table',
  },
  {
    title: 'report.sequence.color.deletion',
    id: 'deletion',
    color: '#b8b8b8',
    type: 'table',
  },
];

export default sequenceColorList;

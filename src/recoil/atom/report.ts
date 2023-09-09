import { atom } from 'recoil';
import { Reports } from '~env/models/report';
import { REPORTS } from '../key';

export const reportsState = atom<Reports>({
  key: REPORTS,
  default: {},
});

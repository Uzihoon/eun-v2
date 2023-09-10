import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  MRT_FullScreenToggleButton as FullScreenToggleButton,
  MRT_ToggleDensePaddingButton as ToggleDensePaddingButton,
} from 'material-react-table';
import {
  ReportBox,
  ReportColor,
  ReportColorBox,
  ReportColorList,
  ReportColorText,
  ReportContent,
  ReportTableBox,
  ReportText,
  ReportTitleBox,
  Sequence,
  SequenceBox,
} from '../Report.style';
import { ReportTable, SequenceType } from '~env/models/report';
import { themedPalette } from '~lib/styles/theme';
import sequenceColorList from '../colors/sequence';
import { t } from '~i18n';

interface ReportSequenceTableProps {
  data: ReportTable[];
  targetSeq: string;
  changeSeq: string;
}

const ReportSequenceTable: React.FC<ReportSequenceTableProps> = ({ data, targetSeq, changeSeq }) => {
  const columns = useMemo<MRT_ColumnDef<ReportTable>[]>(
    () => [
      {
        accessorKey: 'id',
        header: t.get('report.table.header.id'),
        size: 50,
      },
      {
        accessorKey: 'origin',
        header: t.get('report.table.header.sequence'),
        size: 250,
        Cell: ({ row, cell }) => {
          const sequences = cell.getValue<string>().split('');

          return (
            <SequenceBox>
              {sequences.map((_, i) => {
                const origin = row.original.origin[i];
                const change = row.original.change[i];

                const changed = origin !== change;

                const targetDiff = changed && origin === targetSeq && change === changeSeq;
                const insertion = changed && origin === '-' && change !== '-';
                const deletion = changed && origin !== '-' && change === '-';
                const sub = changed && !targetDiff && origin !== '-' && change !== '-';

                let sequenceType: SequenceType = 'normal';

                if (insertion) {
                  sequenceType = 'insertion';
                } else if (deletion) {
                  sequenceType = 'deletion';
                } else if (sub) {
                  sequenceType = 'undesired';
                } else if (targetDiff) {
                  sequenceType = 'desired';
                }

                const color = sequenceColorList.find((color) => color.id === sequenceType)?.color;

                return (
                  <Sequence key={i} color={color}>
                    {change}
                  </Sequence>
                );
              })}
            </SequenceBox>
          );
        },
      },
      {
        accessorKey: 'length', //normal accessorKey
        header: t.get('report.table.header.length'),
        size: 50,
      },
      {
        accessorKey: 'count',
        header: t.get('report.table.header.count'),
        size: 50,
      },
      {
        accessorKey: 'type',
        header: t.get('report.table.header.type'),
        size: 50,
        filterFn: 'contains',
        Cell: ({ cell }) => {
          const value = +cell.getValue<string>();
          if (value === 0) return 'WT or Sub';
          if (value === 1) return 'INS';
          return 'DEL';
        },
      },
      {
        accessorKey: 'hdr',
        header: t.get('report.table.header.hdr'),
        size: 50,
        Cell: ({ cell }) => {
          const value = +cell.getValue<string>();
          if (value < -1) return 'N/A';
          if (value === -1) return 'X';
          return 'O';
        },
      },
    ],
    [changeSeq, targetSeq],
  );

  return (
    <ReportBox>
      <ReportTitleBox>
        <ReportText>{t.get('report.table.title')}</ReportText>
        <ReportColorList>
          {sequenceColorList
            .filter((color) => ['all', 'table'].includes(color.type || ''))
            .map(({ id, title, color }) => (
              <ReportColorBox key={id}>
                <ReportColor color={color} />
                <ReportColorText>{t.get(title)}</ReportColorText>
              </ReportColorBox>
            ))}
        </ReportColorList>
      </ReportTitleBox>
      <ReportContent>
        <ReportTableBox>
          <MaterialReactTable
            columns={columns}
            data={data}
            enableColumnActions={false}
            enableColumnFilters={false}
            enableTopToolbar={true}
            initialState={{ density: 'compact', pagination: { pageIndex: 0, pageSize: 5 } }}
            renderToolbarInternalActions={({ table }) => (
              <>
                <ToggleDensePaddingButton table={table} />
                <FullScreenToggleButton table={table} />
              </>
            )}
            muiTableHeadCellProps={{
              sx: {
                backgroundColor: themedPalette.bg_table_header,
              },
            }}
          />
        </ReportTableBox>
      </ReportContent>
    </ReportBox>
  );
};

export default ReportSequenceTable;

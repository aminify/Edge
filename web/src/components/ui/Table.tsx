import { darken, lighten } from 'color2k';
import React from 'react';
import styled from 'styled-components/macro';

type TableRecord = { key: string; [otherKey: string]: any };

type TableColumn = {
  title: string;
  dataIndex: string;
  icon?: React.ReactNode;
  render?: (data: any, record: TableRecord) => React.ReactNode;
  onClick?: () => void;
};

type TableProps = {
  columns: TableColumn[];
  data: TableRecord[];
  style?: React.CSSProperties;
  className?: string;
};

function Table({ columns, data, style, className }: TableProps) {
  return (
    <StyledTable {...{ style, className }}>
      <THead>
        <tr>
          {columns.map((col) => (
            <TH
              key={col.title}
              style={{ cursor: 'pointer' }}
              onClick={col.onClick}
            >
              <div style={{ display: 'flex' }}>
                <span style={{ flex: 1 }}>{col.title}</span>
                <span style={{ marginLeft: 10 }}>{col.icon}</span>
              </div>
            </TH>
          ))}
        </tr>
      </THead>
      <tbody>
        {data.map((record) => (
          <TR key={record.key}>
            {columns.map((col) => (
              <TD key={col.title}>
                {col.render
                  ? col.render(record[col.dataIndex], record)
                  : record[col.dataIndex]}
              </TD>
            ))}
          </TR>
        ))}
      </tbody>
    </StyledTable>
  );
}

export default Table;

const THead = styled.thead`
  background-color: ${({ theme }) => lighten(theme.gray, 0.04)};
  user-select: none;
`;

const TH = styled.th`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  :hover {
    background-color: ${({ theme }) => theme.gray};
  }
  :not(:last-child)::after {
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 1em;
    background-color: ${({ theme }) => darken(theme.gray, 0.1)};
    transform: translateY(-50%);
    content: '';
  }
`;

const TD = styled.td`
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
`;

/** table row used only for body */
const TR = styled.tr`
  :hover td {
    transition: background-color 0.1s;
    background-color: ${({ theme }) => lighten(theme.gray, 0.05)};
  }
`;

const StyledTable = styled.table`
  border-spacing: 0;
  background-color: white;
`;

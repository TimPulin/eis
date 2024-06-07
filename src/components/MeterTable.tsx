import styled from 'styled-components';
import { Meter, Area } from '../utils/types';

const TableWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  tr {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  tbody tr {
    cursor: pointer;
  }

  tbody tr:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAccentShadow};
  }
  th {
    padding-inline: 12px;
    padding-block: 8px;
    background-color: ${({ theme }) => theme.colors.backgroundAccentLight};
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 13px;
    font-weight: 500;
  }

  td {
    font-size: 14px;
  }
  td:not(:last-child) {
    padding-inline: 12px;
  }

  th,
  td:not(:first-child) {
    text-align: left;
  }

  td:first-child {
    color: ${({ theme }) => theme.colors.textLight};
    text-align: center;
  }

  td:last-child {
    padding-inline: 12px;
    padding-block: 6px;
    width: 40px;
    height: 40px;
    text-align: center;
  }
`;

type MeterTablePropsType = {
  meters: Array<Meter>;
  areas: Array<Area>;
};

export default function MeterTable(props: MeterTablePropsType) {
  const { meters, areas } = props;
  return (
    <TableWrapper>
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>Тип</th>
            <th>Дата установки</th>
            <th>Автоматический</th>
            <th>Текущие показания</th>
            <th>Адрес</th>
            <th colSpan={2}>Примечание</th>
          </tr>
        </thead>
        <tbody>
          {meters.map((meter, index) => (
            <tr key={meter.id}>
              <td>{index}</td>
              <td>{meter._type[0]}</td>
              <td>{meter.installation_date}</td>
              <td>{meter.is_automatic}</td>
              <td>{meter.initial_values[meter.initial_values.length - 1]}</td>
              <td>address</td>
              <td>{meter.description}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
}

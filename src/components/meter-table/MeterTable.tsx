import { Meter, Area } from '../../utils/types';
import { METERS_LIMIT } from '../../connections/server-connections';

import { TableWrapper, Table } from './meter-table-styles';

type MeterTablePropsType = {
  meters: Array<Meter>;
  areas: Array<Area>;
  currentPageIndex: number;
};

export default function MeterTable(props: MeterTablePropsType) {
  const { meters, areas, currentPageIndex } = props;
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
              <td>{currentPageIndex * METERS_LIMIT + index + 1}</td>
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

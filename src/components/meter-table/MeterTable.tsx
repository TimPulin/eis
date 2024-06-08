import { observer } from 'mobx-react';
import metersStore from '../../stores/meters-store';
import areasStore from '../../stores/areas-store';

import { METERS_LIMIT } from '../../connections/server-connections';

import { TableWrapper, Table, MeterType } from './meter-table-styles';

type MeterTablePropsType = {
  currentPageIndex: number;
};

const MeterTable = observer((props: MeterTablePropsType) => {
  const { currentPageIndex } = props;

  const getMeterType = (type: string): { iconId: string; title: string } => {
    switch (type) {
      case 'HotWaterAreaMeter':
        return { iconId: 'iconHotWater', title: 'ГВС' };
      case 'ColdWaterAreaMeter':
        return { iconId: 'iconColdWater', title: 'ХВС' };
      default:
        return { iconId: '', title: '' };
    }
  };

  const renderMeterType = (type: string) => {
    const { iconId, title } = getMeterType(type);
    return (
      <MeterType>
        <svg width={9}>
          <use href={`#${iconId}`} />
        </svg>
        <span>{title}</span>
      </MeterType>
    );
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };

  const isAutomatic = (isAutomatic: boolean | null) => {
    return isAutomatic ? 'Да' : 'Нет';
  };

  const getAreaAddress = (areaId: string) => {
    const area = areasStore.getAreaById(areaId);
    if (area) {
      return `${area.house.address},  ${area.str_number_full}`;
    }
  };

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
          {metersStore.metersList.map((meter, index) => (
            <tr key={meter.id}>
              <td>{currentPageIndex * METERS_LIMIT + index + 1}</td>
              <td>{renderMeterType(meter._type[0])}</td>
              <td>{formatDate(meter.installation_date)}</td>
              <td>{isAutomatic(meter.is_automatic)}</td>
              <td>{meter.initial_values[meter.initial_values.length - 1]}</td>
              <td>{getAreaAddress(meter.area.id)}</td>
              <td>{meter.description}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
});

export default MeterTable;

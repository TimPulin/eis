import { Meter, Area } from '../utils/types';
type CounterTablePropsType = {
  meters: Array<Meter>;
  areas: Array<Area>;
};

export default function CounterTable(props: CounterTablePropsType) {
  const { meters, areas } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Тип</th>
          <th>Дата установки</th>
          <th>Автоматический</th>
          <th>Текущие показания</th>
          <th>Адрес</th>
          <th>Примечание</th>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}

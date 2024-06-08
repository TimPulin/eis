import { types, Instance } from 'mobx-state-tree';

const MeterModel = types.model('Meter', {
  id: types.string,
  area: types.model({ id: types.string }),
  brand_name: types.maybeNull(types.string),
  communication: types.string,
  description: types.maybeNull(types.string),
  initial_values: types.array(types.number),
  installation_date: types.string,
  is_automatic: types.maybeNull(types.boolean),
  model_name: types.maybeNull(types.string),
  serial_number: types.string,
  _type: types.array(types.string),
});

export type MeterInstance = Instance<typeof MeterModel>;

const MetersStore = types
  .model('MeterStore', {
    meters: types.array(MeterModel),
  })
  .actions((self) => ({
    addMeter(meter: MeterInstance) {
      self.meters.push(meter);
    },

    setMeters(meters: Array<MeterInstance>) {
      self.meters.replace(meters);
    },
  }))
  .views((self) => ({
    get metersList() {
      return self.meters;
    },
  }));

export default MetersStore.create({ meters: [] });

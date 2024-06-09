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
    _isLoading: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    addMeter(meter: MeterInstance) {
      self.meters.push(meter);
    },

    setMeters(meters: Array<MeterInstance>) {
      self.meters.replace(meters);
    },

    setLoading(isLoading: boolean) {
      self._isLoading = isLoading;
    },
  }))
  .views((self) => ({
    get metersList() {
      return self.meters;
    },

    get isLoading() {
      return self._isLoading;
    },
  }));

export default MetersStore.create({ meters: [] });

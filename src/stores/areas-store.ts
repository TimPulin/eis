import { types, Instance } from 'mobx-state-tree';

const AreaModel = types.model('Area', {
  id: types.string,
  house: types.model({
    id: types.string,
    address: types.string,
    fias_addrobjs: types.array(types.string),
  }),
  number: types.number,
  str_number: types.string,
  str_number_full: types.string,
});

type AreaInstance = Instance<typeof AreaModel>;

const AreasStore = types
  .model('AreaStore', {
    areas: types.array(AreaModel),
  })
  .actions((self) => ({
    addArea(area: AreaInstance) {
      self.areas.push(area);
    },

    setAreas(areas: Array<AreaInstance>) {
      self.areas.replace(areas);
    },
  }))
  .views((self) => ({
    getAreas() {
      return self.areas;
    },
  }));

export default AreasStore.create({ areas: [] });

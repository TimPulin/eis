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

export type AreaInstance = Instance<typeof AreaModel>;

const AreasStore = types
  .model('AreaStore', {
    areas: types.array(AreaModel),
  })
  .actions((self) => ({
    addArea(area: AreaInstance) {
      self.areas.push(area);
    },

    setAreas(areas: Array<AreaInstance>) {
      const areaSet = new Set([...self.areas, ...areas]);
      self.areas.replace(Array.from(areaSet));
    },
  }))
  .views((self) => ({
    get areasList() {
      return self.areas;
    },
    getAreaById(areaId: string) {
      return self.areas.find((area) => area.id === areaId);
    },
  }));

export default AreasStore.create({ areas: [] });

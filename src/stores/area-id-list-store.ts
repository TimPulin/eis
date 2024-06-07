import { types } from 'mobx-state-tree';

const AreaIdListStore = types
  .model('AreaIdListStore', {
    areaIdList: types.array(types.string),
  })
  .actions((self) => ({
    addAreaId(areaId: string) {
      if (self.areaIdList.includes(areaId)) return;
      self.areaIdList.push(areaId);
    },

    setAreaIdList(areaIdList: Array<string>) {
      const areaIdSet = new Set([...self.areaIdList, ...areaIdList]);
      self.areaIdList.replace(Array.from(areaIdSet));
    },
  }))
  .views((self) => ({
    getAreaIdList() {
      return self.areaIdList;
    },
    isAreaInList(areaId: string) {
      return self.areaIdList.includes(areaId);
    },
  }));

export default AreaIdListStore.create({ areaIdList: [] });

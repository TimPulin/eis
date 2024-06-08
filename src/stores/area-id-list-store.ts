import { types, Instance } from 'mobx-state-tree';

const AreaIdListModel = types.array(types.string);

export type AreaIdListInstance = Instance<typeof AreaIdListModel>;

const AreaIdListStore = types
  .model('AreaIdListStore', {
    areaIdList: AreaIdListModel,
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
    getNewAreaIdList(areaIdList: Array<string>) {
      const newList: Array<string> = [];
      const idList = Array.from(new Set(areaIdList));

      idList.forEach((areaId) => {
        if (!self.areaIdList.includes(areaId)) newList.push(areaId);
      });
      return newList;
    },
  }));

export default AreaIdListStore.create({ areaIdList: [] });

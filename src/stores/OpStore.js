import {extendObservable} from 'mobx';

class OpStore {
  constructor() {
    extendObservable(this, {
      "opValue": "",
      "lastBuy": null,
      "lastSell": null
    });
  }
}

const opStore = new OpStore();

export default opStore;

import {extendObservable, action} from 'mobx';

//class CardsStore {
//    cards = observable({
//      "b2u": {},
//      "mercado": "xau",
//      "foxit": {}
//    });
//};

class CardsStore {
  constructor() {
    extendObservable(this, {
      "b2u": {id: null,  low: null, quote: null, high: null, date: null },
      "mercado": {id: null,  low: null, quote: null, high: null, date: null },
      "foxbit": {id: null,  low: null, quote: null, high: null, date: null }
    });
  }
}

const cardsStore = new CardsStore();

export default cardsStore;

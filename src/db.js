import Dexie from 'dexie';

const db = new Dexie('PwaCryptoquotes');
db.version(1).stores({ ops: '++id, last_buy, last_sell' });

export default db;

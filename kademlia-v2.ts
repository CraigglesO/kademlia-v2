import * as crypto from 'crypto';
import { EventEmitter } from 'events';
import * as uuid from 'uuid';

const ALPHA       = 3,
      B_LENGTH    = 160,
      K           = 20,
      T_EXPIRE    = 86400,
      T_REFRESH   = 3600,
      T_REPLICATE = 3600,
      T_REPUBLISH = 86400,
      PING        = new Buffer([0x00, 0x00, 0x00, 0x00, 0x00]),
      STORE       = new Buffer([0x00, 0x00, 0x00, 0x00, 0x00]),
      FIND_NODE   = new Buffer([0x00, 0x00, 0x00, 0x00, 0x00]),
      FIND_VALUE  = new Buffer([0x00, 0x00, 0x00, 0x00, 0x00]);


class KDM extends EventEmitter {
  
}

export default KDM

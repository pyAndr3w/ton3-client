"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const t = __importStar(require("io-ts"));
const blockIdExt = t.type({
    '@type': t.literal('ton.blockIdExt'),
    workchain: t.number,
    shard: t.string,
    seqno: t.number,
    root_hash: t.string,
    file_hash: t.string,
});
const addressInformation = t.type({
    balance: t.union([t.number, t.string]),
    state: t.union([t.literal('active'), t.literal('uninitialized'), t.literal('frozen')]),
    data: t.string,
    code: t.string,
    last_transaction_id: t.type({
        '@type': t.literal('internal.transactionId'),
        lt: t.string,
        hash: t.string,
    }),
    block_id: blockIdExt,
    sync_utime: t.number,
});
const bocResponse = t.type({
    '@type': t.literal('ok'),
});
const estimateFee = t.type({
    '@type': t.literal('query.fees'),
    source_fees: t.type({
        '@type': t.literal('fees'),
        in_fwd_fee: t.number,
        storage_fee: t.number,
        gas_fee: t.number,
        fwd_fee: t.number,
    }),
});
const runGetMethod = t.type({
    gas_used: t.number,
    exit_code: t.number,
    stack: t.array(t.unknown),
});
const messageData = t.union([
    t.type({
        '@type': t.literal('msg.dataRaw'),
        body: t.string,
    }),
    t.type({
        '@type': t.literal('msg.dataText'),
        text: t.string,
    }),
    t.type({
        '@type': t.literal('msg.dataDecryptedText'),
        text: t.string,
    }),
    t.type({
        '@type': t.literal('msg.dataEncryptedText'),
        text: t.string,
    }),
]);
const message = t.type({
    source: t.string,
    destination: t.string,
    value: t.string,
    fwd_fee: t.string,
    ihr_fee: t.string,
    created_lt: t.string,
    body_hash: t.string,
    msg_data: messageData,
});
const transaction = t.type({
    data: t.string,
    utime: t.number,
    transaction_id: t.type({
        lt: t.string,
        hash: t.string,
    }),
    fee: t.string,
    storage_fee: t.string,
    other_fee: t.string,
    in_msg: t.union([t.undefined, message]),
    out_msgs: t.array(message),
});
const getTransactions = t.array(transaction);
const getMasterchain = t.type({
    state_root_hash: t.string,
    last: blockIdExt,
    init: blockIdExt,
});
const getConfigParam = t.type({
    '@type': t.literal('configInfo'),
    config: t.type({
        '@type': t.literal('tvm.cell'),
        bytes: t.string,
    }),
});
const getShards = t.type({
    shards: t.array(blockIdExt),
});
const blockShortTxt = t.type({
    '@type': t.literal('blocks.shortTxId'),
    mode: t.number,
    account: t.string,
    lt: t.string,
    hash: t.string,
});
const getBlockTransactions = t.type({
    id: blockIdExt,
    req_count: t.number,
    incomplete: t.boolean,
    transactions: t.array(blockShortTxt),
});
exports.default = {
    message,
    getTransactions,
    transaction,
    blockIdExt,
    addressInformation,
    estimateFee,
    runGetMethod,
    bocResponse,
    getConfigParam,
};
//# sourceMappingURL=Codecs.js.map
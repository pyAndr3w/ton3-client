import { Address, Coins } from 'ton3-core';
import { TonTransaction } from './types';
export declare type TonClientParameters = {
    endpoint: string;
    timeout?: number;
    apiKey?: string;
};
export declare type TonClientResolvedParameters = {
    endpoint: string;
};
export declare class TonClient {
    #private;
    readonly parameters: TonClientResolvedParameters;
    constructor(parameters: TonClientParameters);
    isTestnet(): boolean;
    callGetMethodWithError(address: Address, name: string, params?: any[]): Promise<{
        gasUsed: number;
        stack: any[];
        exitCode: number;
    }>;
    getTransactions(address: Address, opts: {
        limit: number;
        lt?: string;
        hash?: string;
        to_lt?: string;
        inclusive?: boolean;
    }): Promise<TonTransaction[]>;
    getBalance(address: Address): Promise<Coins>;
    isContractDeployed(address: Address): Promise<boolean>;
    getContractState(address: Address): Promise<{
        balance: Coins;
        state: "active" | "uninitialized" | "frozen";
        code: Uint8Array | null;
        data: Uint8Array | null;
        lastTransaction: {
            lt: string;
            hash: string;
        } | null;
        blockId: {
            workchain: number;
            shard: string;
            seqno: number;
        };
        timestamp: number;
    }>;
}

import { GasInfo } from "../GasInfo";
export declare const MAX_RETRIES = 10;
export declare const RETRY_INTERVAL = 1000;
export declare const mnemonicToAddress: (mnemonic: string) => Promise<string>;
export declare const transferTokensTo: (toAddress: string) => Promise<boolean>;
export declare const init: (mnemonic: string, endpoint: string) => Promise<any>;
export declare const sendTransaction: (req_type: string, ep_name: string, data: any, gas_info: GasInfo) => Promise<any>;
export declare const query: (url: string) => Promise<any>;
//# sourceMappingURL=cosmos.d.ts.map
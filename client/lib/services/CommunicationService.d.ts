import { GasInfo } from "../types/GasInfo";
import { API } from "../API";
import { MessageResponse } from "../types/MessageResponse";
import { Message } from "../types/Message";
interface MessageQueueItem<T, R> {
    message: Message<T>;
    resolve?: (value: MessageResponse<R>) => void;
    reject?: (reason: any) => void;
    gasInfo: GasInfo;
    transactionId: number;
}
export declare class CommunicationService {
    #private;
    static create(api: API): CommunicationService;
    private constructor();
    setMaxMessagesPerTransaction(count: number): void;
    startTransaction(): void;
    endTransaction(): void;
    withTransaction(fn: Function): any;
    sendMessage<T, R>(message: Message<T>, gasInfo: GasInfo): Promise<MessageResponse<R>>;
    checkMessageQueueNeedsTransmit(): void;
    transmitTransaction(messages: MessageQueueItem<any, any>[]): Promise<void>;
}
export {};
//# sourceMappingURL=CommunicationService.d.ts.map
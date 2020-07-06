import {TxResult} from "./TxResult";

export interface TxMessage<T> {
    type: string
    value: T
    resolve?: (value: TxResult<any>) => void
    reject?: (reason: any) => void
}

export interface TxCreateMessage {
    Key: string
    Value: string
    Owner: string
    Lease: string
    UUID: string
}

export interface TxReadMessage {
    Key: string
    Owner: string
    UUID: string
}

export interface TxDeleteMessage {
    Key: string
    Owner: string
    UUID: string
}


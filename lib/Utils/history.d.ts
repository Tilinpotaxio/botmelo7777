import { proto } from '../../WAProto';
import { Chat, Contact, InitialReceivedChatsState } from '../Types';
export declare const downloadHistory: (msg: proto.IHistorySyncNotification) => Promise<proto.HistorySync>;
export declare const processHistoryMessage: (item: proto.IHistorySync, historyCache: Set<string>, recvChats: InitialReceivedChatsState) => {
    chats: Chat[];
    contacts: Contact[];
    messages: proto.IWebMessageInfo[];
    didProcess: boolean;
};
export declare const downloadAndProcessHistorySyncNotification: (msg: proto.IHistorySyncNotification, historyCache: Set<string>, recvChats: InitialReceivedChatsState) => Promise<{
    chats: Chat[];
    contacts: Contact[];
    messages: proto.IWebMessageInfo[];
    didProcess: boolean;
}>;

import IDropHandler from "./drophandler";
export interface IDropContainer {
    HandleDragEnter(event: DragEvent): void;
    HandleDragLeave(event: DragEvent): void;
    HandleDragOver(event: DragEvent): void;
    HandleDrop(event: DragEvent): void;
    RegisterDropHandler(handler: IDropHandler): void;
}
export declare class DropContainer implements IDropContainer {
    private dropHandlers;
    HandleDragEnter(event: DragEvent): void;
    HandleDragLeave(event: DragEvent): void;
    HandleDragOver(event: DragEvent): void;
    HandleDrop(event: DragEvent): void;
    RegisterDropHandler(handler: IDropHandler): void;
    private FindEligibleDropHandlers;
}

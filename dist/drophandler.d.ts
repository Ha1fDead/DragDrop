export default interface IDropHandler {
    CanHandle(types: string[]): boolean;
    HandleDragEnter(event: DragEvent): void;
    HandleDragLeave(event: DragEvent): void;
    HandleDragOver(event: DragEvent): void;
    HandleDrop(event: DragEvent): void;
}

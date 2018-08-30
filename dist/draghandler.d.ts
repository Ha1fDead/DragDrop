export default interface IDragHandler {
    HandleDrag(event: DragEvent): void;
    HandleDragEnd(event: DragEvent): void;
    HandleDragStart(event: DragEvent): void;
}

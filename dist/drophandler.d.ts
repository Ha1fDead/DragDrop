/**
 * The actual "Drop" implementation.
 *
 * "Drag" is self-contained, because the entity being "Dragged" describes itself
 * "Drop", however, is a one-to-many problem. A single "Drop Container" can handle many different operations.
 *
 * These operations are specified by the DropHandler
 */
export interface IDropHandler {
    /**
     * Determines if this DropHandler can handle any of the types within the string
     * @param types from the DragEvent DataTransfer that need to be handled
     */
    CanHandle(types: string[]): boolean;
    /**
     * Called from DropContainers. This should be where the Drag event is actually handled.
     *
     * Will throw an exception if an invalid DragEvent is passed into it.
     */
    HandleDragEnter(event: DragEvent): void;
    /**
     * Called from DropContainers. This should be where the Drag event is actually handled.
     *
     * Will throw an exception if an invalid DragEvent is passed into it.
     */
    HandleDragLeave(event: DragEvent): void;
    /**
     * Called from DropContainers. This should be where the Drag event is actually handled.
     *
     * Will throw an exception if an invalid DragEvent is passed into it.
     */
    HandleDragOver(event: DragEvent): void;
    /**
     * Called from DropContainers. This should be where the Drag event is actually handled.
     *
     * Will throw an exception if an invalid DragEvent is passed into it.
     */
    HandleDrop(event: DragEvent): void;
}

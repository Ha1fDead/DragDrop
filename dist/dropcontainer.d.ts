import { IDropHandler } from "./drophandler";
/**
 * Implies that "Dragged" events can be "Dropped" into this
 *
 * For HTML, this will bind straight to the Container object (Inventory list, Canvas, etc.)
 * For Virtual (Canvas), this will be implemented and injected into Entities
 */
export interface IDropContainer {
    /**
     * Fired when a dragged element or text selection enters a valid drop target.
     *
     * This method should set "DropEffect" according to the types within the DataTransfer object.
     * Use this to style either the element being dragged (event source) or the drop target (event target).
     *
     * Behavior:
     * - To make an element a valid "Drop Target" for a given "Draggable" event, the event must be prevented in this method.
     */
    HandleDragEnter(event: DragEvent): void;
    /**
     * Fired when a dragged element or text selection leaves a valid drop target.
     *
     * This method should set "DropEffect" back to "None".
     *
     * Behavior:
     * - This method DOES NOT fire if the Drag operation ends (e.g. you "Drop" the Draggable)
     */
    HandleDragLeave(event: DragEvent): void;
    /**
     * Fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).
     *
     * Use this method to update coordinate positions, styling, etc.
     *
     * If the DropContainer also listens for MouseMovement, it is recommended to call that relevant function.
     *
     * Behavior:
     * - To make an element a valid "Drop Target" for a given "Draggable" event, the event must be prevented in this method.
     * - Avoid doing heavy lifting in this method, since it fires very often
     */
    HandleDragOver(event: DragEvent): void;
    /**
     * Fired when an element or text selection is dropped on a valid drop target.
     *
     * This should handle the "Business Logic" of dropping the object, while also cleaning up any excess data/state from the Drag operation
     *
     * Behavior:
     * - To make an element a valid "Drop Target", you must Prevent the event in the both the "HandleDragOver" and "HandleDragEnter" functions
     */
    HandleDrop(event: DragEvent): void;
    /**
     * Registers a drop handler that can be used by the Drop Container
     * @param handler to be registered
     */
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

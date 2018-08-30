import { DraggableDropEffectsTypes } from "./dragdropdict";
import IDropHandler from "./drophandler";

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

export class DropContainer implements IDropContainer {
	private dropHandlers: IDropHandler[] = [];

	public HandleDragEnter(event: DragEvent): void {
		const eligibleHandlers = this.FindEligibleDropHandlers(event);
		if (eligibleHandlers.length === 0) {
			// There isn't a DragHandler that can handle this
			// Thus, we prevent the Drag from firing
			event.preventDefault();
			return;
		}

		if (eligibleHandlers.length > 1) {
			throw new Error("I don't know how to handle multiple drop handlers for a given type");
		}

		eligibleHandlers[0].HandleDragEnter(event);
		event.preventDefault();
	}
	public HandleDragLeave(event: DragEvent): void {
		// After an Event leaves a DropContainer, we ALWAYS want to set the DropEffect to "None"
		event.dataTransfer.dropEffect = DraggableDropEffectsTypes.None;

		const eligibleHandlers = this.FindEligibleDropHandlers(event);
		if (eligibleHandlers.length === 0) {
			return;
		}

		if (eligibleHandlers.length > 1) {
			throw new Error("I don't know how to handle multiple drop handlers for a given type");
		}

		eligibleHandlers[0].HandleDragLeave(event);
	}

	public HandleDragOver(event: DragEvent): void {
		const eligibleHandlers = this.FindEligibleDropHandlers(event);
		if (eligibleHandlers.length === 0) {
			return;
		}

		if (eligibleHandlers.length > 1) {
			throw new Error("I don't know how to handle multiple drop handlers for a given type");
		}

		eligibleHandlers[0].HandleDragOver(event);
		event.preventDefault();
	}

	public HandleDrop(event: DragEvent): void {
		// prevent click / touch / pointer events
		event.preventDefault();

		const eligibleHandlers = this.FindEligibleDropHandlers(event);
		if (eligibleHandlers.length === 0) {
			return;
		}

		if (eligibleHandlers.length > 1) {
			throw new Error("I don't know how to handle multiple drop handlers for a given type");
		}

		eligibleHandlers[0].HandleDrop(event);
	}

	public RegisterDropHandler(handler: IDropHandler): void {
		this.dropHandlers.push(handler);
	}

	private FindEligibleDropHandlers(event: DragEvent): IDropHandler[] {
		return this.dropHandlers.filter((handler) => handler.CanHandle(event.dataTransfer.types));
	}
}

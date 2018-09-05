
/**
 * An element or entity that can be Dragged
 * 
 * In HTML, the direct "Draggable" element will bind to the browser events to broadcast these
 * In Virtual (Canvas), the "Draggable" Entity will be discovered by the Canvas "DragHandler", which will populate associated Events
 * 
 * Note Regarding Multi-Drag:
 * 
 * Multi-Drag is not currently supported. Imagine a large touch-enabled device at a table, 
 * with multiple people dragging and dropping their characters to move them. This isn't enabled.
 * https://github.com/Shopify/draggable/issues/77
 * 
 * Note:
 * 
 * For HTML elements, don't forget to set "draggable=true" to enable dragging
 */
export interface IDragHandler {
	/**
	 * Fired when an element or text selection is being dragged. Potentially continuous, and fires every "couple hundred of MS"
	 * 
	 * This method should be used to update position coordinates and other real-time operations.
	 * 
	 * Behavior:
	 * - If you prevent the event, no drag operation will be enabled
	 * - Avoid doing heavy lifting in this method, since it fires very often
	 */
	HandleDrag(event: DragEvent): void;

	/**
	 * Fired when a drag operation is being ended (for example, by releasing a mouse button or hitting the escape key)
	 * 
	 * This is the final event fired in the drag and drop event chain, fired after a successful "Drop"
	 * 
	 * This method should clean up the "Drag" operation from the context of the "Dragged" element. E.g. if the operation is a "Move", the element should be removed
	 * 
	 * Behavior:
	 * - Does not fire from system-level drags (e.g. desktop files)
	 */
	HandleDragEnd(event: DragEvent): void;
	/**
	 * Fired when the user starts dragging an element or text selection. (See Starting a Drag Operation.)
	 * 
	 * This method should set the "DataTransfer" and EffectAllowed types on the event.DataTransfer object
	 * 
	 * Behavior:
	 * - Does not fire from system-level drags (e.g. desktop files)
	 * - If you do not prevent the event, drag over and drag events will continue to be fired from it
	 */
	HandleDragStart(event: DragEvent): void;
}

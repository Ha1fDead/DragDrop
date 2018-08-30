/**
 * Enum representing all of the types for "effectAllowed" properties on DataTransfer object
 */
export var DraggableDropEffectsTypes;
(function (DraggableDropEffectsTypes) {
    /**
     * Nothing will happen if the dragged element is dropped here
     */
    DraggableDropEffectsTypes["None"] = "none";
    /**
     * The "Default" drag and drop, no specification, unknown behavior. This appears to only happen in Firefox.
     */
    DraggableDropEffectsTypes["Unitialized"] = "uninitialized";
    /**
     * The dragged element will be copied into the drop container
     */
    DraggableDropEffectsTypes["Copy"] = "copy";
    /**
     * The dragged element will be moved into the drop container
     * (and the previous element should be removed)
     */
    DraggableDropEffectsTypes["Move"] = "move";
    /**
     * The dragged element will be linked to the drop container
     */
    DraggableDropEffectsTypes["Link"] = "link";
})(DraggableDropEffectsTypes || (DraggableDropEffectsTypes = {}));
/**
 * Set from the "Draggable" element, and indicates what operations this Element is permitted
 */
export var DraggableEffectAllowedTypes;
(function (DraggableEffectAllowedTypes) {
    /**
     * no operation is permitted
     */
    DraggableEffectAllowedTypes["None"] = "none";
    /**
     * The "Default" drag and drop
     */
    DraggableEffectAllowedTypes["Unitialized"] = "uninitialized";
    /**
     * Copy only is permitted
     */
    DraggableEffectAllowedTypes["Copy"] = "copy";
    /**
     * Move only is permitted
     */
    DraggableEffectAllowedTypes["Move"] = "move";
    /**
     * Link only is permitted
     */
    DraggableEffectAllowedTypes["Link"] = "link";
    /**
     * Copy or Move is permitted
     */
    DraggableEffectAllowedTypes["CopyMove"] = "copyMove";
    /**
     * Copy or Link is permitted
     */
    DraggableEffectAllowedTypes["CopyLink"] = "copyLink";
    /**
     * Link or Move is permitted
     */
    DraggableEffectAllowedTypes["LinkMove"] = "linkMove";
    /**
     * Copy, Link, or Move is permitted
     */
    DraggableEffectAllowedTypes["All"] = "all";
})(DraggableEffectAllowedTypes || (DraggableEffectAllowedTypes = {}));
export const DraggableEffectMoveTypes = [
    DraggableEffectAllowedTypes.Move,
    DraggableEffectAllowedTypes.LinkMove,
    DraggableEffectAllowedTypes.CopyMove,
    DraggableEffectAllowedTypes.All,
];
export const DraggableEffectCopyTypes = [
    DraggableEffectAllowedTypes.All,
    DraggableEffectAllowedTypes.Copy,
    DraggableEffectAllowedTypes.CopyLink,
    DraggableEffectAllowedTypes.CopyMove,
];
//# sourceMappingURL=dragdropdict.js.map
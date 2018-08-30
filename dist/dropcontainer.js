import { DraggableDropEffectsTypes } from "./dragdropdict";
export class DropContainer {
    constructor() {
        this.dropHandlers = [];
    }
    HandleDragEnter(event) {
        const eligibleHandlers = this.FindEligibleDropHandlers(event);
        if (eligibleHandlers.length === 0) {
            event.preventDefault();
            return;
        }
        if (eligibleHandlers.length > 1) {
            throw new Error("I don't know how to handle multiple drop handlers for a given type");
        }
        eligibleHandlers[0].HandleDragEnter(event);
        event.preventDefault();
    }
    HandleDragLeave(event) {
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
    HandleDragOver(event) {
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
    HandleDrop(event) {
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
    RegisterDropHandler(handler) {
        this.dropHandlers.push(handler);
    }
    FindEligibleDropHandlers(event) {
        return this.dropHandlers.filter((handler) => handler.CanHandle(event.dataTransfer.types));
    }
}
//# sourceMappingURL=dropcontainer.js.map
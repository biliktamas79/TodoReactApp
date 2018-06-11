export class TodoItem {
    public constructor(public name: string, public description?: string) {
        // super();
    }
}

// tslint:disable-next-line:max-classes-per-file
class State {
    public items: TodoItem[];

    public constructor() {
        // super();
        this.items = [];
    }
}

const ActionNames = {
    ListItems: "List items"
}

export const Actions = {
    listItems: () => {
        type: ActionNames.ListItems
    }
};

export const mainReducer = (state: State | undefined, action: any) => {
    if (typeof state === "undefined") {
        return {
            items: []
        };
    }

    switch (action.type) {
        case ActionNames.ListItems:
            for (let item of state.items) {
                console.log(item.name + ": " + item.description);
            }

            return state;

        default:
            return state;
    }
};
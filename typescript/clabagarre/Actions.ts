class Actions {

    private name: string;
    private range: ActionsRange;
    
    public constructor(name: string, range: ActionsRange) {
        this.name = name;
        this.range = range;
    }

    public getName(): string {
        return this.name;
    }

    public getRange(): ActionsRange {
        return this.range;
    }
}

class ActionsRange
{
    private min: number;
    private max: number;

    public constructor(min: number, max: number = min) {
        this.min = min;
        this.max = max;
    }

    public getMin(): number {
        return this.min;
    }

    public getMax(): number {
       return this.max;
    }
}

export { Actions, ActionsRange };
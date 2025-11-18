import { Actions } from "./Actions";
import { getRandomInt, mkCritialStricke } from "./EntityRegistry";

class BaseEntity {
    private id: string;
    private health: number;
    private attackSpeed: number;
    private actions: Actions[];
    private oldestActionIndex: number = 0;

    public constructor(id: string, health: number, attackSpeed: number, actions: Actions[]) {
        this.id = id;
        this.health = health;
        this.attackSpeed = attackSpeed;
        this.actions = actions;
    }

    public isAlive(): boolean {
        return this.health > 0;
    }

    public getOldestActionIndex(): number {
        return this.oldestActionIndex;
    }

    public chooseAction(): Actions {
        if(this.actions.length == this.oldestActionIndex+1) {
            this.oldestActionIndex = 0;
        }
        else {
            this.oldestActionIndex += 1;
        }
        const action = this.actions[this.oldestActionIndex];
        return action;
    }

    public takeDamage(damage: number): void {
        if(!(this.actions[this.oldestActionIndex].getRange().getMax() < 0) && damage > 0) {
            const isCritical = mkCritialStricke();
            if(isCritical) {
                damage *= 2;
            }
            console.log('COUP CRITIQUE !');
            this.health -= damage;
        }
    }

    public performTurn(target: BaseEntity): void {
        const action = this.chooseAction();
        const actionRange = action.getRange();
        const damage = getRandomInt(actionRange.getMin(), actionRange.getMax());
        target.takeDamage(damage);
    }


    public getId(): string {
        return this.id;
    }

    public getHealth(): number {
        return this.health;
    }

    public getAttackSpeed(): number {
        return this.attackSpeed;
    }

    public getActions(): Actions[] {
        return this.actions;
    }
}

export { BaseEntity };
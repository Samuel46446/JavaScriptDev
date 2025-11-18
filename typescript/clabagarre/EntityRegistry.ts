import { Actions, ActionsRange } from "./Actions";
import { BaseEntity } from "./BaseEntity";

// Warrior entity with its actions
const atomic_commit = new Actions("atomic_commit", new ActionsRange(10));
const integrity_destroyer = new Actions("integrity_destroyer", new ActionsRange(20));
const interface_shield = new Actions("interface_shield", new ActionsRange(-1));
const warrior = new BaseEntity("warrior", 150, 80, [atomic_commit, integrity_destroyer, interface_shield]);

// Mage entity with its actions
const contrast = new Actions("contrast", new ActionsRange(12, 15));
const alternate = new Actions("alternate", new ActionsRange(18));
const mage = new BaseEntity("mage", 160, 60, [contrast, alternate]);


// Archer entity with its actions
const specificity = new Actions("specificity", new ActionsRange(10, 15));
const overflow = new Actions("overflow", new ActionsRange(20));
const archer = new BaseEntity("archer", 150, 50, [specificity, overflow]);

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function mkCritialStricke(): boolean {
  return getRandomInt(1, 10) == 1;
}

export function determineAttackOrder(
  p1: BaseEntity,
  p2: BaseEntity
): { first: BaseEntity, second: BaseEntity } {
	// 1. Calculate the probability for p1 to attack first
  const totalSpeed = p1.getAttackSpeed() + p2.getAttackSpeed();
  const p1InitiativeChance = p1.getAttackSpeed() / totalSpeed;
  
   // 2. "Roll the dice"
  if (Math.random() < p1InitiativeChance) {
	  // P1 wins initiative
    return { first: p1, second: p2 };
  } else {
    // P2 wins initiative
    return { first: p2, second: p1 };
  }
}

export { warrior, mage, archer };
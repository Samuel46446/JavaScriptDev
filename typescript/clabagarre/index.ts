import * as EntityRegistry from "./EntityRegistry";

const E1 = EntityRegistry.warrior;
const E2 = EntityRegistry.archer;

console.log(`Battle Start: ${E1.getId()} vs ${E2.getId()}`);
console.log(`${E1.getId()} Health: ${E1.getHealth()} | ${E2.getId()} Health: ${E2.getHealth()}`);

while(E1.isAlive() && E2.isAlive()) {
    const { first, second } = EntityRegistry.determineAttackOrder(E1, E2);
    first.performTurn(second);
    console.log(`${first.getId()} attacks ${second.getId()} with ${first.getActions()[first.getOldestActionIndex()].getName()}`);
    if(second.getHealth() <= 0) {
        console.log(`${first.getId()} wins!`);
        break;
    }
    second.performTurn(first);
    console.log(`${second.getId()} attacks ${first.getId()} with ${second.getActions()[second.getOldestActionIndex()].getName()}`);
    if(first.getHealth() <= 0) {
        console.log(`${second.getId()} wins!`);
        break;
    }
    console.log(`${E1.getId()} Health: ${E1.getHealth()} | ${E2.getId()} Health: ${E2.getHealth()}`);
}
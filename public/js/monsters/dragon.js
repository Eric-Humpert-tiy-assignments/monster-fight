'use strict';

(function(context) {

  function Dragon(name, maxHitpoints, imageUrl) {
    context.Monster.call(this, name, maxHitpoints, imageUrl);
  }

  Dragon.prototype = new context.Monster();

  Dragon.create = function() {
    return new Dragon('Red Dragon', '25', '/images/dragon.jpg');
  }

  Dragon.prototype.takeDamage = function(damage) {
    this.hitpoints -= damage;

    if (damage === 0) {
      return "The Red Dragon's scales protect it from the attack.";
    } else if (damage > 3) {
      return "Nice hit! the Red Dragon took " + damage + " and has " + this.hitpoints + " left but it's not dead yet so be careful!";
    } else {
      return " The dragon took a hit of " + damage + ", it has " + this.hitpoints + " remaining and is ready for the next attack.";
    }

  }

  context.BadMonsters.push(Dragon);

})(window.MonsterFight);

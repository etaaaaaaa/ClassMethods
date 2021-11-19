export default class Character {
    constructor(name, type) {
        const obj = { 
        'Bowman':  [25,25], 
        'Swordsman':[40,10], 
        'Magician':[10,40], 
        'Daemon':[10,40], 
        'Undead':[25,25], 
        'Zombie':[40,10] };
           
        if(name.length < 2 || name.length > 10) throw new Error('Имя не должно быть меньше двух символов и длинее десяти символов');
        if(!obj.hasOwnProperty(type)) throw new Error('Недопустимый тип персонажа');    
        
        this.name = name,
        this.type = type,
        this.health = 100,
        this.level = 1,
        this.attack = obj[`${type}`][0],
        this.defence = obj[`${type}`][1]
    }

    levelUp() {
        if (this.health !== 0) {
            this.level++            
            this.attack =+ this.attack*0,2
            this.defence =+ this.defence*0,2
            this.health = 100
        } else {
            throw new Error('Hельзя повысить уровень умершего')
        }
    }

    damage(points) {
        this.health >= 0 && (this.health -= points * (1 - this.defence / 100))
    }
}

export class Bowman extends Character {
    constructor(name, type) {
        super(name, type)
    }
}

export class Swordsman extends Character {
    constructor(name, type) {
        super(name, type)
    }
}

export class Magician extends Character {
    constructor(name, type) {
        super(name, type)
    }
}

export class Undead extends Character {
    constructor(name, type) {
        super(name, type)
    }
}

export class Zombie extends Character {
    constructor(name, type) {
        super(name, type)
    }
}

export class Daemon extends Character {
    constructor(name, type) {
        super(name, type)
    }
}
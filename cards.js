let VALID_CARD_TYPES = ['unit', 'spell', 'rune'];
let VALID_CARD_TAGS  = ['ward', 'bane', 'storm'];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Card {
  constructor(opt) {
    this.name = opt.name ? opt.name : console.error('Card name is required.');

    if (!opt.type) {
      console.error('Card type is required.');
    } else {
      if (VALID_CARD_TYPES.includes(opt.type.toLowerCase()) == false) {
        console.error('Card type is invalid. Valid types are ' + VALID_CARD_TYPES.join(', ') + '.');
      } else {
        this.type = opt.type;

        switch(this.type) {
          case VALID_CARD_TYPES[0] :
              this.cost = opt.cost ? opt.cost : '0';
              this.atk  = opt.atk  ? opt.atk  : '0';
              this.def  = opt.def  ? opt.def  : '1';
            break;
          case VALID_CARD_TYPES[1] :
              this.cost = opt.cost ? opt.cost : '0';
              this.atk  = '';
              this.def  = '';
            break;
          case VALID_CARD_TYPES[2] :
              this.cost = opt.cost ? opt.cost : '0';
              this.atk  = '0';
              this.def  = opt.def  ? opt.def  : '1';
            break;
        }
      }
    }

    this.faction = opt.faction ? opt.faction : '';
    this.img     = opt.img     ? opt.img     : '';

    this.tags = '';

    if (opt.tags) {
      if (Array.isArray(opt.tags)) {
        opt.tags.forEach(tag => {
          this.pushTag(capitalizeFirstLetter(tag));
        });
      } else {
        this.pushTag(capitalizeFirstLetter(opt.tags));
      }
    }

    this.tags = this.tags.trim();

    this.effects = [];

    if (opt.effects) {
      if (Array.isArray(opt.effects)) {
        opt.effects.forEach(effect => {
          this.pushEffect(effect);
        });
      } else {
        this.pushEffect(opt.effects);
      }
    }
  }

  pushTag(tag) {
    if (VALID_CARD_TAGS.includes(tag.toLowerCase()) == false) {
      console.error('Card tag is invalid. Valid tags are ' + VALID_CARD_TAGS.join(', ') + '.');
    } else {
      this.tags += tag + '. ';
    }
  }

  pushEffect(effect) {
    if (typeof effect != 'string') {
      console.error('Card effects need to be a string or array of string.');
    } else {
      this.effects.push({ text : effect });
    }
  }
}

let cardlist = [];

cardlist.push(new Card({
  name    : 'Miraak, False Dragonborn',
  cost    : '5',
  atk     : '4',
  def     : '6',
  faction : 'Dragonborn',
  type    : 'unit',
  img     : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2P83W65dKUMRGokXp7roSycLBfIqpsSDeFQT7I7NYYGhEGVqzuw',
  tags    : ['ward', 'bane', 'storm'],
  effects : ['<strong>Last Word: </strong>Deal 2 damage to all enemy follower.']
}));
cardlist.push(new Card({
  name    : 'Delphine',
  cost    : '4',
  atk     : '2',
  def     : '2',
  faction : 'Blade',
  type    : 'unit',
  img     : 'https://i.redd.it/yk32w3xakpxx.png',
  effects : ['<strong>Fanfare: </strong>Summon <strong>Esbern</strong>.']
}));
cardlist.push(new Card({
  name    : 'Esbern',
  cost    : '2',
  atk     : '2',
  def     : '2',
  faction : 'Blade',
  type    : 'unit',
  img     : 'https://i7.lisimg.com/16625527/411full.jpg',
  effects : ['When attacking <strong>Dragon</strong> unit recover 1 mana.']
}));
cardlist.push(new Card({
  name    : 'Alduin, World Eater',
  cost    : '10',
  atk     : '4',
  def     : '2',
  faction : 'Dragon',
  type    : 'unit',
  img     : 'https://i.pinimg.com/originals/d8/4d/44/d84d445f7d9fc1da75bc57148104b771.jpg',
  tags    : 'storm',
  effects : ['<strong>Last Word :</strong> Summon <strong>Alduin, Sovngarde Dragon</strong>.']
}));
cardlist.push(new Card({
  name    : 'Alduin, Sovngarde Dragon',
  cost    : '6',
  atk     : '6',
  def     : '6',
  faction : 'Dragon',
  type    : 'unit',
  img     : 'https://i.redd.it/kt2gjgl4ykm11.jpg'
}));
cardlist.push(new Card({
  name    : 'Whiterun Guard',
  cost    : '3',
  atk     : '3',
  def     : '3',
  type    : 'unit',
  img     : 'https://www.gamingnexus.com/Images/News/mlvigr40274/10.jpg'
}));
cardlist.push(new Card({
  name    : 'Colette, Drunken Healer',
  cost    : '4',
  atk     : '3',
  def     : '3',
  faction : 'Winterhold',
  type    : 'unit',
  img     : 'https://vignette.wikia.nocookie.net/vsbattles/images/e/ec/LG-cardart-Restoration_Tutor.png/revision/latest/scale-to-width-down/400?cb=20190115194117',
  effects : ['<strong>Fanfare :</strong> Put <strong>Grand Healing</strong> to your hand.']
}));
cardlist.push(new Card({
  name    : 'Grand Healing',
  cost    : '5',
  type    : 'spell',
  img     : 'https://vignette.wikia.nocookie.net/elderscrolls/images/8/89/Healing_Dual_Cast_%28Skyrim%29.jpg/revision/latest?cb=20111106043621',
  effects : ['Restore 4 defense to all friendly unit.']
}));
cardlist.push(new Card({
  name    : 'Chain Lightning',
  cost    : '6',
  type    : 'spell',
  img     : 'https://i2.wp.com/nerdbear.com/wp-content/uploads/2018/10/Shock-Spell.jpg?fit=1280%2C720&ssl=1',
  effects : [
    'Deal 5 damage to an enemy.',
    'And the end of this round put <strong>Chain Lightning</strong> to your hand.'
  ]
}));

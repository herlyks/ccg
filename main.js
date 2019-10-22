let hands = [
  {
    name    : 'Miraak, False Dragonborn',
    cost    : '5',
    atk     : '4',
    def     : '6',
    faction : 'Dragonborn',
    type    : 'unit',
    img     : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2P83W65dKUMRGokXp7roSycLBfIqpsSDeFQT7I7NYYGhEGVqzuw',
    tags    : 'Ward. Bane. Storm.',
    effects : [
      { text : '<strong>Last Word: </strong>Deal 2 damage to all enemy follower.' }
    ]
  },
  {
    name    : 'Delphine',
    cost    : '4',
    atk     : '2',
    def     : '2',
    faction : 'Blade',
    type    : 'unit',
    img     : 'https://i.redd.it/yk32w3xakpxx.png',
    tags    : '',
    effects : [
      { text : '<strong>Fanfare: </strong>Summon <strong>Esbern</strong>.' }
    ]
  },
  {
    name    : 'Esbern',
    cost    : '2',
    atk     : '2',
    def     : '2',
    faction : 'Blade',
    type    : 'unit',
    img     : 'https://i7.lisimg.com/16625527/411full.jpg',
    tags    : '',
    effects : [
      { text : 'When attacking <strong>Dragon</strong> unit recover 1 mana.' }
    ]
  },
  {
    name    : 'Alduin, World Eater',
    cost    : '10',
    atk     : '4',
    def     : '2',
    faction : 'Dragon',
    type    : 'unit',
    img     : 'https://i.pinimg.com/originals/d8/4d/44/d84d445f7d9fc1da75bc57148104b771.jpg',
    tags    : 'Storm.',
    effects : [
      { text : '<strong>Last Word :</strong> Summon <strong>Alduin, Sovngarde Dragon</strong>.' }
    ]
  },
  {
    name    : 'Alduin, Sovngarde Dragon',
    cost    : '6',
    atk     : '6',
    def     : '6',
    faction : 'Dragon',
    type    : 'unit',
    img     : 'https://i.redd.it/kt2gjgl4ykm11.jpg',
    tags    : '',
    effects : []
  },
  {
    name    : 'Whiterun Guard',
    cost    : '3',
    atk     : '3',
    def     : '3',
    faction : '',
    type    : 'unit',
    img     : 'https://www.gamingnexus.com/Images/News/mlvigr40274/10.jpg',
    tags    : '',
    effects : []
  },
  {
    name    : 'Chain Lightning',
    cost    : '6',
    atk     : '',
    def     : '',
    faction : '',
    type    : 'spell',
    img     : 'https://i2.wp.com/nerdbear.com/wp-content/uploads/2018/10/Shock-Spell.jpg?fit=1280%2C720&ssl=1',
    tags    : '',
    effects : [
      { text : 'Deal 5 damage to an enemy.' },
      { text : 'And the end of this round put <strong>Chain Lightning</strong> to your hand.' }
    ]
  },
  {
    name    : 'Colette, Drunken Healer',
    cost    : '4',
    atk     : '3',
    def     : '3',
    faction : 'Winterhold',
    type    : 'unit',
    img     : 'https://vignette.wikia.nocookie.net/vsbattles/images/e/ec/LG-cardart-Restoration_Tutor.png/revision/latest/scale-to-width-down/400?cb=20190115194117',
    tags    : '',
    effects : [
      { text : '<strong>Fanfare :</strong> Put <strong>Grand Healing</strong> to your hand.' }
    ]
  },
  {
    name    : 'Grand Healing',
    cost    : '5',
    atk     : '',
    def     : '',
    faction : '',
    type    : 'spell',
    img     : 'https://vignette.wikia.nocookie.net/elderscrolls/images/8/89/Healing_Dual_Cast_%28Skyrim%29.jpg/revision/latest?cb=20111106043621',
    tags    : '',
    effects : [
      { text : 'Restore 4 defense to all friendly unit.' }
    ]
  },
];

$(function() {
  $('.hand').empty();
  let template = Handlebars.compile($('#card_template').html());
  hands.forEach((card) => {
    let el = template(card);
    $('.hand').append(el);
  });
})

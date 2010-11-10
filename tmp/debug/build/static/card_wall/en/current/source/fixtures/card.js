// ==========================================================================
// Project:   CardWall.Card Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals CardWall */

sc_require('models/card');

CardWall.Card.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  { guid: 1,
     contents: "bob"},
  { guid: 2,
    contents: "Dwight"}

];
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('card_wall');
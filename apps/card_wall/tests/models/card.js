// ==========================================================================
// Project:   CardWall.Card Unit Test
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals CardWall module test ok equals same stop start */

module("CardWall.Card");
sc_require('models/card');

// TODO: Replace with real unit test for Card
test("test description", function() {
  card = CardWall.Card.create({contents:"bob"});
  ok(card);
  ok(card.contents == "bob");
  ok(card.contents == "dingo", "dingo is not bob");

});


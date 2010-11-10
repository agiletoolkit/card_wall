// ==========================================================================
// Project:   CardWall.Card
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals CardWall */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/


CardWall.Card = SC.Record.extend(
/** @scope CardWall.Card.prototype */ {
  contents: SC.Record.attr(String),

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('card_wall');
import 'dart:math';

import 'package:flutter/material.dart';
import 'card.dart';
import 'playerVariable.dart';

class CardsDraw {
  CardsDraw(this.cardCount);
  final int cardCount;

  List<int> draw(int cardsToDraw, {int seed}) {
    if (cardsToDraw > this.cardCount) {
      throw Exception("Cannot draw more than the number of cards");
    }
    
    var cards = List<int>.generate(cardCount, (int index) => index);

    var random = Random();
    if (seed != null) {
      random = Random(seed);
    }

    cards.shuffle(random);

    //tra lai list so da bi trao
    return cards.sublist(0, cardsToDraw);
  }
}

class CardSpread extends StatefulWidget {
  CardSpread({Key key, this.spread, this.reveal = false}) : super(key: key);
  final int spread;
  final bool reveal;

  @override
  _CardSpreadState createState() => _CardSpreadState();
}

class _CardSpreadState extends State<CardSpread> {
  List<CardSide> _cardsSide;
  var number = Singleton;

  @override
  void initState() {
    _cardsSide = List<CardSide>.filled(widget.spread, CardSide.BackSide);
    number.number = -1;
    number.isTap = false;

    //tao mang de ghi nho cac la da rut
    number.spread = [];
    super.initState();
  }

  @override
  void didUpdateWidget(CardSpread oldWidget) {
    if (widget.reveal) {
      _cardsSide = List<CardSide>.filled(widget.spread, CardSide.FrontSide);
    }
    super.didUpdateWidget(oldWidget);
  }

  @override
  Widget build(BuildContext context) {
    var draw = CardsDraw(36);

    // cards la tep chua thu tu cac la bai rut ra trong 36 la (+1)
    var cards = draw.draw(widget.spread, seed: widget.key.hashCode);

    //luu trai bai da rut vao number.spread, *THIEU 1 DON VI* do bat dau tu 0
    number.spread = cards;

    return Wrap(
      spacing: 10,
      runSpacing: 10,
      children: List<Widget>.generate(
        widget.spread,
        (i) => FlipCard(frontImage: Image.asset("images/card-" + (1+cards[i]).toString() + ".jpg"), backImage: Image.asset("images/back.jpg"),side : _cardsSide[i], onTap: (side) {
          //chi tap 1 lan duy nhat
          if (number.isTap == false){
            number.number = 1+cards[i];
            number.isTap = true;
          }
          if (side == CardSide.BackSide) {
            setState(() {
              _cardsSide[i] = CardSide.FrontSide;
            });
          }
        },),
      ),
    );
  }
}

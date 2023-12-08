import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutterapp/design%20content/text_content.dart';
import 'package:shake/shake.dart';

import 'cardspread.dart';
import 'playerVariable.dart';

void main() => runApp(CardDrawApp());

class CardDrawApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Arcane Tarot',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: CardSpreadPage(title: 'Arcane Tarot'),
    );
  }
}

class CardSpreadPage extends StatefulWidget {
  CardSpreadPage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _CardSpreadPageState createState() => _CardSpreadPageState();
}

class _CardSpreadPageState extends State<CardSpreadPage> {
  var randomEngine = Random.secure();
  bool _reveal = false;
  int _cardsSeed = 0;
  int _cardsCount = 5;
  ShakeDetector _detector;
  var number = Singleton;

  @override
  void initState() {
    super.initState();
    number.number = -1;
    number.isTap = false;
    number.isVisible = false;
    number.spread = [];
    _detector = ShakeDetector.autoStart(onPhoneShake: () {
      if (_reveal) {
        dealNewCards();
      } else {
        reveal();
      }
    });
  }

  void dealNewCards() {
    setState(() {
      _generateNewSeed();
    });
  }

  void setSpread(int spread) {
    setState(() {
      _cardsCount = spread;
      _generateNewSeed();
    });
  }

  reveal() {
    setState(() {
      _reveal = true;
    });
  }

  _generateNewSeed() {
    _cardsSeed = randomEngine.nextInt(1000000000);
    _reveal = false;
  }

  Widget buildCardsRow() {
    return CardSpread(
        key: ValueKey(_cardsSeed), spread: _cardsCount, reveal: _reveal);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   title: Text(widget.title),
      // ),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                mainTitle(),
                Text('Ngày hôm nay của bạn thế nào?',
                    style: TextStyle(fontSize: 30)),
                Container(
                  height: 30,
                ),
                buildCardsRow(),
                SizedBox(height: 20),
                _reveal == true
                    ? ElevatedButton(
                        style: ButtonStyle(
                            backgroundColor:
                                MaterialStateProperty.all<Color>(Colors.amber)),
                        onPressed: () {
                          dealNewCards();
                          setState(() {
                            number.isVisible = false;
                          });
                        },
                        child: Text("Chọn lại",
                          style: TextStyle(color: Colors.black),
                            ))
                    : ElevatedButton(
                        style: ButtonStyle(
                            backgroundColor:
                                MaterialStateProperty.all<Color>(Colors.amber)),
                        onPressed: () {
                          reveal();
                          setState(() {
                            number.isVisible = true;
                          });
                        },
                        child: Text("Xem kết quả",
                            style: TextStyle(color: Colors.black),
                        )
                ),
                meaningBox(
                    number.number == -1
                        ? 'Bạn chưa chọn bài!'
                        : deck[number.spread[0]+1]
                        +' - '+deck[number.spread[1]+1]
                        +' - '+deck[number.spread[2]+1]
                        +' - '+deck[number.spread[3]+1]
                        +' - '+deck[number.spread[4]+1],
                    number.isVisible,
                    context)
              ]),
        ),
      ),
    );
  }
}

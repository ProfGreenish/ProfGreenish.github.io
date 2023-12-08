import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';


Widget meaningBox(String text, isVisible, context) {
  return Container(
    padding: EdgeInsets.fromLTRB(MediaQuery.of(context).size.width * 0.2, 50,
        MediaQuery.of(context).size.width * 0.2, 50),
    child: Column(
      children: [
        Text(
          text,
          textAlign: TextAlign.justify,
          style: TextStyle(
            color: isVisible ? Colors.black : Colors.transparent,
            fontSize: 20,
          ),
        ),
        Container(height: 20,),
        Text(
          '>>> Liên hệ Arcane Tarot để hiểu rõ hơn thông điệp của ngày hôm nay ^^',
          style: TextStyle(
              fontSize: 30,
              fontWeight: FontWeight.bold,
              color: isVisible ? Colors.red : Colors.transparent
          ),
        )
      ],
    ),
  );
}
// _________________________________________
// arcane tarot title

Widget mainTitle() {
  return Container(
    padding: EdgeInsets.all(30),
    child: Text(
      'Arcane Lenormand',
      style: TextStyle(
          fontSize: 50,
        fontFamily: 'Satisfy'
      ),
    ),
  );
}

// _________________________________________
// cards meaning
var deck = {
  1: 'Rider',
  2: 'Clover',
  3: 'Ship',
  4: 'House',
  5: 'Tree',
  6: 'Clouds',
  7: 'Snake',
  8: 'Coffin',
  9: 'Bouquet',
  10: 'Scythe',
  11: 'Whip',
  12: 'Bird',
  13: 'Child',
  14: 'Fox',
  15: 'Bear',
  16: 'Stars',
  17: 'Stork',
  18: 'Dog',
  19: 'Tower',
  20: 'Garden',
  21: 'Mountain',
  22: 'Crossroads',
  23: 'Mice',
  24: 'Heart',
  25: 'Ring',
  26: 'Book',
  27: 'Letter',
  28: 'Man',
  29: 'Woman',
  30: 'Lily',
  31: 'Sun',
  32: 'Moon',
  33: 'Key',
  34: 'Fish',
  35: 'Anchor',
  36: 'Cross',

};

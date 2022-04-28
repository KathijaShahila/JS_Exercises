function points(games) {
    // your code here
    var i = 0;
      var points = 0;
      for (i; i < games.length; i++) {
          let each = games[i].split(":");
          if (each[0] > each[1]) {
              points += 3;
          } else if (each[0] == each[1]) {
              points += 1;
          } else {
              points += 0;
          }
      }
      return points;
  }
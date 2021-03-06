function Item(_id, _x, _y, _voluntaryNumber, _nameItem, _img, _imgB, _imgIcons, _imgIcon, _currentColor, _mobility, _agesIndex, _agesArray) {
  /*
   *****************************************
   *****************************************
   * VARIABLES
   *****************************************
   *****************************************
   */

  this.id = _id;
  this.x = _x;
  this.y = _y;
  this.voluntaryNumber = _voluntaryNumber;
  this.nameItem = _nameItem;
  this.img = _img;
  this.imgB = _imgB;
  this.imgIcons = _imgIcons;
  this.imgIcon = _imgIcon;
  this.currentColor = _currentColor;
  this.mobility = _mobility;
  this.agesIndex = _agesIndex;
  this.agesArray = _agesArray;
  this.voluntaryMaxNumber = 150;
  this.overBox = false;
  this.alphaValue = alphaValue = (this.voluntaryNumber / this.voluntaryMaxNumber) * 255.0;
  this.STATE;


  /*
   *****************************************
   *****************************************
   * LYFE CYCLE METHODS
   *****************************************
   *****************************************
   */

  this.display = function() {
    //tint(255, this.alphaValue);


    var correctionX = (windowWidth / 2) - (this.img.width / 2);
    var correctionY = (windowHeight / 2) - (this.img.height / 2);
    //image(this.img, correctionX, correctionY);


    var c = this.img.get(mouseX + (correctionX * -1), mouseY + (correctionY * -1));

    if (this.colorAlphaTest(c, 5)) {

      if (STATE == "MOVILITY") {
        image(this.img, correctionX, correctionY);
      } else if (STATE == "AGE") {
        image(this.imgB, correctionX, correctionY);
      }


      this.displayInfo();
    }


    // image(this.imgIcon, windowWidth/2 - this.x, windowHeight/2 - this.y);





  }


  this.update = function() {

  }

  this.updateState = function(_state) {

    if (_state == "MOVILITY") {
      this.STATE = "MOVILITY";
      this.currentColor = color(167, 225, 234);
    } else if (_state == "AGE") {
      this.STATE = "AGE";
      this.currentColor = color(70, 180, 98);
    }


  }




  this.displayInfo = function() {



    var posX = 10;
    var posY = 180;
    noStroke();

    textAlign(LEFT, CENTER);

    // Name
    fill(0, 255)
    textSize(24);
    var s = this.nameItem;
    var sw = textWidth(s);
    //print(sw);
    var correction;

    if (sw < 140) {
      correction = 140 - sw;
    } else {
      correction = 0;
    }
    text(s, windowWidth - posX - 50 - sw - correction, windowHeight - posY);





    var currentdata;

    if (STATE == "MOVILITY") {
      currentdata = this.mobility;
      // Icons
      image(this.imgIcons, windowWidth - posX - 50 - sw - correction, windowHeight - posY + 20, this.imgIcons.width, this.imgIcons.height);

    } else if (STATE == "AGE") {
      currentdata = this.agesArray;
      // Icons
      textAlign(RIGHT, TOP);
      textSize(12);
      text("11-20", windowWidth - posX - 50 + 25 - sw - correction - 5, windowHeight - posY + 27);
      text("21-30", windowWidth - posX - 50 + 25 - sw - correction - 5, windowHeight - posY + 47);
      text("31-40", windowWidth - posX - 50 + 25 - sw - correction - 5, windowHeight - posY + 67);
      text("41-50", windowWidth - posX - 50 + 25 - sw - correction - 5, windowHeight - posY + 87);
      text("51-60", windowWidth - posX - 50 + 25 - sw - correction - 5, windowHeight - posY + 107);
    }

    fill(red(this.currentColor), green(this.currentColor), blue(this.currentColor), 255);


    // Rects Walk
    rect(windowWidth - posX - 50 + 25 - sw - correction, windowHeight - posY + 27, map(currentdata[0], 0, this.voluntaryNumber, 0, 150), 15);
    // Rects Car
    rect(windowWidth - posX - 50 + 25 - sw - correction, windowHeight - posY + 47, map(currentdata[1], 0, this.voluntaryNumber, 0, 150), 15);
    // Rects Bicy
    rect(windowWidth - posX - 50 + 25 - sw - correction, windowHeight - posY + 67, map(currentdata[2], 0, this.voluntaryNumber, 0, 150), 15);
    // Rects Metro
    rect(windowWidth - posX - 50 + 25 - sw - correction, windowHeight - posY + 87, map(currentdata[3], 0, this.voluntaryNumber, 0, 150), 15);
    // Rects Moto
    rect(windowWidth - posX - 50 + 25 - sw - correction, windowHeight - posY + 107, map(currentdata[4], 0, this.voluntaryNumber, 0, 150), 15);


    // Scale
    textAlign(RIGHT, CENTER);
    fill(0, 255);
    textSize(10);
    text("100%", windowWidth - posX - 50 + 25 - sw - correction + 150, windowHeight - posY + 130);
    textAlign(LEFT, CENTER);
    text("FUENTE: Verificado19S", windowWidth - posX - 50 - sw - correction, windowHeight - posY + 140);


    /*
    // Cluster
     textSize(18);
     String s1 = "Cluster: " + str(centroidIndex);
     text(s1, width-10, height-80);
     */
    // Category Count





    stroke(red(this.currentColor), green(this.currentColor), blue(this.currentColor), 255);
    //Line 
    line(windowWidth / 2 - this.x, windowHeight / 2 - this.y, windowWidth - posX - 50 - sw - correction, windowHeight - posY);

  }



  this.colorAlphaTest = function(_c1, _tol) {
    if (red(_c1) + green(_c1) + blue(_c1) <= 1) {
      return false;
    } else {
      return true;
    }
  }

  this.colorAlpha = function(aColor, alpha) {
    var c = color(aColor);
    return color('rgba(' + [red(c), green(c), blue(c), alpha].join(',') + ')');
  }











}
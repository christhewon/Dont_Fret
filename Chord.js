class Chord {
  //constructor
  constructor(E, A, D, G, B, E) {
    // to indicate which strings are strummed on a guitar
    // 0 is strummed, 1 is not strummed
    // default is all strings are strummed
    let strum = [0, 0, 0, 0, 0, 0];

    // the finger position of string 1-6 in order
    // 0 indicates no finger is on the string
    //other numbers indicate that there exist a fret position
    let fret = [0, 0, 0, 0, 0, 0];
  }

  // return the array of which strings are strum
  get strummed() {
    return this.strum;
  }

  // return the array that shows the finger position
  get position() {
    return this.fret;
  }

  //change the position of a string to not be strummed;
  nostrum(a) {
    strum[a - 1] = 1;
  }

  // add a finger position to the specified location
  addFret(a, b) {
    fret[a - 1] = b;
  }
}

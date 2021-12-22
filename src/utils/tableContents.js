class Element {
    constructor(symbol, number, name, mass, classification){
        this.symbol = symbol;
        this.number = number;
        this.name = name;
        this.mass = mass;
        this.classification = classification;
    }
}

const tableContent = []
for(let i = 0; i < 9; i++){
    tableContent[i] = [];
}

tableContent[0][0] = new Element('H', 1, 'Hidrogênio', 1.008, 'hidrogen');
tableContent[0][1] = new Element('.');
tableContent[0][2] = new Element('.');
tableContent[0][3] = new Element('.');
tableContent[0][4] = new Element('.');
tableContent[0][5] = new Element('.');
tableContent[0][6] = new Element('.');
tableContent[0][7] = new Element('.');
tableContent[0][8] = new Element('.');
tableContent[0][9] = new Element('.');
tableContent[0][10] = new Element('.');
tableContent[0][11] = new Element('.');
tableContent[0][12] = new Element('.');
tableContent[0][13] = new Element('.');
tableContent[0][14] = new Element('.');
tableContent[0][15] = new Element('.');
tableContent[0][16] = new Element('.');
tableContent[0][17] = new Element('He', 2, 'Hélio', 4.003, 'noble');
tableContent[1][0] = new Element('Li', 3, 'Lítio', 6.961, 'mAlcaline');
tableContent[1][1] = new Element('Be', 4, 'Berílio', 9.012, 'mTerra');
tableContent[1][2] = new Element('.');
tableContent[1][3] = new Element('.');
tableContent[1][4] = new Element('.');
tableContent[1][5] = new Element('.');
tableContent[1][6] = new Element('.');
tableContent[1][7] = new Element('.');
tableContent[1][8] = new Element('.');
tableContent[1][9] = new Element('.');
tableContent[1][10] = new Element('.');
tableContent[1][11] = new Element('.');
tableContent[1][12] = new Element('B', 5, 'Boro', 10.811, 'bLine');
tableContent[1][13] = new Element('C', 6, 'Carbono', 12.011, 'cLine');
tableContent[1][14] = new Element('N', 7, 'Nitrogênio', 14.007, 'nLine');
tableContent[1][15] = new Element('O', 8, 'Oxigênio', 15.999, 'oLine');
tableContent[1][16] = new Element('F', 9, 'Fluor', 18.998, 'fLine');
tableContent[1][17] = new Element('Ne', 10, 'Neônio', 20.18, 'noble');
tableContent[2][0] = new Element('Na', 11, 'Sódio', 22.99, 'mAlcaline');
tableContent[2][1] = new Element('Mg', 12, 'Magnésio', 24.305, 'mTerra');
tableContent[2][2] = new Element('.');
tableContent[2][3] = new Element('.');
tableContent[2][4] = new Element('.');
tableContent[2][5] = new Element('.');
tableContent[2][6] = new Element('.');
tableContent[2][7] = new Element('.');
tableContent[2][8] = new Element('.');
tableContent[2][9] = new Element('.');
tableContent[2][10] = new Element('.');
tableContent[2][11] = new Element('.');
tableContent[2][12] = new Element('Al', 13, 'Alumínio', 26.982, 'bLine');
tableContent[2][13] = new Element('Si', 14, 'Silício', 28.086, 'cLine');
tableContent[2][14] = new Element('P', 15, 'Fósforo', 30.974, 'nLine');
tableContent[2][15] = new Element('S', 16, 'Enxofre', 32.065, 'oLine');
tableContent[2][16] = new Element('Cl', 17, 'Cloro', 35.453, 'fLine');
tableContent[2][17] = new Element('Ar', 18, 'Argônio', 39.948, 'noble');
tableContent[3][0] = new Element('K', 19, 'Potássio', 39.098, 'mAlcaline');
tableContent[3][1] = new Element('Ca', 20, 'Cálcio', 40.078, 'mTerra');
tableContent[3][2] = new Element('Sc', 21, 'Escândio', 44.956, 'tMetal');
tableContent[3][3] = new Element('Ti', 22, 'Titânio', 47.867, 'tMetal');
tableContent[3][4] = new Element('V', 23, 'Vanádio', 50.942, 'tMetal');
tableContent[3][5] = new Element('Cr', 24, 'Cromo', 51.996, 'tMetal');
tableContent[3][6] = new Element('Mn', 25, 'Manganês', 54.938, 'tMetal');
tableContent[3][7] = new Element('Fe', 26, 'Ferro', 55.845, 'tMetal');
tableContent[3][8] = new Element('Co', 27, 'Cobalto', 58.933, 'tMetal');
tableContent[3][9] = new Element('Ni', 28, 'Níquel', 58.693, 'tMetal');
tableContent[3][10] = new Element('Cu', 29, 'Cobre', 63.546, 'tMetal');
tableContent[3][11] = new Element('Zn', 30, 'Zinco', 65.409, 'tMetal');
tableContent[3][12] = new Element('Ga', 31, 'Gálio', 69.723, 'bLine');
tableContent[3][13] = new Element('Ge', 32, 'Germânio', 72.64, 'cLine');
tableContent[3][14] = new Element('As', 33, 'Arsênio', 74.922, 'nLine');
tableContent[3][15] = new Element('Se', 34, 'Selênio', 78.96, 'oLine');
tableContent[3][16] = new Element('Br', 35, 'Bromo', 79.904, 'fLine');
tableContent[3][17] = new Element('Kr', 36, 'Criptônio', 83.798, 'noble');
tableContent[4][0] = new Element('Rb', 37, 'Rubídio', 85.468, 'mAlcaline');
tableContent[4][1] = new Element('Sr', 38, 'Estrôncio', 87.62, 'mTerra');
tableContent[4][2] = new Element('Y', 39, 'Ítrio', 88.906, 'tMetal');
tableContent[4][3] = new Element('Zr', 40, 'Zircônio', 91.224, 'tMetal');
tableContent[4][4] = new Element('Nb', 41, 'Nióbio', 92.90632, 'tMetal');
tableContent[4][5] = new Element('Mo', 42, 'Molibdênio', 95.94, 'tMetal');
tableContent[4][6] = new Element('Tc', 43, 'Tecnécio', 98, 'tMetal');
tableContent[4][7] = new Element('Ru', 44, 'Rutênio', 101.07, 'tMetal');
tableContent[4][8] = new Element('Rh', 45, 'Ródio', 102.90550, 'tMetal');
tableContent[4][9] = new Element('Pd', 46, 'Paládio', 106.42, 'tMetal');
tableContent[4][10] = new Element('Ag', 47, 'Prata', 107.868, 'tMetal');
tableContent[4][11] = new Element('Cd', 48, 'Cádmio', 112.411, 'tMetal');
tableContent[4][12] = new Element('In', 49, 'Índio', 114.818, 'bLine');
tableContent[4][13] = new Element('Sn', 50, 'Estanho', 118.71, 'cLine');
tableContent[4][14] = new Element('Sb', 51, 'Antimônio', 121.76, 'nLine');
tableContent[4][15] = new Element('Te', 52, 'Telurio', 127.6, 'oLine');
tableContent[4][16] = new Element('I', 53, 'Iodo', 126.90447, 'fLine');
tableContent[4][17] = new Element('Xe', 54, 'Xenônio', 131.293, 'noble');
tableContent[5][0] = new Element('Cs', 55, 'Césio', 132.905, 'mAlcaline');
tableContent[5][1] = new Element('Ba', 56, 'Bário', 137.327, 'mTerra');
tableContent[5][2] = new Element('.');
tableContent[5][3] = new Element('Hf', 72, 'Háfnio', 178.49, 'tMetal');
tableContent[5][4] = new Element('Ta', 73, 'Tântalo', 180.948, 'tMetal');
tableContent[5][5] = new Element('W', 74, 'Tungstênio', 183.84, 'tMetal');
tableContent[5][6] = new Element('Re', 75, 'Rênio', 186.207, 'tMetal');
tableContent[5][7] = new Element('Os', 76, 'Ósmio', 190.23, 'tMetal');
tableContent[5][8] = new Element('Ir', 77, 'Irídio', 192.217, 'tMetal');
tableContent[5][9] = new Element('Pt', 78, 'Platina', 195.84, 'tMetal');
tableContent[5][10] = new Element('Au', 79, 'Ouro', 196.967, 'tMetal');
tableContent[5][11] = new Element('Hg', 80, 'Mercúrio', 200.59, 'tMetal');
tableContent[5][12] = new Element('Tl', 81, 'Tálio', 204.383, 'bLine');
tableContent[5][13] = new Element('Pb', 82, 'Chumbo', 207.2, 'cLine');
tableContent[5][14] = new Element('Bi', 83, 'Bismuto', 208.98, 'nLine');
tableContent[5][15] = new Element('Po', 84, 'Polônio', 210, 'oLine');
tableContent[5][16] = new Element('At', 85, 'Ástato', 210, 'fLine');
tableContent[5][17] = new Element('Rn', 86, 'Radônio', 220, 'noble');
tableContent[6][0] = new Element('Fr', 87, 'Frâncio', 223, 'mAlcaline');
tableContent[6][1] = new Element('Ra', 88, 'Rádio', 226, 'mTerra');
tableContent[6][2] = new Element('.');
tableContent[6][3] = new Element('Rf', 104, 'Rutherfórdio', 261, 'tMetal');
tableContent[6][4] = new Element('Db', 105, 'Dúbnio', 105, 'tMetal');
tableContent[6][5] = new Element('Sg', 106, 'Seabórgio', 266, 'tMetal');
tableContent[6][6] = new Element('Bh', 107, 'Bóhrio', 264, 'tMetal');
tableContent[6][7] = new Element('Hs', 108, 'Hássio', 277, 'tMetal');
tableContent[6][8] = new Element('Mt', 109, 'Meitnério', 268, 'tMetal');
tableContent[6][9] = new Element('Ds', 110, 'Darmstádio', 271, 'tMetal');
tableContent[6][10] = new Element('Rg', 111, 'Roentgênio', 272, 'tMetal');
tableContent[6][11] = new Element('Cn', 112, 'Copernício', 277, 'tMetal');
tableContent[6][12] = new Element('Nh', 113, 'Nihônio', 286, 'bLine');
tableContent[6][13] = new Element('Fl', 114, 'Fleróvio', 289, 'cLine');
tableContent[6][14] = new Element('Mc', 115, 'Moscóvio', 288, 'nLine');
tableContent[6][15] = new Element('Lv', 116, 'Livermório', 293, 'oLine');
tableContent[6][16] = new Element('Ts', 117, 'Tenessino', 294, 'fLine');
tableContent[6][17] = new Element('Og', 118, 'Oganessônio', 294, 'noble');
tableContent[7][0] = new Element('.');
tableContent[7][1] = new Element('.');
tableContent[7][2] = new Element('.');
tableContent[7][3] = new Element('La', 57, 'Latânio', 138.905, 'lact');
tableContent[7][4] = new Element('Ce', 58, 'Cério', 140.116, 'lact');
tableContent[7][5] = new Element('Pr', 59, 'Praseodímio', 140.908, 'lact');
tableContent[7][6] = new Element('Nd', 60, 'Neodímio', 144.242, 'lact');
tableContent[7][7] = new Element('Pm', 61, 'Promécio', 145, 'lact');
tableContent[7][8] = new Element('Sm', 62, 'Samário', 150.36, 'lact');
tableContent[7][9] = new Element('Eu', 63, 'Európio', 151.964, 'lact');
tableContent[7][10] = new Element('Gd', 64, 'Gadolínio', 157.25, 'lact');
tableContent[7][11] = new Element('Tb', 65, 'Térbio', 258.925, 'lact');
tableContent[7][12] = new Element('Dy', 66, 'Disprósio', 162.5, 'lact');
tableContent[7][13] = new Element('Ho', 67, 'Hólmio', 164.93062, 'lact');
tableContent[7][14] = new Element('Er', 68, 'Érbio', 167.259, 'lact');
tableContent[7][15] = new Element('Tm', 69, 'Túlio', 168.934, 'lact');
tableContent[7][16] = new Element('Yb', 70, 'Itérbio', 173.04, 'lact');
tableContent[7][17] = new Element('Lu', 71, 'Lutércio', 174.967, 'lact');
tableContent[8][0] = new Element('.');
tableContent[8][1] = new Element('.');
tableContent[8][2] = new Element('.');
tableContent[8][3] = new Element('Ac', 89, 'Actínio', 227, 'acti');
tableContent[8][4] = new Element('Th', 90, 'Tório', 232.03806, 'acti');
tableContent[8][5] = new Element('Pa', 91, 'Protáctinio', 231.03588, 'acti');
tableContent[8][6] = new Element('U', 92, 'Urânio', 238.02891, 'acti');
tableContent[8][7] = new Element('Np', 93, 'Netúnio', 237, 'acti');
tableContent[8][8] = new Element('Pu', 94, 'Plutônio', 244, 'acti');
tableContent[8][9] = new Element('Am', 95, 'Américo', 243, 'acti');
tableContent[8][10] = new Element('Cm', 96, 'Cúrio', 247, 'acti');
tableContent[8][11] = new Element('Bk', 67, 'Berquélio', 247, 'acti');
tableContent[8][12] = new Element('Cf', 98, 'Califórnio', 251, 'acti');
tableContent[8][13] = new Element('Es', 99, 'Einstenio', 252, 'acti');
tableContent[8][14] = new Element('Fm', 100, 'Férmio', 257, 'acti');
tableContent[8][15] = new Element('Md', 101, 'Mendelévio', 258, 'acti');
tableContent[8][16] = new Element('No', 102, 'Nobélio', 259, 'acti');
tableContent[8][17] = new Element('Lr', 103, 'Laurêncio', 262, 'acti');

export {tableContent}
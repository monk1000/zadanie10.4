function Telefon(marka, cena, kolor, rozmiar) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.rozmiar = rozmiar;

	Telefon.prototype.printInfo = function(){
		console.log('Marka Telefonu to: ' + this.marka + ', w kolorze: ' + this.kolor + '. ' + 'Jego cena to: ' + this.cena + ' pln.');
	}

	Telefon.prototype.screenSize = function(){
		console.log('Rozmiar ekranu: ' + this.rozmiar + ' inch.');
	}
}

var iPhone6s = new Telefon ("Apple", 2453, "grey", 5.5);
	SamsungGN = new Telefon ("Samsung Galaxy Note", 5884, "black", 4.5);

	iPhone6s.printInfo();
	iPhone6s.screenSize();
	SamsungGN.printInfo();
	SamsungGN.screenSize();

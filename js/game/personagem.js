class Personagem {
	constructor(image) {
		this.image = image;
		this.matrix = [];
		for (let y = 0; y < 4; y++) {
			for (let x = 0; x < 4; x++) {
				this.matrix.push([x*220 ,y*270 ]);
			}
		}
		this.matrixPosition = 0;
	}

	show() {
		image(this.image, 0, height - characterHeight, 110, characterHeight, 
			this.matrix[this.matrixPosition][0], this.matrix[this.matrixPosition][1], 220, 270);
		this.animate();
	}

	animate() {
		this.matrixPosition++;
		if (this.matrixPosition >= this.matrix.length) {
			this.matrixPosition = 0;
		}
	}
}
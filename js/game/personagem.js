class Personagem {
	constructor(image) {
		this.image = image;
		this.matrix = [];
		this.spriteXsize = 220;
		this.spriteYsize = 270;
		this.characterXsize = this.spriteXsize / 2;
		this.characterYsize = this.spriteYsize / 2;
		
		for (let y = 0; y < 4; y++) {
			for (let x = 0; x < 4; x++) {
				this.matrix.push([x * this.spriteXsize ,y * this.spriteYsize]);
			}
		}
		this.matrixPosition = 0;
	}

	show() {
		image(this.image, 
			0, height - this.characterYsize, 
			this.characterXsize, this.characterYsize, 
			this.matrix[this.matrixPosition][0], this.matrix[this.matrixPosition][1], 
			this.spriteXsize, this.spriteYsize);
		this.animate();
	}

	animate() {
		this.matrixPosition++;
		if (this.matrixPosition >= this.matrix.length) {
			this.matrixPosition = 0;
		}
	}
}
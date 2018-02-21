var Letter = function(character) {
	this.appear = false;
	this.charac = char.toLowerCase();
	
	this.letterRender = function() {
		if (this.appear) {
			return this.charac;
		}
		else if (this.charac === " ") {
			this.appear = true;
			return this.charac;
		}
		else {
			return "_";
		}
	};
};
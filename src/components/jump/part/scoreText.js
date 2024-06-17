import font from './font'
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

export default class Text {
	constructor() {
		this.font = new FontLoader(font);
		this.size = 5.0;
		this.height = 0.1;
		this.fillStyle = 0x666666;
	}

	init(options) {
		this.material = new THREE.MeshBasicMaterial({ color: this.fillStyle, transparent: true });
		if (options && options.opacity) this.material.opacity = options.opacity;
		this.options = options || {};
		// const geometry = new TextGeometry('0', { 'font': this.font, 'size': this.size, 'height': this.height });
		const geometry = new TextGeometry('0', this.size);
		this.instance = new THREE.Mesh(geometry, this.material);
		this.instance.name = 'scoreText';
	}

	updateScore(score) {
		const scoreStr = score.toString();
		// this.instance = new THREE.Mesh(new TextGeometry(scoreStr, { 'font': this.font, 'size': this.size, 'height': this.height }), this.material);
		this.instance = new THREE.Mesh(new TextGeometry(scoreStr, this.size));
	}
}
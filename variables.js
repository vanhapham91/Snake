const SIZE = 10;
const BOTTOMLIMIT = 300 - SIZE;
const RIGHTLIMIT = 300 - SIZE;
const DIRECTIONS = ['left','up','right','down'];
const SPEED = 80;
const BAITSPEED = 2000;

let state = {
	direction: 'right',
	keyList: {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down',
	},
	opposites: {
		'left': 'right',
		'right': 'left',
		'up': 'down',
		'down': 'up',
	},
}

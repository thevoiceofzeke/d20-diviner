(function() {
	'use strict';

	angular
		.module('app.rod-of-wonder')
		.controller('RoWController', RoWController);

	function RoWController($interval) {
		var vm = this;
		var scrambler;

		vm.result;
		vm.isResult;
		vm.resultPlaceholder;
		vm.effect;
		vm.manualRoll;

		vm.roll    = roll;
		vm.init    = init;

		init();

		// *********************************
		// Internal methods
		// *********************************
		function init() {
			vm.result             = 0;
			vm.isResult           = false;
			vm.resultPlaceholder  = '00';
			vm.manualRoll					= '';
			vm.effect             = {
				'name': '',
				'url': '',
				'description': '',
				'notes': []
			};
			scrambler = $interval(scrambleNumbers, 100);
		}

		function scrambleNumbers() {
			console.log('scrambling');
			vm.resultPlaceholder = Math.floor(Math.random() * 101);
		}

		function rollSummonAnimal() {
			var secondaryRoll = Math.floor(Math.random() * 101);
			if (secondaryRoll > 0 && secondaryRoll <= 25) {
				vm.effect.name = 'Summon rhino';
				vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Rhinoceros';
				vm.effect.description = 'Summon a rhino at the target location.';
				vm.effect.notes = [
					'Infamous for its bad temper and willingness to charge intruders',
					'When it is harassed or annoyed, a rhinoceros lowers its head and charges'
				];
			}
			if (secondaryRoll > 25 && secondaryRoll <= 50) {
				vm.effect.name = 'Summon elephant';
				vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Elephant';
				vm.effect.description = 'Summon an elephant at the target location.';
				vm.effect.notes = [
					'Unpredictable but sometimes used as mounts or beasts of burden',
					'Elephants tend to charge at threatening creatures'
				];
			}
			if (secondaryRoll > 50) {
				vm.effect.name = 'Summon mouse';
				vm.effect.url = '';
				vm.effect.description = 'Summon a useless piece of shit at the target location.';
				vm.notes = [
					'Summoned mouse immediately flees'
				];
			}
		}

		function rollChangeColor() {
			var colorRoll = Math.floor(Math.random() * 3) + 1;
			var target;
			var color;

			if (Math.random() >= 0.5) {
				target = 'Wielder';
			} else {
				target = 'Target';
			}

			if (colorRoll == 1) {
				color = 'blue';
			} else if (colorRoll == 2) {
				color = 'green';
			} else if (colorRoll == 3) {
				color = 'purple';
			} else {
				console.log('SOMETHING WENT WRONG WITH THE COLOR ROLL');
			}

			vm.effect.name = target + ' permanently changes ' + color;
			vm.effect.url = '';
			vm.effect.description = 'Wielder (50% chance) or target (50% chance) turns permanently blue, green, or purple (no save).';
			vm.effect.notes = ['Rolls for target and color are done separately and automatically'];
		}

		// *********************************
		// Exposed methods
		// *********************************
		function roll() {
			vm.isResult = true;

			// For debugging: IF THERE IS A NUMBER PASSED IN, DON'T BOTHER ROLLING
			var result;
			if (vm.manualRoll != '') {
				result = vm.manualRoll;
			} else {
				result = Math.floor(Math.random() * 101);
			}

			switch(true) {
				case (result <= 5):
					vm.effect.name = 'Slow';
					vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Slow';
					vm.effect.description = 'Slow creature pointed at for 10 rounds.';
					vm.effect.notes = [
						'Will DC 15 negates',
						'Slowed creature can take only a single move action or standard action each turn, but not both',
						'–1 penalty on attack rolls, AC, and Reflex saves',
						'Moves at half normal speed'
					];
					break;
				case (result > 5 && result <= 10):
					vm.effect.name = 'Faerie fire';
					vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Faerie_Fire';
					vm.effect.description = 'Faerie fire surrounds the target.';
					vm.effect.notes = [
						'Outlined creatures do not benefit from the concealment normally provided by darkness, blur, displacement, invisibility, or similar effects'
					];
					break;
				case (result > 10 && result <= 15):
					vm.effect.name = 'Delude wielder';
					vm.effect.url = '';
					vm.effect.description = 'Deludes wielder for 1 round into believing the rod functions as indicated by a second die roll (no save).';
					vm.effect.notes = [];
					break;
				case (result > 15 && result <= 20):
					vm.effect.name = 'Gust of wind';
					vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Gust_of_Wind';
					vm.effect.description = 'Gust of wind, but at windstorm force.';
					vm.effect.notes = [
						'Fortitude DC 14 negates',
						'Line-shaped gust',
						'A Tiny or smaller creature on the ground is knocked down and rolled {'
						+ ((Math.floor(Math.random()*4)+1)*10) + '} feet, taking {'
						+ (Math.floor(Math.random()*4)+1) + '} points of nonlethal damage per 10 feet. If flying, a Tiny or smaller creature is blown back {'
						+ (((Math.floor(Math.random()*6)+1) + (Math.floor(Math.random()*6)+1))*10) + '} feet and takes {'
						+ ((Math.floor(Math.random()*6)+1) + (Math.floor(Math.random()*6)+1)) + '} points of nonlethal damage due to battering and buffeting.',
						'Small creatures are knocked prone by the force of the wind, or if flying are blown back {'
						+ ((Math.floor(Math.random()*6)+1)*10) + '} feet.',
						'Medium creatures are unable to move forward against the force of the wind, or if flying are blown back {'
						+ ((Math.floor(Math.random()*6)+1)*5) + '} feet.',
						'Large or larger creatures may move normally within a gust of wind effect.',
						'Any creature, regardless of size, takes a –4 penalty on ranged attacks and Listen checks in the area of a gust of wind.'
					];
					break;
				case (result > 20 && result <= 25):
					vm.effect.name = 'Detect thoughts';
					vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Detect_Thoughts';
					vm.effect.description = 'Wielder learns target’s surface thoughts (as with detect thoughts) for {'
						+ Math.floor(Math.random()*4+1) + '} rounds.';
					vm.effect.notes = ['No save'];
					break;
				case (result > 25 && result <= 30):
					vm.effect.name = 'Stinking cloud';
					vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Stinking_Cloud';
					vm.effect.description = 'Stinking cloud at 30-ft. range.';
					vm.effect.notes = [
						'Fortitude DC 15 negates',
						'Living creatures in the cloud become nauseated',
						'Lasts as long as the creature is in the cloud and for {'
						+ ((Math.floor(Math.random()*4)+1)+1) + '} rounds after it leaves',
						'If remaining in cloud after successful save, attempt another save on next turn'
					];
					break;
				case (result > 30 && result <= 33):
					vm.effect.name = 'Heavy rain';
					vm.effect.url = '';
					vm.effect.description = 'Heavy rain falls for 1 round in 60-ft. radius centered on rod wielder.';
					vm.effect.notes = [];
					break;
				case (result > 33 && result <= 36):
					rollSummonAnimal();
					break;
				case (result > 36 && result <= 46):
					var boltDamage = 0;
					for (var d6 = 0; d6 < 6; d6++) {
						boltDamage += Math.floor(Math.random()*6+1);
					}
					vm.effect.name = 'Lightning bolt';
					vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Lightning_Bolt';
					vm.effect.description = 'Lightning bolt (70 ft. long, 5 ft. wide), {'
						+ boltDamage
						+ '} damage';
					vm.effect.notes = ['Reflex DC 15 half'];
					break;
				case (result > 46 && result <= 49):
					vm.effect.name = 'Stream of butterflies';
					vm.effect.url = '';
					vm.effect.description = 'Stream of 600 large butterflies pours forth and flutters around for 2 rounds, blinding everyone (including wielder) within 25 ft.';
					vm.effect.notes = ['Reflex DC 14 negates'];
					break;
				case (result > 49 && result <= 53):
					vm.effect.name = 'Enlarge person';
					vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Enlarge_Person';
					vm.effect.description = 'Enlarge person if within 60 ft. of rod.';
					vm.effect.notes = ['Fortitude DC 13 negates'];
					break;
				case (result > 53 && result <= 58):
					vm.effect.name = 'Darkness';
					vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Darkness';
					vm.effect.description = 'Darkness, 30-ft.-diameter hemisphere, centered 30 ft. away from rod.';
					vm.effect.notes = [
						'All creatures in the area gain concealment (20% miss chance), even creatures that can normally see in such conditions',
						'Normal lights (torches, candles, lanterns, and so forth) are incapable of brightening the area'
					];
					break;
				case (result > 58 && result <= 62):
					vm.effect.name = 'Grass grows';
					vm.effect.url = '';
					vm.effect.description = 'Grass grows in 160-sq.-ft. area before the rod, or grass existing there grows to ten times normal size.';
					vm.effect.notes = ['You fucked up'];
					break;
				case (result > 62 && result <= 65):
					vm.effect.name = 'Turn ethereal';
					vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Ethereal_Plane';
					vm.effect.description = 'Turn ethereal any nonliving object of up to 1,000 lb. mass and up to 30 cu. ft. in size.';
					vm.effect.notes = [
						'KEY WORD: NONLIVING',
						'Object disappears from material plane'
					];
					break;
				case (result > 65 && result <= 69):
					vm.effect.name = 'Reduce wielder';
					vm.effect.url = '';
					vm.effect.description = 'Reduce wielder to 1/12 height (no save).';
					vm.effect.notes = [
						'You fucked up'
					];
					break;
				case (result > 69 && result <= 79):
					var fireballDamage = 0;
					for (var d6 = 0; d6 < 6; d6++) {
						fireballDamage += Math.floor(Math.random()*6+1);
					}
					vm.effect.name = 'Fireball';
					vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Fireball';
					vm.effect.description = 'Fireball at target or 100 ft. straight ahead, {'
						+ fireballDamage
						+ '} damage.';
					vm.effect.notes = ['Reflex DC 15 half'];
					break;
				case (result > 79 && result <= 84):
					vm.effect.name = 'Invisibility';
					vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Invisibility_(Spell)';
					vm.effect.description = 'Invisibility covers rod wielder.';
					vm.effect.notes = [
						'If the recipient is a creature carrying gear, that vanishes, too',
						'Items dropped or put down by an invisible creature become visible',
						'Items picked up disappear if tucked into the clothing or pouches worn by the creature',
						'Any part of an item that the subject carries but that extends more than 10 feet from it becomes visible.',
						'Light sources are invisible, but the light they cast is not'
					];
					break;
				case (result > 84 && result <= 87):
					vm.effect.name = 'Leaves grow';
					vm.effect.url = '';
					vm.effect.description = 'Leaves grow from target if within 60 ft. of rod. These last 24 hours.';
					vm.effect.notes = ['Oh, how nice'];
					break;
				case (result > 87 && result <= 90):
					var total = 0;
					for (var dice = 0; dice < 5; dice++) {
						total += Math.floor(Math.random() * 4) + 1;
					}
					vm.effect.name = 'Stream of rubies';
					vm.effect.url = '';
					vm.effect.description = '10–40 gems, value 1 gp each, shoot forth in a 30-ft.-long stream. Each gem deals 1 point of damage to any creature in its path: Divide {'
						+ total + '} hits among the available targets.';
					vm.effect.notes = [];
					break;
				case (result > 90 && result <= 95):
					vm.effect.name = 'Shimmering colors';
					vm.effect.url = '';
					vm.effect.description = 'Shimmering colors dance and play over a 40-ft.-by-30-ft. area in front of rod. Creatures therein are blinded for {'
						+ Math.floor(Math.random()*6+1) + '} rounds.';
					vm.effect.notes = ['Fortitude DC 15 negates'];
					break;
				case (result > 95 && result <= 97):
					rollChangeColor();
					break;
				case (result > 97 && result <= 100):
					vm.effect.name = 'Flesh to stone';
					vm.effect.url = 'http://www.dandwiki.com/wiki/SRD:Flesh_to_Stone';
					vm.effect.description = 'Flesh to stone (or stone to flesh if target is stone already) if target is within 60 ft.';
					vm.effect.notes = ['Fortitude DC 18 negates'];
					break;
				default:
					vm.effect = {
						'name': '',
						'url': '',
						'description': '',
						'notes': []
					}
			}

			// Don't display 100 (to save space)
			if (result === 100) {
				vm.result = 99;
			} else {
				// TODO: Add leading 0 to single-digit numbers
				vm.result = result;
			}
			$interval.cancel(scrambler);
		}

	}

})();
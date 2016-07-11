import test from 'ava';
import m from './';

test('Throws for non array input', t => {
	t.throws(() => m(), TypeError);
	t.throws(() => m(null), TypeError);
	t.throws(() => m('a', 'b'), TypeError);
});

test('Gets unique elements in the string array', t => {
	t.deepEqual(m(['a', 'b', 'c', 'a', 'b', 'd']), ['a', 'b', 'c', 'd']);
});

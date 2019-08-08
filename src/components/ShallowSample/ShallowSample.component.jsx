import React from 'react';

import Foo from '../Foo/Foo.component';
import Count from '../Count/Count.component';

const ShallowSample = ({ name }) => {
	return (
		<div>
			<h1>shallow rendering test sample</h1>
			<h2 className="name">{name ? name : 'name was not provided!'}</h2>
			<Foo />
			<Foo />
			<Foo />
			<Foo />
			<Count />
		</div>
	);
};

export default ShallowSample;

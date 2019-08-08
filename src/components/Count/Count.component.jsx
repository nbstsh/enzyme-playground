import React, { useState } from 'react';

const Count = () => {
	const [count, steState] = useState(0);

	return (
		<div>
			<span>{count}</span>
			<button onClick={e => steState(count + 1)}>count up!</button>
		</div>
	);
};

export default Count;

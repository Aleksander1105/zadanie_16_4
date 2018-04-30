import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
	return (
		<div>
			<h2>To do list: </h2>
		{props.list.length === 0 ? (<h3>Nothing to be done</h3>) : (<ul><Todo list={props.list} /></ul>)}
		</div>
	)
}

export default TodoList;
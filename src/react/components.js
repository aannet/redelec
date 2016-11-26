import React        from 'react';

/**
 *
 * ITEM T odo
 */
export function Todo(props) {
    const { todo } = props;
    if( todo.isDone ) {
        return <strike>{todo.text}</strike>;
    }
    else {
        return <span>{todo.text}</span>;
    }
}

/**
 *
 * Item T odoList
 */
export function TodoList(props) {
    const { todos } = props;

    return (
      <div className="todo">
          <input type="text" placeholder="Add todo"/>
          <ul className="todo__list">
              {
                  todos.map(t => (
                      <li key={t.id} className="todo__item">
                          <Todo todo={t} />
                      </li>
                    ))
              }
          </ul>
      </div>
    );
}
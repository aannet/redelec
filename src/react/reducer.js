const init = List([]);

export default function(todos=init, action) {
    switch(action.type) {
        case 'ADD_TODO':
            return todos.push(action.payload);

        case 'TOGGLE_TODO':

        default: return todos;
    }
}

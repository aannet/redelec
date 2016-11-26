const uid = () => Math.random().toString(34).slice(2);

/**
 * @TODO: trouver le moyen de faire un nouvel objet??
 * @param text
 * @returns {{type: string, payload: {id, isDone: boolean, text: *}}}
 */
export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        payload: {
            id: uid(),
            isDone: false,
            text: text
        }
    }
}



export function toogleTodo(id) {
    return{
        type: 'TOOGLE_TODO',
        payload: id
    }
}
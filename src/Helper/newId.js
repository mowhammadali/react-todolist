export const createNewId = todos => {
    const ids = todos.map(todo => {
        return todo.id;
    })
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
}
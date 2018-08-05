let latestId = 0;

const generateId = () => latestId += 1;

export const createTodo = (todo) => ({
    id:   generateId(),
    task: todo,
    done: false,
});


import{ useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (newTask.trim()) {
        addTask({ id: Date.now(), text: newTask });
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        placeholder='Enter your Task'
        onChange={e => setNewTask(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;

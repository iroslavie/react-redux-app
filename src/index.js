import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { taskCompleted, titleChange, titleDeleted } from "./store/task";
import configureStore from "./store/store";

const store = configureStore();

const App = (params) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState);
    });
  }, []);

  const completeTask = (taskId) => {
    store.dispatch(taskCompleted(taskId));
  };

  const changeTitle = (taskId) => {
    store.dispatch(titleChange(taskId));
  };

  const deleteTitle = (taskId) => {
    store.dispatch(titleDeleted(taskId));
  };

  return (
    <>
      <h1> Арр </h1>
      <ul>
        {state.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{`Completed: ${el.completed}`}</p>
            <button onClick={() => completeTask(el.id)}>Complete</button>
            <button onClick={() => changeTitle(el.id)}>Change Title</button>
            <button onClick={() => deleteTitle(el.id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import AnecdoteForm from "./components/AnecdoteForm";
//import AnecdoteList from "./components/AnecdoteList";
import ShowAnecdotes from "./components/ShowAnecdotes";

import Notification from "./components/Notification";
import Filter from "./components/Filter";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";

const App = props => {
  useEffect(() => {
    props.initializeAnecdotes();
  }, [props]);

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <ShowAnecdotes />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
};

export default connect(
  null,
  { initializeAnecdotes }
)(App);

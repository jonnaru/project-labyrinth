import { createSlice } from '@reduxjs/toolkit';


export const game = createSlice({
  name: 'game',
  initialState: {
    loading: false,
    username: '',
    gameState: {
      description: '',
      actions: []
    }
  },
  reducers: {
    setGameState: (state, action) => {
      const newState = state
      newState.gameState = action.payload
      return newState

    },
    setUserName: (state, action) => {
      const newState = state
      newState.username = action.payload
      return newState
    },
    // setLoading: (state, action) => {
    //     state.isLoading = action.payload;
    //   },
}
});

export const startNewGame = (username) => {
  return (dispatch) => {
    //set loadin
    dispatch(game.actions.setUserName(username))

    fetch("https://wk16-backend.herokuapp.com/start", {
      method:'POST',
      headers: { "content-Type": "application/json" }, 
      body: JSON.stringify({ username: username })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameState(json))
       //unset loading
       

      })
  }
}

export const executeAction = (username, type, direction) => {
  return (dispatch) => {
    console.log(username, type, direction)
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: 'POST',
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        type: type,
        direction: direction
      })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameState(json))
      })
  }
}




//   export const fetchTodos = () => {
//     return (dispatch) => {
//       dispatch(ui.actions.setLoading(true));
//       fetch("http://jsonplaceholder.typicode.com/todos")
//         .then((res) => res.json())
//         .then((json) => {
//           dispatch(todos.actions.setTodos(json));
//           dispatch(ui.actions.setLoading(false));
//         });
//     };
//   };
  
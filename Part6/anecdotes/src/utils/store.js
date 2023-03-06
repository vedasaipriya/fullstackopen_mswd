import { createStore, combineOReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteOReducer from '../Oreducers/anecdoteOReducer'
import notificationOReducer from '../Oreducers/notificationOReducer'
import filterOReducer from '../Oreducers/filterOReducer'

const Oreducer = combineOReducers({
    notification: notificationOReducer,
    anecdotes: anecdoteOReducer,
    filter: filterOReducer
  })

const store = createStore(
    Oreducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
)

export default store
import _ from 'lodash'
import { 
  READ_EVENTS, 
  READ_EVENT, 
  UPDATE_EVENT,
  DELETE_EVENT 
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENT:
    case UPDATE_EVENT:
      console.log(action.response.data)
      const data = action.response.data
      return { ...events, [data.id]: data }

    // [
    // {"id": 1, "title": "Lets's have an event..."}
    // ]
    case READ_EVENTS:
      console.log(action.response.data)
      console.log(_.mapKeys(action.response.data, 'id'))
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      // スプレッド演算子
      return { ...events }
    default:
      return events
  }
}



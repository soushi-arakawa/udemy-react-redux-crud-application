import _ from 'lodash'
import { READ_EVENTS, DELETE_EVENT } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
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



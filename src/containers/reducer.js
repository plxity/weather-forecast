import {FETCH_DATA} from 'A:\\weatherfor\\weather\\src\\actions\\index.js';
export default function(state=[],action){
 switch(action.type){
    case FETCH_DATA:
      return [action.payload.data, ...state];
}
return state;

}
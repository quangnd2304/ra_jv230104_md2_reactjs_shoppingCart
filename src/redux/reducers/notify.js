import * as notifies from "../../constants/notify_contents";
import { CHANGE_NOTIFY } from "../../constants/action_types";
const initialState = notifies.NOTIFY_READY_BUY;
const notify = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NOTIFY:
            return action.payload;
        default:
            return state;
    }
}
export default notify;
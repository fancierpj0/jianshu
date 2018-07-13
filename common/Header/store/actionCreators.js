import {types} from './index';

export default {
  handleInputFocus(payload) {
    return {type: types.HANDLE_INPUT_FOCUSED, payload}
  }
  ,handleInputBlur(payload) {
    return {type: types.HANDLE_INPUT_BLUR, payload}
  }
}

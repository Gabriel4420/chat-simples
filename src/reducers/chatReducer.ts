import { Message } from "@/types/Message";
type ChatActions = {
  switchAction: {
    type: "add";
    payload: {
      user: string;
      text: string;
    };
  };
};
export const chatReducer = (state: Array<Message>, action: ChatActions) => {
  switch (action.switchAction.type) {
    case "add":
      return [
        ...state,
        {
          id: state.length,
          user: action.switchAction.payload.user,
          text: action.switchAction.payload.text,
        },
      ];
    default:
      return state;
  }
};



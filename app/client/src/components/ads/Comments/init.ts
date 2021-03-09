import { CommentParentTypes } from "reducers/uiReducers/commentsReducer";
import { updateAndSaveLayout } from "actions/pageActions";

const dsl = require("./dsl.json");

export const updateLayout = () => updateAndSaveLayout(dsl.widgets as any);

export const getTestComments = () => {
  const comments = Object.entries(dsl.widgets).map(([widgetId], index) => {
    return {
      parentType: CommentParentTypes.widget,
      refId: widgetId,
      meta: {
        position: { top: 10, left: 15 },
      },
      body: widgetId,
      id: `${index}`,
    };
  });

  return comments;
};

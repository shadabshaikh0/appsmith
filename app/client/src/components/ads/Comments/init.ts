import { updateAndSaveLayout } from "actions/pageActions";

const dsl = require("./dsl.json");

export const updateLayout = () => updateAndSaveLayout(dsl.widgets as any);

export const getTestComments = () => {
  const commentThreads = Object.entries(dsl.widgets).map(
    ([widgetId], index) => {
      return {
        refId: widgetId,
        meta: {
          position: { top: 10, left: 15 },
        },
        id: `${index}`,
        comments: [{ body: widgetId }],
      };
    },
  );

  return commentThreads;
};

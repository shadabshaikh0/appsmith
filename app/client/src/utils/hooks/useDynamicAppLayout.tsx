import { updateWidgetPropertyRequest } from "actions/controlActions";
import { theme } from "constants/DefaultTheme";
import { ReduxActionTypes } from "constants/ReduxActionConstants";
import {
  GridDefaults,
  MAIN_CONTAINER_WIDGET_ID,
  RenderModes,
} from "constants/WidgetConstants";
import { nextAvailableRowInContainer } from "entities/Widget/utils";
import { debounce } from "lodash";
import { AppsmithDefaultLayout } from "pages/Editor/MainContainerLayoutControl";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "reducers";
import { getWidget, getWidgets } from "sagas/selectors";
import { getAppMode } from "selectors/applicationSelectors";
import {
  getCurrentApplicationLayout,
  getCurrentPageId,
} from "selectors/editorSelectors";
import { useWindowSizeHooks } from "./dragResizeHooks";

export const useDynamicAppLayout = () => {
  const { width: screenWidth, height: screenHeight } = useWindowSizeHooks();
  const mainContainer = useSelector((state: AppState) => getWidget(state, "0"));
  const currentPageId = useSelector(getCurrentPageId);
  const appMode = useSelector(getAppMode);
  const canvasWidgets = useSelector(getWidgets);
  const appLayout = useSelector(getCurrentApplicationLayout);
  const dispatch = useDispatch();

  const calculateFluidMaxWidth = (
    screenWidth: number,
    layoutMaxWidth: number,
  ) => {
    const screenWidthWithBuffer = 0.95 * screenWidth;
    const widthToFill =
      appMode === "EDIT"
        ? screenWidthWithBuffer - parseInt(theme.sidebarWidth)
        : screenWidth;
    if (layoutMaxWidth < 0) {
      return widthToFill;
    } else {
      return widthToFill < layoutMaxWidth ? widthToFill : layoutMaxWidth;
    }
  };

  const resizeToLayout = (
    screenWidth: number,
    appLayout = AppsmithDefaultLayout,
  ) => {
    const { type, width: layoutMaxWidth } = appLayout;
    const layoutWidth =
      type === "FLUID"
        ? calculateFluidMaxWidth(screenWidth, layoutMaxWidth)
        : layoutMaxWidth;
    const { rightColumn } = mainContainer;
    if (rightColumn !== layoutWidth) {
      dispatch({
        type: ReduxActionTypes.UPDATE_CANVAS_LAYOUT,
        payload: {
          width: layoutWidth,
        },
      });
    }
  };

  const debouncedResize = useCallback(debounce(resizeToLayout, 250), [
    mainContainer,
  ]);

  useEffect(() => {
    if (appMode === "EDIT") {
      const nextAvailableRow = nextAvailableRowInContainer(
        MAIN_CONTAINER_WIDGET_ID,
        canvasWidgets,
      );
      const gridRowHeight = GridDefaults.DEFAULT_GRID_ROW_HEIGHT;
      const calculatedCanvasHeight = nextAvailableRow * gridRowHeight;
      if (calculatedCanvasHeight < screenHeight) {
        const buffer = gridRowHeight;
        const calculatedMinHeight =
          Math.floor((screenHeight - buffer) / gridRowHeight) * gridRowHeight;
        dispatch(
          updateWidgetPropertyRequest(
            MAIN_CONTAINER_WIDGET_ID,
            "minHeight",
            calculatedMinHeight,
            RenderModes.CANVAS,
          ),
        );
      }
    }
  }, [currentPageId]);

  useEffect(() => {
    debouncedResize(screenWidth, appLayout);
  }, [screenWidth]);

  useEffect(() => {
    resizeToLayout(screenWidth, appLayout);
  }, [appLayout, currentPageId]);
};

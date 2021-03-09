import React from "react";
import Comments from "./Comments";

type Props = {
  children: React.ReactNode;
  refId: string;
};

const OverlayCommentsWrapper = ({ children, refId }: Props) => {
  return (
    <div>
      {children}
      <Comments refId={refId} />
    </div>
  );
};

export default OverlayCommentsWrapper;

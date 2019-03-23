import React, { Suspense } from "react";

const Loading = Component => props => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component {...props} />
  </Suspense>
);

export default Loading;

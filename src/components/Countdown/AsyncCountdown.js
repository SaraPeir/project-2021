import loadable from "@loadable/component";

// Countdown component is loaded by webpack only if user can see it. 
// It's not included in main bundle any more

export default loadable(() =>
  import(/* webpackChunkName: "countdown" */ "./Countdown")
);
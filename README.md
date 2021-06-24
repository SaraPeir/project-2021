# project-2021

react-express-webpack boilerplate

References:
1. https://dev.to/riyanegi/setting-up-webpack-5-with-react-and-babel-from-scratch-2021-271l
2. https://dev.to/lschwall/make-a-react-app-with-webpack-babel-and-express-30n8


Optimization
Reference: https://blog.logrocket.com/guide-performance-optimization-webpack/

1. Added mini-css-extract-plugin, to create a bundle apart for style sheets and embed them directly in html and avoid FOUC
2. manifest is bundled apart (runtimeChunk)
3. Added @loadable/components library to load in a separated bundle components which cannot be never seen by the user
4. node-modules content is bundled apart (splitChunks)
5. shared content is bundled apart (splitChunks)
6. External dependencies (React and React Dom) excluded from bundles (externals): TODO
7. Use of contenthash for long term caching
8. optimization.moduleIds = "deterministic" to avoid changes related to resolving order by default (https://webpack.js.org/guides/caching/)
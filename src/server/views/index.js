export default (
  helmet = {},
  appHtml = '',
  initialState = {},
  styleTags,
  bundles
) =>
  `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${helmet.title.toString()}
      ${styleTags}
    </head>
    <body>
      <div id="root">${appHtml}</div>

      <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script type="text/javascript" src="/vendor.bundle.js"></script>
      ${bundles
        .map((bundle) => `<script src="/${bundle.file}"></script>`)
        .join('\\n')}
    </body>
  </html>`;

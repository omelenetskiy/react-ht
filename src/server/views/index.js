const index = (helmet = {}, appHtml = "", initialState = {}, css) =>
  `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${helmet.title.toString()}
</head>
<body>
    <div id="root">${appHtml}</div>

    <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
    </script>
    
    <script type="text/javascript" src="bundle.js"></script>
</body>
</html>`;

export default index;

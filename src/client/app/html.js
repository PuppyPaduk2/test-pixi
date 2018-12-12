export default props => `
<!doctype html>
<html lang="ru">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${props.title || ''}</title>
  </head>

  <body style="padding: 0; margin: 0;">
    <div id="root">${props.content}</div>
  </body>
  ${(props.modules || []).map(path => `<script src="${path}.js"></script>`).join('\n')}
</html>
`;

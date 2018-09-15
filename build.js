const fs = require("fs");
const util = require("util");
const xml2js = require("xml2js");
const handlebars = require("handlebars");
const glob = require("glob");

fs.createReadStream("LICENSE").pipe(
  fs.createWriteStream("BootstrapSnippets/LICENSE.txt")
);

var parser = new xml2js.Parser({
  async: false,
  explicitRoot: false,
  explicitArray: false,
  ignoreAttrs: false
});

glob(
  __dirname + "/BootstrapSnippets/Snippets/HTML/Bootstrap/*.snippet",
  function(err, files) {
    var snippets = [];

    files.forEach(function(file) {
      fs.readFile(file, { encoding: "utf8" }, function(err, data) {
        parser.parseString(data, function(err, result) {
          var snippet = {
            file: file,
            title: result.CodeSnippet.Header.Title,
            shortcut: result.CodeSnippet.Header.Shortcut,
            description: result.CodeSnippet.Header.Description,
            language: result.CodeSnippet.Snippet.Code.$.Language,
            declarations: []
          };

          if (
            result.CodeSnippet.Snippet.Declarations &&
            result.CodeSnippet.Snippet.Declarations.Literal
          ) {
            if (util.isArray(result.CodeSnippet.Snippet.Declarations.Literal)) {
              result.CodeSnippet.Snippet.Declarations.Literal.forEach(function(
                declaration
              ) {
                snippet.declarations[snippet.declarations.length] = {
                  id: declaration.ID,
                  tooltip: declaration.ToolTip,
                  default: declaration.Default
                };
              });
            } else {
              snippet.declarations[snippet.declarations.length] = {
                id: result.CodeSnippet.Snippet.Declarations.Literal.ID,
                tooltip:
                  result.CodeSnippet.Snippet.Declarations.Literal.ToolTip,
                default: result.CodeSnippet.Snippet.Declarations.Literal.Default
              };
            }
          }

          snippets[snippets.length] = snippet;

          if (snippets.length == files.length) {
            processSnippets(snippets);
          }
        });
      });
    });
  }
);

function processSnippets(snippets) {
  snippets.sort(function(a, b) {
    var keyA = a.shortcut,
      keyB = b.shortcut;

    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;

    return 0;
  });

  fs.readFile("snippet-listing-markdown.handlebars", function(err, data) {
    var template = handlebars.compile(data.toString());
    var markdown = template({ snippets: snippets });

    fs.writeFileSync("snippet-listing.md", markdown);
  });
}

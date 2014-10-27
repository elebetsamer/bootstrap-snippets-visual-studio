var fs = require('fs'),
    path = require('path'),
    util = require('util'),
    xml2js = require('xml2js'),
    jade = require('jade'),
    handlebars = require('handlebars');

fs.createReadStream('LICENSE').pipe(fs.createWriteStream('BootstrapSnippets/LICENSE.txt'));

var parser = new xml2js.Parser({async: true, explicitRoot: false, explicitArray: false, ignoreAttrs: false});

fs.readdir(__dirname + '/BootstrapSnippets/Snippets/HTML/Bootstrap/', function (err, files) {
    if (err) {
        throw err;
    }

    var filteredFiles = files.filter(function (file) {
            return path.extname(file) == '.snippet';
        }),
        snippets = [];

    filteredFiles.forEach(function (file) {
        //console.log(file);
        fs.readFile(__dirname + '/BootstrapSnippets/Snippets/HTML/Bootstrap/' + file, function (err, data) {
            parser.parseString(data, function (err, result) {
                var snippet = {
                    'file': file,
                    'title': result.CodeSnippet.Header.Title,
                    'shortcut': result.CodeSnippet.Header.Shortcut,
                    'description': result.CodeSnippet.Header.Description,
                    'language': result.CodeSnippet.Snippet.Code.$.Language,
                    'declarations': []
                }

                if (result.CodeSnippet.Snippet.Declarations && result.CodeSnippet.Snippet.Declarations.Literal) {
                    if (util.isArray(result.CodeSnippet.Snippet.Declarations.Literal)) {
                        result.CodeSnippet.Snippet.Declarations.Literal.forEach(function (declaration) {
                            snippet.declarations[snippet.declarations.length] = {
                                'id': declaration.ID,
                                'tooltip': declaration.ToolTip,
                                'default': declaration.Default
                            };
                        });
                    } else {
                        snippet.declarations[snippet.declarations.length] = {
                            'id': result.CodeSnippet.Snippet.Declarations.Literal.ID,
                            'tooltip': result.CodeSnippet.Snippet.Declarations.Literal.ToolTip,
                            'default': result.CodeSnippet.Snippet.Declarations.Literal.Default
                        };
                    }
                }

                snippets[snippets.length] = snippet;

                if (snippets.length == filteredFiles.length) {
                    processSnippets(snippets);
                }
            });
        });
    });


});

function processSnippets(snippets) {
    snippets.sort(function (a, b) {
        var keyA = a.shortcut,
            keyB = b.shortcut;

        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;

        return 0;
    });

    fs.readFile("snippet-listing-markdown.handlebars", function (err, data) {
        var template = handlebars.compile(data.toString());
        var markdown = template({snippets: snippets});

        fs.writeFile("snippet-listing.md", markdown);
    });

//    var html = jade.renderFile("snippet-listing.jade", {snippets: snippets});
//
//    fs.writeFile("snippet-listing.html", html);
}
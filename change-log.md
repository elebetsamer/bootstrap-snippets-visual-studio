Change log
==========

Version 1.0.14
--------------

Update npm packages to current versions.

Added support for VS 16.0 - Thanks again to [Mads Kristensen](https://github.com/madskristensen) for this [pull request](https://github.com/elebetsamer/bootstrap-snippets-visual-studio/pull/20)

Version 1.0.13
--------------

Upgraded to VSIX v3 to support VS 2017 - Thanks [Mads Kristensen](https://github.com/madskristensen) for this [pull request](https://github.com/elebetsamer/bootstrap-snippets-visual-studio/pull/14)

Version 1.0.12
--------------

Bump Bootstrap version to 3.3.7

Bump html5shiv to v3.7.3

Bump jQuery version to 1.12.4

Update snippets based on current bootstrap docs.

Update snippets to use spaces instead of tabs (because the bootstrap docs/examples use spaces).

Add `$end$` tags to all snippets to control cursor placement when snippet is inserted. Most snippets will place the cursor just at the end of the snippet.

Version 1.0.11
--------------

Bump Bootstrap version to 3.3.5

A big thanks to [Mads Kristensen](https://github.com/madskristensen) for his [pull request](https://github.com/elebetsamer/bootstrap-snippets-visual-studio/pull/8):

1. Added an icon for each snippets
  - Each icon works for both Light and Dark theme
2. Update the titles of each snippet
  - Removed _Bootstrap 3.x_ and change casing
3. Updated .csproj file so the VSIX project can be opened in VS2015 as well VS2013


Version 1.0.10
-------------

Add missing snippets in to VSIX.

Version 1.0.9
-------------

Bump Bootstrap version to 3.3.4.  
Removed support for Visual Studio Express SKUs. Couldn't get this to work.

Version 1.0.8
-------------

Added support for Visual Studio Express 2012 for Web and Visual Studio Express 2013 for Web.

Version 1.0.7
-------------

Updated snippet for media object and media list. Using new media-left and media-right classes instead of depreciated pull-left and pull-right.

Version 1.0.6
-------------

Bump Bootstrap version to 3.3.2.  
Bump jQuery version from *1.11.1* to *1.11.2*.  
Add support for Visual Studio 2015 (thanks to [Mads Kristensen](https://github.com/madskristensen) for the [pull request](https://github.com/elebetsamer/bootstrap-snippets-visual-studio/pull/2))

Version 1.0.5
-------------

Added the following snippets:

* form-group-select.snippet
* modal-lg.snippet
* modal.sm.snippet

Removed extra white space (tab indents) in a number of snippets.


Version 1.0.4
-------------

Added miscellaneous files (change log, readme, etc) to visual studio solution as "Solution Items".

**template.snippet**:  
Removed icon declaration as it wasn't supposed to be there.  
Added declaration for bootstrap version number. Defaults to version *3.2.0*.  
Changed from netdna.bootstrapcdn.com to maxcdn.bootstrapcdn.com.  
Changed url to not use specific protocol.  
Bump jQuery version from *1.11.0* to *1.11.1*.  
Bump html5shiv version from *3.7.0* to *3.7.2*.

Version 1.0.3
-------------

Added the following snippets:

* form.snippet
* form-group.snippet
* form-group-checkbox.snippet
* form-group-horizontal.snippet
* form-group-horizontal-checkbox.snippet
* form-group-inline.snippet
* form-group-radio.snippet
* form-horizontal.snippet
* form-inline.snippet

Version 1.0.2
-------------

**modal.snippet**:  
Removed button to launch modal. Most of the time I just need the modal code without a button to launch it.  
Also added additional declarations for close-text and save-text.

Version 1.0.1
-------------

**accordion.snippet**  
Small fix to make sure that the data-parent attribute is set to the id that is set as part of the snippet.

Version 1.0
-------------

Initial version
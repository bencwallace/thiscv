# This CV

This CV is open source.

## Why this CV?

This CV is generated using [Handlebars.js](https://handlebarsjs.com/),
a Javascript templating system. Producing a CV / resume with such a system
facilitates the management of multiple CVs that make use of the same data
but may, for instance, differ in the following ways:

* order of sections (e.g. two versions of a CV may differ in their ordering
of the "Education" and "Experience" sections);
* content of sections (e.g. two versions of a CV may differ in the extent of
the work histories they contain);
* global formatting of certain kinds of objects (e.g. dates and names); and
* global style changes (via stylesheets).

The decision to use Handlebars.js rather than some other Javascript-based
templating system was somewhat arbitrary. However, the decision to use
Javascript rather than some other language was based on the ease of
interoperability between Javascript and JSON.

## Usage

### Making a new CV

Simply modify the files `template.json`, `template.html`, and `cv.css` as you
see fit!

### Compiling a CV

This can be done in the following two steps:

1. Let Handlebars generate HTML output; and
2. Convert HTML to desired format (e.g. PDF).

**Generating HTML**

Opening the HTML template file in a browser will typically not produce output
due to the fact that client-side Javascript cannot access client files. One way
to overcome this is to [precompile](https://handlebarsjs.com/precompilation.html).

Another approach, useful for making changes and quickly seeing the results, is
to run a simple HTTP server. One of many way to do this is
Python. With Python installed, navigate to the directory containing the desired
HTML and run

```bash
python -m http.server
```

Then in the browser, navigate to `localhost:8000` and open the template file.

**Converting HTML to PDF**

Probably the easiest way to do this is to print the HTML to PDF from a browser.

---
id: 5f3ec833-66d3-43ef-9f35-97f1b4b0afc5
blueprint: pages
title: Documentation
updated_by: ef9ed893-3cea-4050-91d5-b333e8f9ad02
updated_at: 1673996440
template: documentation/index
article:
  -
    type: heading
    attrs:
      level: 2
    content:
      -
        type: text
        text: 'Aliquam placerat eu enim ac faucibus.'
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie. Aliquam rhoncus ultrices euismod. Morbi auctor scelerisque lacus, nec vehicula eros tempus at. Vestibulum scelerisque finibus leo ac aliquam. Fusce maximus non metus ac facilisis. Sed id nunc a ante interdum efficitur.'
  -
    type: set
    attrs:
      values:
        type: buttons
        buttons:
          -
            template_global: /components/buttons
            label: 'Sign In'
            iconamic: academic-cap
            link_type: url
            target_blank: false
            url: '#'
            button_type: button
  -
    type: paragraph
    content:
      -
        type: text
        text: ' Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue. Nullam commodo bibendum accumsan. Morbi luctus mauris ac fringilla scelerisque. Proin elit sem, tempus consequat lectus nec, volutpat hendrerit ligula. Phasellus molestie blandit erat, vitae ullamcorper ante viverra et.'
  -
    type: set
    attrs:
      values:
        type: code_snippet
        code_field:
          code: |-
            const Prism = require('prismjs');
            const loadLanguages = require('prismjs/components/');
            loadLanguages(['haml']);

            // The code snippet you want to highlight, as a string
            const code = `= ['hi', 'there', 'reader!'].join " "`;

            // Returns a highlighted HTML string
            const html = Prism.highlight(code, Prism.languages.haml, 'haml');
          mode: javascript
  -
    type: paragraph
  -
    type: paragraph
    content:
      -
        type: text
        text: 'Duis ullamcorper vulputate laoreet. Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
---

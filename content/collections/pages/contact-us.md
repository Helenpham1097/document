---
id: 178073b8-7594-4432-9b39-2461b487bce8
blueprint: general_content
template: general_content/index
top_section:
  -
    template: /general_content/hero
    hero_home_title: 'Contact Us'
    hero_home_description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Duis ullamcorper vulputate laoreet. Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
    template_global: /global/default_image
    type: hero
    enabled: true
sections:
  -
    template: /forms/contact_us
    type: contact_us_form
    enabled: true
  -
    template: /global/section_title
    center_title_pre_title: '24/7 customer support'
    center_title_title: 'Looking for tech support?'
    center_title_textarea:
      -
        type: paragraph
        content:
          -
            type: text
            text: "Email\_"
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'mailto:support@myhost.nz'
                  target: _blank
                  rel: null
            text: support@myhost.nz
          -
            type: hard_break
          -
            type: text
            text: '(24 hours, 7 days a week)'
    toggle_color: true
    type: section_title
    enabled: true
  -
    template: /general_content/two_text_columns
    markdown_a: asdads
    markdown_b: asdasda
    type: two_text_columns
    enabled: false
    columns:
      -
        markdown: |-
          ## Call us
          [0800 454 537](#)
           (24 hours, 7 days a week)
        type: column
        enabled: true
      -
        markdown: |-
          ## Snail mail
          PO Box 11859 
          Ellerslie
           Auckland 1542
           New Zealand
        type: column
        enabled: true
      -
        markdown: |-
          ## Our office
          [44 Olive Road](https://goo.gl/maps/WjGdjKFwtZnYpW1U9).
          Penrose 
          Auckland 1061
          New Zealand
        type: column
        enabled: true
title: 'Contact Us'
updated_by: bdf0548e-f14e-4b7d-9abd-d2223cb02cec
updated_at: 1655417251
---

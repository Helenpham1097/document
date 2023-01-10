---
id: b8e14c51-9bd5-4199-85c8-f06ad6bbe15e
blueprint: general_content
template: general_content/index
top_section:
  -
    type: hero_general_content
    enabled: true
    hero_general_content_title: 'General Content Title'
    hero_general_content_textarea: 'Serverless is the future of hosting. We’re building a brand new serverless platform from the ground up for your existing websites and applications so you get all the serverless benefits without the pain.'
    hero_general_content_image: placeholder-image.jpg
    template: /home/hero_home
    template_global: /global/default_image
    buttons:
      -
        template_global: /global/buttons
        link_type: email
        target_blank: true
        url: '#'
        button_type: secondary
        label: 'About Us'
        email: asda@casc.ck
        attr_title: title
        attr_aria: Aria
        iconamic: arrow-circle-up
      -
        template_global: /global/buttons
        label: Otro
        link_type: entry
        target_blank: true
        entry: 128bc187-e58c-4ccc-a5f7-587727470a54
        button_type: inline
        attr_title: 'Learn more'
        attr_aria: Aria
      -
        template_global: /global/buttons
        label: email
        link_type: email
        target_blank: false
        email: metabolic.ds@gmail.com
        button_type: button
        iconamic: mail
sections:
  -
    template: /general_content/_article
    article:
      -
        type: set
        attrs:
          values:
            type: buttons
            buttons:
              -
                template_global: /components/buttons
                label: 'Click me'
                link_type: url
                target_blank: false
                url: '#'
                button_type: button
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Duis ullamcorper vulputate laoreet. Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
      -
        type: set
        attrs:
          values:
            type: figure
            image: 09054a5f40e858381279a62e2ee534a7.webp
            size: lg
            caption: caption
      -
        type: set
        attrs:
          values:
            type: video
            youtube_url: 'https://www.youtube.com/watch?v=Zs9Tifup1Bc'
            size: lg
            caption: video
      -
        type: set
        attrs:
          values:
            type: table
            size: xl
            first_row_headers: true
            first_column_headers: true
            table:
              -
                cells:
                  - 'this is a title column'
                  - 'this is a second column'
                  - ''
                  - ''
              -
                cells:
                  - 'this is a title row'
                  - 'This is some content'
                  - 'This is some content'
                  - 'This is some content'
              -
                cells:
                  - 'this is a title row'
                  - 'This is some content'
                  - 'This is some content'
                  - 'This is some content'
              -
                cells:
                  - 'this is a title row'
                  - 'This is some content'
                  - 'This is some content'
                  - 'This is some content'
            caption: 'This is some Caption'
      -
        type: set
        attrs:
          values:
            type: pull_quote
            size: md
            quote: 'Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue. Nullam commodo bibendum accumsan. Morbi luctus mauris ac fringilla scelerisque. Proin elit sem, tempus consequat lectus nec, volutpat hendrerit ligula. Phasellus molestie blandit erat, vitae ullamcorper ante viverra et.'
            author: Author
      -
        type: heading
        attrs:
          level: 1
        content:
          -
            type: text
            text: 'this is an H1'
      -
        type: heading
        attrs:
          level: 2
        content:
          -
            type: text
            text: 'this is an H2'
      -
        type: heading
        attrs:
          level: 3
        content:
          -
            type: text
            text: 'this is an H3'
    type: article
    enabled: true
title: 'Component Test'
updated_by: bdf0548e-f14e-4b7d-9abd-d2223cb02cec
updated_at: 1666757956
---

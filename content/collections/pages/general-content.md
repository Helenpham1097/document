---
title: 'General content'
updated_by: bdf0548e-f14e-4b7d-9abd-d2223cb02cec
updated_at: 1637273789
blueprint: general_content
description: Lorem
template: general_content/layout
subheader: sdasda
sections:
  -
    template: /general_content/image_gallery
    display_title_section:
      -
        template: /global/section_title
        center_title_pre_title: null
        center_title_title: 'List of images'
        center_title_textarea: null
        toggle_color: false
        type: section_title
        enabled: true
    items:
      -
        template: null
        template_global: /global/default_image
        default_image: serverless-nights-php-quinitin.png
        type: image
        enabled: true
      -
        template: null
        template_global: /global/default_image
        default_image: bb28417eb2b2507580ab0f08bf09ea69.webp
        type: image
        enabled: true
      -
        template: null
        template_global: /global/default_image
        default_image: ice-cream-cones.jpeg
        type: image
        enabled: true
    type: iimage_gallery
    enabled: true
  -
    template: /general_content/text_content
    markdown: |
      ## h2 Heading
      ### h3 Heading
      #### h4 Heading
      ##### h5 Heading
      ###### h6 Heading
      
      
      ## Horizontal Rules
      
      ___
      
      ---
      
      ***
      
      
      ## Emphasis
      
      **This is bold text**
      
      __This is bold text__
      
      *This is italic text*
      
      _This is italic text_
      
      ~~Strikethrough~~
      
      
      ## Blockquotes
      
      
      > Blockquotes can also be nested...
      >> ...by using additional greater-than signs right next to each other...
      > > > ...or with spaces between arrows.
      
      
      ## Lists
      
      Unordered
      
      + Create a list by starting a line with `+`, `-`, or `*`
      + Sub-lists are made by indenting 2 spaces:
        - Marker character change forces new list start:
          * Ac tristique libero volutpat at
          + Facilisis in pretium nisl aliquet
          - Nulla volutpat aliquam velit
      + Very easy!
      
      Ordered
      
      1. Lorem ipsum dolor sit amet
      2. Consectetur adipiscing elit
      3. Integer molestie lorem at massa
      
      
      1. You can use sequential numbers...
      1. ...or keep all the numbers as `1.`
      
      Start numbering with offset:
      
      57. foo
      1. bar
      
      
      ## Code
      
      Inline `code`
      
      Indented code
      
          // Some comments
          line 1 of code
          line 2 of code
          line 3 of code
      
      
      Block code "fences"
      
      ```
      Sample text here...
      ```
      
      Syntax highlighting
      
      ``` js
      var foo = function (bar) {
        return bar++;
      };
      
      console.log(foo(5));
      ```
      
      Some basic Git commands are:
      ```
      git status
      git add
      git commit
      ```
      
      
      ## Tables
      
      Right aligned columns
      
      | Option | Description |
      | ------:| -----------:|
      | data   | path to data files to supply the data that will be passed into templates. |
      | engine | engine to be used for processing templates. Handlebars is the default. |
      | ext    | extension to be used for dest files. |
      
      
      ## Links
      
      [link text](http://dev.nodeca.com)
      
      [link with title](http://nodeca.github.io/pica/demo/ "title text!")
      
      
      ## Images
      
      ![Nature or water](https://source.unsplash.com/1600x900/?water)
      ![Nature or water](https://source.unsplash.com/1600x900/?nature "Nature or water")
    type: markdown_text
    enabled: true
  -
    template: /general_content/highlight
    rows:
      -
        highlight_title: 'Highlight 1 Toggle alignment'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue. Nullam commodo bibendum accumsan. Morbi luctus mauris ac fringilla scelerisque. Proin elit sem, tempus consequat lectus nec, volutpat hendrerit ligula. Phasellus molestie blandit erat, vitae ullamcorper ante viverra et. Duis ullamcorper vulputate laoreet. Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
        highlight_link: '#'
        highlight_text_link: 'Highlight Link'
        highlight_image: 09054a5f40e858381279a62e2ee534a7.webp
        highlight_textcaption:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Caption this'
        type: highlight-item
        enabled: true
        template: /global/buttons
        select: info
        select_icon: null
        text: 'Read more'
        link: '#'
        default_image: 09054a5f40e858381279a62e2ee534a7.webp
        template_global: /global/default_image
      -
        highlight_title: 'Highlight 2'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue. Nullam commodo bibendum accumsan. Morbi luctus mauris ac fringilla scelerisque. Proin elit sem, tempus consequat lectus nec, volutpat hendrerit ligula. Phasellus molestie blandit erat, vitae ullamcorper ante viverra et. Duis ullamcorper vulputate laoreet. Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
        highlight_link: '#'
        highlight_text_link: Link
        highlight_image: b8f5db7682a5fb3fa938f2e26c0e855c.webp
        highlight_textcaption:
          -
            type: paragraph
            content:
              -
                type: text
                text: TextCaption
        type: highlight-item
        enabled: true
        template: /global/buttons
        select: info
        select_icon: null
        text: 'Read mores'
        link: '#'
        default_image: b8f5db7682a5fb3fa938f2e26c0e855c.webp
        template_global: /global/default_image
    reverse_alignment: false
    toggle_alignment: true
    type: highlight
    enabled: false
    toggle_background: true
  -
    template: /general_content/highlight
    rows:
      -
        highlight_title: 'Highlight Reverse Alignment'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue. Nullam commodo bibendum accumsan. Morbi luctus mauris ac fringilla scelerisque. Proin elit sem, tempus consequat lectus nec, volutpat hendrerit ligula. Phasellus molestie blandit erat, vitae ullamcorper ante viverra et. Duis ullamcorper vulputate laoreet. Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
        highlight_link: '#'
        highlight_text_link: 'Highlight Link'
        highlight_image: 09054a5f40e858381279a62e2ee534a7.webp
        highlight_textcaption:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Caption this'
        type: highlight-item
        enabled: true
        template: /global/buttons
        select: info
        select_icon: null
        text: 'Learn more'
        link: '#'
        default_image: 09054a5f40e858381279a62e2ee534a7.webp
        template_global: /global/default_image
      -
        highlight_title: 'Highlight 2'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue. Nullam commodo bibendum accumsan. Morbi luctus mauris ac fringilla scelerisque. Proin elit sem, tempus consequat lectus nec, volutpat hendrerit ligula. Phasellus molestie blandit erat, vitae ullamcorper ante viverra et. Duis ullamcorper vulputate laoreet. Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
        highlight_link: '#'
        highlight_text_link: Link
        highlight_image: b8f5db7682a5fb3fa938f2e26c0e855c.webp
        highlight_textcaption:
          -
            type: paragraph
            content:
              -
                type: text
                text: TextCaption
        type: highlight-item
        enabled: true
        template: /global/buttons
        select: background
        select_icon: mail
        text: 'Contact Us'
        link: '#'
        default_image: b8f5db7682a5fb3fa938f2e26c0e855c.webp
        template_global: /global/default_image
    reverse_alignment: false
    toggle_alignment: true
    type: highlight
    enabled: false
    toggle_background: false
  -
    template: /general_content/features_columns
    items:
      -
        template: /global/buttons
        features_columns_title: 'Response time'
        features_columns_subtitle: 'Response time'
        features_columns_list:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie. Aliquam rhoncus ultrices euismod. Morbi auctor scelerisque lacus, nec vehicula eros tempus at. Vestibulum scelerisque finibus leo ac aliquam. '
        type: column
        enabled: true
        feature_image: bb28417eb2b2507580ab0f08bf09ea69.webp
        link: '#'
        select: info
        select_icon: null
        text: 'Learn more'
        default_image: 09054a5f40e858381279a62e2ee534a7.webp
        template_global: /global/default_image
      -
        template: /global/buttons
        feature_image: b8f5db7682a5fb3fa938f2e26c0e855c.webp
        features_columns_title: 'Response time'
        features_columns_subtitle: 'Response time'
        features_columns_list:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Ut ornare enim at elit molestie congue. Nullam commodo bibendum accumsan. Morbi luctus mauris ac fringilla scelerisque. Proin elit sem, tempus consequat lectus nec, volutpat hendrerit ligula. Phasellus molestie blandit erat, vitae ullamcorper ante viverra et. '
        type: column
        enabled: true
        link: '#'
        select: background
        select_icon: chevron-right
        text: 'Learn More'
        default_image: 02.svg
        template_global: /global/default_image
      -
        template: /global/buttons
        feature_image: 09054a5f40e858381279a62e2ee534a7.webp
        features_columns_title: 'Response time'
        features_columns_subtitle: 'Response time'
        features_columns_list:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Duis ullamcorper vulputate laoreet. Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
        type: column
        enabled: true
        link: '#'
        select: background-secondary
        select_icon: chevron-right
        text: 'Learn More'
        default_image: 2.png
        template_global: /global/default_image
    type: features_columns_item
    enabled: false
    display_title: true
    center_title_pre_title: 'Pre Title'
    center_title_title: 'Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
    center_title_textarea:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie. Aliquam rhoncus ultrices euismod. \'
    toggle_color: true
    display_title_section:
      -
        template: /global/section_title
        center_title_pre_title: 'Pre Title'
        center_title_title: 'Section title'
        center_title_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie. Aliquam rhoncus ultrices euismod. Morbi auctor scelerisque lacus, nec vehicula eros tempus at. Vestibulum scelerisque finibus leo ac aliquam. '
        toggle_color: false
        type: section_title
        enabled: true
  -
    template: /global/section_title
    center_title_pre_title: 'Running quickly'
    center_title_title: 'Web Hosting plans'
    center_title_textarea:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Get your website up and running quickly with our tailored Web Hosting plans'
    type: section_title
    enabled: false
    toggle_alignment: true
    toggle_color: false
  -
    template: /global/companies_logo
    companies_title: 'We’re proud to have played a part in these amazing journeys.'
    company:
      -
        company_logo: null
        type: companies
        enabled: true
        template: /global/default_image
        default_image: algolia.svg
        template_global: /global/default_image
      -
        company_logo: algolia.svg
        type: companies
        enabled: true
        template: /global/default_image
        default_image: algolia.svg
        template_global: /global/default_image
      -
        company_logo: algolia.svg
        type: companies
        enabled: true
        template: /global/default_image
        default_image: algolia.svg
        template_global: /global/default_image
    type: companies_logo
    enabled: false
  -
    template: /general_content/steps
    testimonial_section_title: null
    testimonial_text_area: null
    Items:
      -
        step_image: null
        step_title: 'First Step'
        step_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue.'
        step_link: '#'
        step_text_link: Link
        type: Step-item
        enabled: true
        template: /global/buttons
        link: '#'
        select: info
        select_icon: chevron-right
        text: Link
        default_image: 1.png
        template_global: /global/default_image
      -
        step_image: 4.png
        step_title: 'First Step'
        step_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue.'
        step_link: '#'
        step_text_link: Link
        type: Step-item
        enabled: true
        template: /global/buttons
        link: null
        select: null
        select_icon: null
        text: null
        default_image: 1.png
        template_global: /global/default_image
      -
        step_image: 4.png
        step_title: 'First Step'
        step_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue.'
        step_link: '#'
        step_text_link: Link
        type: Step-item
        enabled: true
        template: /global/buttons
        link: null
        select: null
        select_icon: null
        text: null
        default_image: 2.png
        template_global: /global/default_image
      -
        step_image: 4.png
        step_title: 'First Step'
        step_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue.'
        step_link: '#'
        step_text_link: Link
        type: Step-item
        enabled: true
        template: /global/buttons
        link: null
        select: null
        select_icon: null
        text: null
        default_image: 4.png
        template_global: /global/default_image
    type: steps
    enabled: false
  -
    template: /general_content/testimonial
    rows:
      -
        testimonial_title: 'Leroy Jenkins'
        testimonial_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'An audire commodo habemus cum. Ne sed corrumpit'
              -
                type: text
                marks:
                  -
                    type: bold
                text: repudiandae
              -
                type: text
                text: '. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto'
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: '#'
                      target: null
                      rel: null
                text: vituperatoribus
              -
                type: text
                text: '. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.'
        testimonial_link: '#'
        testimonial_text_link: Link
        testimonial_image: profile.png
        testimonial_textcaption: null
        type: Testimonial-item
        enabled: true
    reverse_alignment: false
    toggle_alignment: false
    type: testimonial
    enabled: false
    testimonial_section_title: 'Duo assum utroque appetere an'
    testimonial_text_area:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Pri ex magna scaevola moderatius. Nullam '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: '#'
                  target: null
                  rel: null
            text: accommodare
          -
            type: text
            text: ' no vix, est ei diceret alienum, et sit cetero malorum. Et sea iudico consequat, est sanctus adipisci ex.'
    Items:
      -
        testimonial_image: profile.png
        testimonial_name: 'Lena Oxton'
        testimonial_position: 'Blizzard Entertainment'
        testimonial_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: '01 An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.'
        testimonial_link: '#'
        testimonial_text_link: Link
        type: Testimonial-item
        enabled: true
      -
        testimonial_image: profile.png
        testimonial_name: 'Lena Oxton'
        testimonial_position: 'Blizzard Entertainment'
        testimonial_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: '02 An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.'
        testimonial_link: '#'
        testimonial_text_link: Link
        type: Testimonial-item
        enabled: true
      -
        testimonial_image: profile.png
        testimonial_name: 'Lena Oxton'
        testimonial_position: 'Blizzard Entertainment'
        testimonial_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: '03 An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.'
        testimonial_link: '#'
        testimonial_text_link: Link
        type: Testimonial-item
        enabled: true
      -
        testimonial_image: profile.png
        testimonial_name: 'Lena Oxton'
        testimonial_position: 'Blizzard Entertainment'
        testimonial_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: '04 An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.'
        testimonial_link: '#'
        testimonial_text_link: Link
        type: Testimonial-item
        enabled: true
      -
        testimonial_image: profile.png
        testimonial_name: 'Lena Oxton'
        testimonial_position: 'Blizzard Entertainment'
        testimonial_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: '05 An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.'
        testimonial_link: '#'
        testimonial_text_link: Link
        type: Testimonial-item
        enabled: true
      -
        testimonial_image: profile.png
        testimonial_name: 'Lena Oxton'
        testimonial_position: 'Blizzard Entertainment'
        testimonial_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: '06 An audire commodo habemus cum. Ne sed corrumpit repudiandae. Tota aliquip democritum pro in, nec democritum intellegam ne. Propriae volutpat dissentiet ea sit, nec at lorem inani tritani, an ius populo perfecto vituperatoribus. Eu cum case modus salutandi, ut eum vocent sensibus reprehendunt.'
        testimonial_link: '#'
        testimonial_text_link: Link
        type: Testimonial-item
        enabled: true
  -
    template: /general_content/features_icons
    display_title_section:
      -
        template: /global/section_title
        center_title_pre_title: null
        center_title_title: 'Icon Features'
        center_title_textarea: null
        toggle_color: true
        type: section_title
        enabled: true
    items:
      -
        template: null
        feature_image: 05.svg
        features_columns_title: 'This is a Feature Icon item'
        features_columns_subtitle: null
        features_columns_list:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'This is a Feature Icon item'
              -
                type: hard_break
              -
                type: text
                text: 'Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
          -
            type: paragraph
        type: column
        enabled: true
      -
        template: null
        feature_image: 05.svg
        features_columns_title: 'This is a Feature Icon item'
        features_columns_list:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'This is a Feature Icon item'
              -
                type: hard_break
              -
                type: text
                text: 'Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
        type: column
        enabled: true
      -
        template: null
        feature_image: 05.svg
        features_columns_title: 'This is a Feature Icon item'
        features_columns_list:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'This is a Feature Icon item'
              -
                type: hard_break
              -
                type: text
                text: 'Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
        type: column
        enabled: true
      -
        template: null
        feature_image: 05.svg
        features_columns_title: Feature
        features_columns_list:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie. Aliquam rhoncus ultrices euismod. Morbi auctor scelerisque lacus, nec vehicula eros tempus at. Vestibulum scelerisque finibus leo ac aliquam. Fusce maximus non metus ac facilisis. Sed id nunc a ante interdum efficitu.'
        type: column
        enabled: true
    type: icon_features
    enabled: false
  -
    template: /global/call_to_action
    center_title_pre_title: Suscribe
    center_title_title: 'Title Section'
    center_title_textarea:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Text area to complement the secondary title'
    type: call_to_action
    enabled: false
    call_to_action_pre_title: 'Pre Title'
    call_to_action_title: Suscribe
    call_to_action_textarea:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Text area to complement the secondary title'
    call_to_action_terms:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'By subscribing, you agree with Webslice '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: '#'
                  target: null
                  rel: null
            text: Terms
          -
            type: text
            text: ' of Service and '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: '#'
                  target: null
                  rel: null
            text: 'Privacy Policy'
          -
            type: text
            text: .
    toggle_color: true
    link: '@'
    select: background-secondary
    select_icon: mail
    text: 'Contact Us'
    template_global: /global/buttons
  -
    template: /general_content/social_proof
    social_proof_section_title: null
    social_proof_text_area: null
    Items:
      -
        social_proof_image: profile.png
        social_proof_name: Ariel
        social_proof_position: Designer
        social_proof_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie. Aliquam rhoncus ultrices euismod. Morbi auctor scelerisque lacus, nec vehicula eros tempus at. Vestibulum scelerisque finibus leo ac aliquam.'
        social_proof_link: null
        social_proof_text_link: null
        type: Social-Proof-item
        enabled: true
        template: /global/buttons
        link: '#'
        select: info
        select_icon: null
        text: 'Learn more'
        template_global: /global/buttons
      -
        social_proof_image: 09054a5f40e858381279a62e2ee534a7.webp
        social_proof_name: 'Katie F. Sullivan'
        social_proof_position: 'Robinson Furniture'
        social_proof_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Fusce maximus non metus ac facilisis. Sed id nunc a ante interdum efficitur. Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue.'
        template: /global/buttons
        link: null
        select: null
        select_icon: null
        text: null
        type: Social-Proof-item
        enabled: true
        template_global: /global/buttons
    type: social_proof
    enabled: false
    call_to_action_pre_title: 'Pre Title'
    call_to_action_title: 'Section title'
    call_to_action_textarea:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Duis ullamcorper vulputate laoreet. Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
      -
        type: paragraph
    center_title_pre_title: 'Pre Title'
    center_title_title: 'Pre Title'
    center_title_textarea:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Text area to complement the secondary title'
      -
        type: paragraph
        content:
          -
            type: hard_break
    toggle_color: true
    add_title_section:
      -
        template: /global/section_title
        center_title_pre_title: 'Pre Title'
        center_title_title: 'Section title'
        center_title_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Text area to complement the secondary title'
          -
            type: paragraph
            content:
              -
                type: hard_break
        toggle_color: false
        type: section_title
        enabled: true
    display_title_section:
      -
        template: /global/section_title
        center_title_pre_title: 'Pre Title'
        center_title_title: 'Pre Title'
        center_title_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Text area to complement the secondary title'
        toggle_color: false
        type: section_title
        enabled: true
    link: null
    select: null
    select_icon: null
    text: null
  -
    template: /general_content/pricing_table
    Items:
      -
        template: /global/buttons
        pricing_features_title: asdasd
        pricing_features_subtitle: asda
        pricing_features_list:
          -
            type: paragraph
            content:
              -
                type: text
                text: sdasdasd
        type: column
        enabled: true
        link: '#'
        select: background
        select_icon: chevron-right
        text: 'Choose Plan'
        template_global: /global/buttons
      -
        template: /global/buttons
        pricing_features_title: null
        pricing_features_subtitle: null
        pricing_features_list: null
        type: column
        enabled: true
        link: '#'
        select: background-secondary
        select_icon: chevron-right
        text: 'Most popular'
        template_global: /global/buttons
      -
        template: /global/buttons
        pricing_features_title: null
        pricing_features_subtitle: null
        pricing_features_list: null
        type: column
        enabled: true
        link: '#'
        select: background
        select_icon: chevron-right
        text: 'Choose Plan'
        template_global: /global/buttons
    type: pricing_table
    enabled: false
    items:
      -
        template: null
        pricing_features_title: asda
        pricing_features_subtitle: adsdas
        pricing_features_list:
          -
            type: paragraph
            content:
              -
                type: text
                text: asdasdasda
        type: column
        enabled: true
    center_title_pre_title: 'Pre Title'
    center_title_title: 'Section title'
    center_title_textarea:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Text area to complement the secondary title'
    toggle_color: false
    display_title_section:
      -
        template: /global/section_title
        center_title_pre_title: 'Pre Title'
        center_title_title: 'Section title'
        center_title_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Text area to complement the secondary title'
        toggle_color: true
        type: section_title
        enabled: true
    pricing_toggle: true
  -
    template: /general_content/comparison_table
    header_table:
      -
        brand_left: 05.svg
        brand_right: null
        text: Title
        table_icon: default-avatar.png
        header_column_1:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Header column 1'
        header_column_2:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Header column 2'
        header_column_3:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Header column 2'
    grid:
      -
        text: Bandwidth
        comparison_1:
          -
            type: paragraph
            content:
              -
                type: text
                text: '100 GB-hours'
        comparison_2:
          -
            type: paragraph
            content:
              -
                type: text
                text: '1,000 GB-hours'
        comparison_3:
          -
            type: paragraph
            content:
              -
                type: text
                text: Custom
      -
        text: Team
        comparison_1:
          -
            type: paragraph
            content:
              -
                type: text
                text: '5 seconds'
        comparison_2:
          -
            type: paragraph
            content:
              -
                type: text
                text: '15 seconds'
        comparison_3:
          -
            type: paragraph
            content:
              -
                type: text
                text: '30 seconds'
      -
        text: 'Serverless Function Execution Timeout'
        comparison_1:
          -
            type: paragraph
            content:
              -
                type: text
                text: '5 seconds'
        comparison_2:
          -
            type: paragraph
            content:
              -
                type: text
                text: '15 seconds'
        comparison_3:
          -
            type: paragraph
            content:
              -
                type: text
                text: Custom
      -
        text: text
        comparison_1:
          -
            type: paragraph
            content:
              -
                type: text
                text: comparison_1
        comparison_2: null
        comparison_3:
          -
            type: bullet_list
            content:
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'item 1'
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'item 2'
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'item 3'
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'item 4'
      -
        text: null
        comparison_1:
          -
            type: paragraph
            content:
              -
                type: text
                text: asda
        comparison_2:
          -
            type: paragraph
            content:
              -
                type: text
                text: asdas
        comparison_3:
          -
            type: paragraph
            content:
              -
                type: text
                text: dasda
      -
        text: null
        comparison_1:
          -
            type: paragraph
            content:
              -
                type: text
                text: ' '
        comparison_2:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie. Aliquam rhoncus ultrices euismod. Morbi auctor scelerisque lacus, nec vehicula eros tempus at. Vestibulum scelerisque finibus leo ac aliquam. Fusce maximus non metus ac facilisis. Sed id nunc a ante interdum efficitur. Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue. Nullam commodo bibendum accumsan. Morbi luctus mauris ac fringilla scelerisque. Proin elit sem, tempus consequat lectus nec, volutpat hendrerit ligula. Phasellus molestie blandit erat, vitae ullamcorper ante viverra et. Duis ullamcorper vulputate laoreet. Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
        comparison_3:
          -
            type: paragraph
            content:
              -
                type: text
                text: ' '
    table_caption:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Morbi vulputate ultricies augue in molestie. Aliquam rhoncus ultrices euismod. '
    type: comparison_table
    enabled: false
top_section:
  -
    type: hero_general_content
    enabled: true
    hero_general_content_title: 'General Content Title'
    hero_general_content_textarea: 'Serverless is the future of hosting. We’re building a brand new serverless platform from the ground up for your existing websites and applications so you get all the serverless benefits without the pain.'
    hero_general_content_image: placeholder-image.jpg
    template: /home/hero_home
    hero_home_title: 'Deploy existing websites in seconds'
    hero_home_description:
      -
        type: paragraph
        content:
          -
            type: text
            text: "Move your existing websites onto Webslice and experience serverless hosting that is\_"
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'http://webslice.test/#'
                  target: null
                  rel: null
            text: faster
          -
            type: text
            text: ', more reliable and cheaper than before.'
      -
        type: paragraph
        content:
          -
            type: text
            text: '⚡ Get your free $5 credit upon signing up today!'
    hero_home_image: bb28417eb2b2507580ab0f08bf09ea69.webp
    hero_home_primary_text: cta
    hero_home_primary: null
    hero_home_secondary_text: cta
    hero_home_secondary: null
    link: '@'
    select: background
    select_icon: chevron-right
    text: 'Sign Up'
    default_image: bb28417eb2b2507580ab0f08bf09ea69.webp
    template_global: /global/default_image
id: 26513dc7-59f7-4673-815e-7d9ace16248b
---

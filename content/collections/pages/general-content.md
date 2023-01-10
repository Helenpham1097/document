---
id: 26513dc7-59f7-4673-815e-7d9ace16248b
blueprint: general_content
title: 'General content'
updated_by: bdf0548e-f14e-4b7d-9abd-d2223cb02cec
updated_at: 1667523262
description: Lorem
template: general_content/index
subheader: sdasda
page_builder:
  -
    template: page_builder/feature_section
    add_intro_features: true
    section_title: 'Get started quickly on easy, powerful hosting'
    columns:
      -
        column:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'As soon as you get started with Cloud '
              -
                type: text
                marks:
                  -
                    type: bold
                text: Containers
              -
                type: text
                text: ' you’ll see how fast and '
              -
                type: text
                marks:
                  -
                    type: italic
                text: flexible
              -
                type: text
                text: ' they are. It only takes a few minutes to l'
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: '#'
                      rel: null
                      target: null
                      title: null
                text: 'aunch a server'
              -
                type: text
                text: ', spin up a Container or two and see how much easier development can be with the right infrastructure.'
          -
            type: ordered_list
            attrs:
              order: 1
            content:
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Aliquam placerat eu enim ac faucibus.'
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Donec ac diam congue, lobortis magna nec.'
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Fermentum arcu. Ut ornare enim at elit molestie congue.'
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Nullam commodo bibendum accumsan.'
        type: add_columns
        enabled: true
      -
        column:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie. Aliquam rhoncus ultrices euismod. Morbi auctor scelerisque lacus, nec vehicula eros tempus at. Vestibulum scelerisque finibus leo ac aliquam. Fusce maximus non metus ac facilisis. Sed id nunc a ante interdum efficitur.'
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
                        text: 'Aliquam placerat eu enim ac faucibus.'
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Donec ac diam congue, lobortis magna nec.'
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Fermentum arcu. Ut ornare enim at elit molestie congue.'
              -
                type: list_item
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Nullam commodo bibendum accumsan.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Duis ullamcorper vulputate laoreet. Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
        type: add_columns
        enabled: true
    add_highlight_features: false
    type: feature_section
    enabled: true
  -
    template: /page_builder/tile_steps
    Items:
      -
        template_global: /global/default_image
        default_image: 1.png
        step_title: 'Tile Step'
        step_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie. '
        buttons:
          -
            template_global: /components/buttons
            label: Botton
            link_type: url
            target_blank: false
            url: '#'
            button_type: button
        type: Step-item
        enabled: true
      -
        template_global: /global/default_image
        default_image: 1.png
        step_title: 'Tile Step'
        step_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie. '
        buttons:
          -
            template_global: /components/buttons
            label: Botton
            link_type: url
            target_blank: false
            url: '#'
            button_type: button
        type: Step-item
        enabled: true
      -
        template_global: /global/default_image
        default_image: 1.png
        step_title: 'Tile Step'
        step_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie. '
        buttons:
          -
            template_global: /components/buttons
            label: Botton
            link_type: url
            target_blank: false
            url: '#'
            button_type: button
        type: Step-item
        enabled: true
      -
        template_global: /global/default_image
        default_image: 1.png
        step_title: 'Tile Step'
        step_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie. '
        buttons:
          -
            template_global: /components/buttons
            label: Botton
            link_type: url
            target_blank: false
            url: '#'
            button_type: button
        type: Step-item
        enabled: true
    type: tile_steps
    enabled: true
  -
    template: /page_builder/_multiple_text_columns
    display_title_section:
      -
        center_title_title: 'Nulla vitae elementum'
        type: section_title
        enabled: true
    columns:
      -
        text:
          -
            type: heading
            attrs:
              level: 3
            content:
              -
                type: text
                text: 'Consectetur adipiscing elit.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Cras vel leo et odio viverra consequat. Duis neque elit, posuere vitae bibendum sit amet, auctor eget lectus. Duis tempor in neque eget facilisis. Maecenas ullamcorper ante neque, at aliquam augue bibendum id. Suspendisse ex nibh, varius at sem sit amet, vestibulum tristique nisi. Donec nec ornare nunc. Donec ac enim vestibulum, feugiat nibh sed, lacinia mauris. Etiam sed quam sapien. Aliquam erat volutpat. Praesent sed massa et lacus laoreet feugiat a vel nibh. Proin sed cursus libero. Etiam mattis elit congue, consectetur eros elementum, pellentesque mi.'
        type: column
        enabled: true
      -
        text:
          -
            type: heading
            attrs:
              level: 3
            content:
              -
                type: text
                text: 'Integer ac sodales neque.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'In non suscipit augue, sed tincidunt elit. Donec facilisis dui sapien, eu imperdiet orci pretium ac. Sed pretium, augue eget tristique tempor, risus sapien maximus odio, sit amet lacinia velit justo quis dolor. Aliquam dignissim nibh id libero tempor facilisis. Fusce facilisis, felis in aliquam feugiat, augue turpis malesuada ante, vel egestas tortor leo et massa. Nulla vitae elementum leo. Aliquam accumsan, enim non maximus bibendum, massa purus finibus dui, ac ornare turpis elit a purus. Aenean ut nulla sodales dui mollis maximus eget nec sapien. Donec ac elementum turpis, bibendum facilisis sapien. Praesent molestie pellentesque cursus. Vestibulum sit amet nisi placerat, varius lectus et, vehicula tellus. Aliquam erat volutpat.'
        type: column
        enabled: true
    type: multiple_text_columns
    enabled: true
  -
    template: page_builder/feature_section
    add_intro_features: false
    add_highlight_features: true
    type: feature_section
    enabled: true
    background_select: gradient_background
    highlight_features_title: 'Control changes with cloning and syncing'
    features:
      -
        select_type: icon
        iconamic: adjustments
        title: 'Manage it all in one control panel'
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Have all the tools you need to manage your servers, domain and containers with our purpose-built, easy to use control panel.'
        type: highlight_feature
        enabled: true
      -
        select_type: icon
        iconamic: annotation
        title: 'See all your sites, databases and domains'
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Ditch multiple logins and enjoy the ease of having all your sites, databases and domains in one place, under one account.'
        type: highlight_feature
        enabled: true
      -
        select_type: icon
        iconamic: archive
        title: 'Track your performance and usage'
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'See server load stats, as well as bandwidth, disk, memory, and CPU usage for every Container and server, for periods from an hour to a year.'
        type: highlight_feature
        enabled: true
  -
    template: /components/section_title
    pre_title: Pre-title
    title: 'Title Section'
    textarea_field:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue. Nullam commodo bibendum accumsan. Morbi luctus mauris ac fringilla scelerisque.'
    toggle_color: false
    alignment: center
    type: testimonial
    enabled: true
    testimonial:
      - 24221891-6df7-4106-8ee6-7e790b922d53
      - 0c7d0b62-28ea-4139-a5e5-c206ab916599
      - 71d75866-bcba-4670-84e6-0d74d26d7d20
  -
    template: /page_builder/companies_logo
    companies_title: 'Proudly trusted by thousands of great developers, designers, and businesses.'
    company:
      -
        template_global: /global/default_image
        default_image: brand-logos/auckland-council.png
        type: companies
        enabled: true
      -
        template_global: /global/default_image
        default_image: brand-logos/harvey.png
        type: companies
        enabled: true
      -
        template_global: /global/default_image
        default_image: brand-logos/nzme.png
        type: companies
        enabled: true
      -
        template_global: /global/default_image
        default_image: brand-logos/vector.png
        type: companies
        enabled: true
      -
        template_global: /global/default_image
        default_image: brand-logos/wellington-council.png
        type: companies
        enabled: true
      -
        template_global: /global/default_image
        default_image: brand-logos/asb.png
        type: companies
        enabled: true
      -
        template_global: /global/default_image
        default_image: brand-logos/dutyfree.png
        type: companies
        enabled: true
      -
        template_global: /global/default_image
        default_image: brand-logos/lesmills.png
        type: companies
        enabled: true
    type: companies_logo
    enabled: true
  -
    template: /general_content/toggle
    display_title_section:
      -
        template: /components/section_title
        pre_title: Pre-title
        title: 'Title Section'
        textarea_field:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie.'
        toggle_color: false
        alignment: center
        type: section_title
        enabled: true
    pricing_toggle: true
    Items:
      -
        type: column
        enabled: true
      -
        type: column
        enabled: true
      -
        type: column
        enabled: true
    type: pricing_table
    enabled: true
  -
    template: /page_builder/image_gallery
    display_title_section:
      -
        template: /components/section_title
        pre_title: Pre-title
        title: 'Title Section'
        textarea_field:
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
        alignment: center
        type: section_title
        enabled: true
    items:
      -
        template_global: /global/default_image
        default_image: 09054a5f40e858381279a62e2ee534a7.webp
        type: image
        enabled: true
      -
        template_global: /global/default_image
        default_image: b8f5db7682a5fb3fa938f2e26c0e855c.webp
        type: image
        enabled: true
      -
        template_global: /global/default_image
        default_image: bb28417eb2b2507580ab0f08bf09ea69.webp
        type: image
        enabled: true
    type: image_gallery
    enabled: true
  -
    template: /components/section_title
    title: 'Our latest article'
    toggle_color: false
    type: latest_post
    enabled: true
    pre_title: 'Stay in the loop'
    pre-title: 'Stay in the loop'
    title_section: 'Our latest article'
  -
    template: /general_content/text_content
    type: text_content
    enabled: true
    text:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate ultricies augue in molestie. Aliquam rhoncus ultrices euismod. Morbi auctor scelerisque lacus, nec vehicula eros tempus at. Vestibulum scelerisque '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: '#'
                  rel: noopener
                  target: null
                  title: null
            text: 'finibus leo ac aliquam'
          -
            type: text
            text: '. Fusce maximus non metus ac facilisis. Sed id nunc a ante interdum efficitur.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Aliquam placerat eu enim ac '
          -
            type: text
            marks:
              -
                type: bold
            text: faucibus
          -
            type: text
            text: '. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue. Nullam commodo bibendum accumsan. Morbi luctus mauris ac fringilla scelerisque. Proin elit sem, tempus consequat lectus nec, volutpat hendrerit ligula. Phasellus molestie blandit erat, vitae ullamcorper ante viverra et.viverra et.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Duis ullamcorper vulputate laoreet. Suspendisse consectetur, nisi nec aliquet euismod, ligula quam fermentum ipsum, quis vulputate massa leo blandit ex. Ut tempor vulputate mauris, quis sollicitudin nibh tincidunt vitae.'
  -
    template: /components/section_title
    title: 'Frequently Asked Questions'
    textarea_field:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Nullam commodo bibendum accumsan. Morbi luctus mauris ac fringilla scelerisque. Proin elit sem, tempus consequat lectus nec, volutpat hendrerit ligula.'
    toggle_color: true
    alignment: center
    faq_entries:
      - 57c83bb4-e74d-47f9-924b-1f6ddf8c854a
      - 236c12aa-a0ec-4e7e-8f4e-e67f29243f62
      - ec1dbb6f-3d34-49e2-a387-c28342c8ab42
      - a1c95fbe-5b46-427a-ab56-764bc1fa0e4d
      - a9f9ef1a-f20a-4e06-9353-98d810fa2fe7
      - ff4f50d5-1343-4f9f-bfd2-ded4d205c19a
    type: faq
    enabled: true
  -
    template: /page_builder/highlight
    rows:
      -
        highlight_title: 'Run different software, CMSs, and services without interference'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Making use of technologies like Docker, you can have a Container for each individual website or application, all on your own private server. This makes your hosting far more flexible by allowing each Container to run different software or services, without interfering with each other.'
              -
                type: hard_break
              -
                type: hard_break
              -
                type: text
                text: "Cloud Containers are an easy, flexible and powerful hosting option. With customers already hosting CMSs like\_"
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: 'http://localhost:3000/cloud-containers#'
                      rel: null
                      target: null
                      title: null
                  -
                    type: bold
                text: 'Craft CMS'
              -
                type: text
                text: ",\_"
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: 'http://localhost:3000/cloud-containers#'
                      rel: null
                      target: null
                      title: null
                  -
                    type: bold
                text: Silverstripe
              -
                type: text
                text: ",\_"
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: 'http://localhost:3000/cloud-containers#'
                      rel: null
                      target: null
                      title: null
                  -
                    type: bold
                text: WordPress
              -
                type: text
                text: "\_and more on Cloud Containers, we know your sites will be fast, secure and scalable."
        template_global: /global/default_image
        default_image: color-mode-dark.png
        highlight_textcaption:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Color-mode: Dark'
        type: highlight-item
        enabled: true
    toggle_background: false
    reverse_alignment: false
    toggle_alignment: false
    type: highlight
    enabled: true
top_section:
  -
    type: hero_general_content
    enabled: false
    hero_general_content_title: 'General Content Title'
    hero_general_content_textarea: 'Serverless is the future of hosting. We’re building a brand new serverless platform from the ground up for your existing websites and applications so you get all the serverless benefits without the pain.'
    hero_general_content_image: placeholder-image.jpg
    template: /home/hero_home
    template_global: /global/default_image
    hero_home_title:
      -
        type: paragraph
        content:
          -
            type: text
            text: "Deploy existing websites in\_"
          -
            type: text
            marks:
              -
                type: bold
            text: Seconds
    hero_home_description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Move your existing websites onto Webslice and experience serverless hosting that is faster, more reliable and cheaper than before.'
      -
        type: paragraph
        content:
          -
            type: text
            marks:
              -
                type: bold
            text: '⚡ ️Get your free $5 credit upon signing up today!'
    hero_home_image: 09054a5f40e858381279a62e2ee534a7.webp
    buttons:
      -
        template_global: /components/buttons
        label: boton
        link_type: url
        target_blank: false
        url: '#'
        button_type: button
  -
    template: /general_content/hero
    hero_home_title: 'Hero general content page'
    template_global: /global/default_image
    type: hero
    enabled: true
    hero_home_description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. '
    default_image: 09054a5f40e858381279a62e2ee534a7.webp
    buttons:
      -
        template_global: /components/buttons
        label: Button
        link_type: url
        target_blank: false
        url: '#'
        button_type: button
      -
        template_global: /components/buttons
        label: 'About Us'
        link_type: entry
        target_blank: false
        entry: 128bc187-e58c-4ccc-a5f7-587727470a54
        button_type: secondary
---

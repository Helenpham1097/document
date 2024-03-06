---
id: cf7040f4-473b-4c14-897d-5de59ce6d833
blueprint: home
template: general_content/index
title: Homepage
updated_by: fa61bd1a-7054-4dd6-974f-a1764a47c4ec
updated_at: 1709689693
top_section:
  -
    id: RzzOzBfN
    template: /home/hero_home
    hero_home_title:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Flexible, fast hosting for busy developers'
    hero_home_description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Run what you want, how you want, without running up massive bills'
    hero_home_image: hero-preview.png
    template_global: /global/default_image
    link: '#'
    select: background
    iconamic: academic-cap
    text: 'SIGN UP'
    type: hero_homepage
    enabled: true
    buttons:
      -
        id: gjeb9dTC
        template_global: /components/buttons
        label: 'Get started'
        iconamic: chevrons-right
        link_type: url
        target_blank: false
        url: '#'
        button_type: button
      -
        id: PrVKnxaD
        template_global: /components/buttons
        label: 'Choose plan'
        iconamic: chevron-right
        link_type: url
        target_blank: false
        url: '#'
        button_type: secondary
    grid_features:
      -
        id: lrfrhuc3
        iconamic: expand
        text: Flexibility
      -
        id: lrfrhv51
        iconamic: lock
        text: Security
      -
        id: lrfrhvr5
        iconamic: headphones
        text: Support
      -
        id: lrfrhwd9
        iconamic: clock-3
        text: 'Optional 24/7'
      -
        id: lrfridoi
        iconamic: timer-reset
        text: 'Automated back-ups'
      -
        id: lrfrigs8
        iconamic: map-pin
        text: 'Worldwide locations'
page_builder:
  -
    id: lrzox1cv
    template: page_builder/two_options
    title: 'There are two ways to Webslice'
    sub_title: 'No more complications, there’s two ways make your site available to your customers.'
    boxes:
      -
        id: lrzoxcmj
        template_global: /global/default_image
        iconamic: box
        title: 'Webslice Containers'
        description: 'A platform that lets you run as many independent, flexible environments as you need. One account, one server, dozens of pre-built images (or build your own), and no technical headaches. You control it all. LAUNCHING EARLY 2024.'
        url: 'entry::321f3638-6149-4686-a430-c179ad55fcbe'
        type: box
        enabled: true
        text_link: 'Learn more'
        image: color-mode-dark.png
        image_hover: default-optimized.jpg
      -
        id: lrzoyenc
        template_global: /global/default_image
        iconamic: expand
        title: 'Webslice Scalable'
        description: 'PHP hosting that stretches from almost absolute zero to somewhere near infinity (but you can set your own limits). Bring your PHP apps, no modification required, and discover pay-as-you-go hosting. COMING SOON.'
        type: box
        enabled: true
        text_link: 'Coming Soon'
        image: color-mode-dark.png
        image_hover: photo-1620287341056-49a2f1ab2fdc.jpeg
    type: two_options
    enabled: true
  -
    id: ltf4w1hv
    template: /general_content/_multiple_text_columns
    display_title_section:
      -
        id: ltf4w2tv
        center_title_title: Testimonials
        type: section_title
        enabled: true
    columns:
      -
        id: ltf4w6fq
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: '"I love this platform"'
          -
            type: bulletList
            content:
              -
                type: listItem
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Name, position.'
        type: column
        enabled: true
      -
        id: ltf4wl5f
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: '"WordPress is my favourite thing, and this is my favourite hosting."'
          -
            type: bulletList
            content:
              -
                type: listItem
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Name, position.'
        type: column
        enabled: true
      -
        id: ltf4x5w9
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: '"Here''s a third thing about the Containers platform."'
          -
            type: bulletList
            content:
              -
                type: listItem
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Name, position.'
        type: column
        enabled: true
    type: multiple_text_columns
    enabled: true
  -
    id: ltf4xz31
    template: /page_builder/highlight
    rows:
      -
        id: ltf4y011
        highlight_title: "We're really smart and reliable"
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: "Be confident that we'll do good things, and support you and you do great things."
        template_global: /global/default_image
        default_image: default-avatar-1636583202.png
        highlight_textcaption:
          -
            type: paragraph
            content:
              -
                type: text
                text: '^^ 99.5% uptime, shown in graphic form'
        buttons:
          -
            id: ltf4zdxk
            template_global: /components/buttons
            label: 'Read About Us'
            iconamic: chevron-right-circle
            link_type: entry
            target_blank: false
            entry: 128bc187-e58c-4ccc-a5f7-587727470a54
            button_type: button
        type: highlight-item
        enabled: true
    toggle_background: false
    reverse_alignment: false
    toggle_alignment: false
    type: highlight
    enabled: true
---

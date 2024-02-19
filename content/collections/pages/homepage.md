---
id: cf7040f4-473b-4c14-897d-5de59ce6d833
blueprint: home
template: general_content/index
title: Homepage
updated_by: bdf0548e-f14e-4b7d-9abd-d2223cb02cec
updated_at: 1707974454
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
        iconamic: arrow-right-circle
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
        url: '#'
        default_image: color-mode-dark.png
        hover_template_global: /global/default_image
        hover_default_image: color-mode-dark.png
        type: box
        enabled: true
      -
        id: lrzoyenc
        template_global: /global/default_image
        iconamic: expand
        title: 'Webslice Scalable'
        description: 'PHP hosting that stretches from almost absolute zero to somewhere near infinity (but you can set your own limits). Bring your PHP apps, no modification required, and discover pay-as-you-go hosting. COMING SOON.'
        url: '#'
        default_image: color-mode-dark.png
        hover_template_global: /global/default_image
        hover_default_image: color-mode-dark.png
        type: box
        enabled: true
    type: two_options
    enabled: true
  -
    id: ojSts665
    template: /page_builder/easy_steps
    Items:
      -
        id: TSMZhID5
        template_global: /global/default_image
        default_image: step.png
        step_title: 'Serverless Hosting'
        step_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: "Say goodbye to the hassle of managing servers with Webslice's serverless hosting. Enjoy a faster, more reliable, and cost-effective solution for your website hosting needs."
        type: Step-item
        enabled: true
      -
        id: ke38qJ5y
        template_global: /global/default_image
        default_image: step-1674699387.png
        step_title: 'Improved Performance'
        step_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Webslice guarantees a significant boost in the speed and reliability of your website with our cutting-edge serverless hosting technology. Say hello to a seamless website experience for your visitors.'
        type: Step-item
        enabled: true
      -
        id: s9mJjEDm
        template_global: /global/default_image
        default_image: step.png
        step_title: 'Cost Savings'
        step_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: "Save on hosting costs while still enjoying top-notch performance. Webslice's serverless hosting solution is more affordable than traditional hosting options, allowing you to focus on growing your business."
        type: Step-item
        enabled: true
    type: easy_steps
    enabled: false
  -
    id: haBmA96M
    template: page_builder/feature_section
    add_intro_features: true
    add_highlight_features: false
    type: feature_section
    enabled: false
    section_title: 'Best features'
    columns:
      -
        id: DoRdII8Q
        column:
          -
            type: heading
            attrs:
              level: 4
            content:
              -
                type: text
                text: 'Eleifend nullam'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Aliquam rhoncus ultrices euismod. Morbi auctor scelerisque lacus, nec vehicula eros tempus at. '
        type: add_columns
        enabled: true
      -
        id: Edoi5pgD
        column:
          -
            type: heading
            attrs:
              level: 4
            content:
              -
                type: text
                text: 'Diam pretium'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Vestibulum scelerisque finibus leo ac aliquam. Fusce maximus non metus ac facilisis. Sed id nunc a ante interdum efficitur.'
        type: add_columns
        enabled: true
      -
        id: lpH99W0N
        column:
          -
            type: heading
            attrs:
              level: 4
            content:
              -
                type: text
                text: 'Consectetur placerat'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue.'
        type: add_columns
        enabled: true
      -
        id: 63nY4SaY
        column:
          -
            type: heading
            attrs:
              level: 4
            content:
              -
                type: text
                text: 'Morbi auctor scelerisque'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Fusce maximus non metus ac facilisis. Sed id nunc a ante interdum efficitur.'
        type: add_columns
        enabled: true
  -
    id: oOWtKV6U
    template: page_builder/feature_section
    add_intro_features: false
    add_highlight_features: true
    background_select: grid_background
    highlight_features_title: 'Even more features'
    features:
      -
        id: jp4765VF
        select_type: icon
        iconamic: chevron-double-right
        title: 'Fastest Speed'
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Eleifend nullam consectetur placerat pelle tesque ut massa volutpat bonur los.'
        type: highlight_feature
        enabled: true
      -
        id: TyYRtCyz
        select_type: icon
        iconamic: chevron-double-right
        title: 'Fastest Speed'
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Eleifend nullam consectetur placerat pelle tesque ut massa volutpat bonur los.'
        type: highlight_feature
        enabled: true
      -
        id: Zm6XOAJB
        select_type: icon
        iconamic: chevron-double-right
        title: 'Fastest Speed'
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Eleifend nullam consectetur placerat pelle tesque ut massa volutpat bonur los.'
        type: highlight_feature
        enabled: true
    type: feature_section
    enabled: false
  -
    id: 3u3HFAnf
    template: page_builder/feature_section
    add_intro_features: false
    add_highlight_features: true
    background_select: grid_background
    features:
      -
        id: aUJ9OFOs
        select_type: icon
        iconamic: chevron-double-right
        title: 'Fastest Speed'
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Eleifend nullam consectetur placerat pelle tesque ut massa volutpat bonur los.'
        type: highlight_feature
        enabled: true
      -
        id: PPzDbAXD
        select_type: icon
        iconamic: chevron-double-right
        title: 'Fastest Speed'
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Eleifend nullam consectetur placerat pelle tesque ut massa volutpat bonur los.'
        type: highlight_feature
        enabled: true
      -
        id: s1fPSjmj
        select_type: icon
        iconamic: chevron-double-right
        title: 'Fastest Speed'
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nullam consectetur placerat pellentesque ut massa volutpat at. Diam pretium orci dui sagittis.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Eleifend nullam consectetur placerat pelle tesque ut massa volutpat bonur los.'
        type: highlight_feature
        enabled: true
    type: feature_section
    enabled: false
    highlight_features_title: '&nbsp;'
  -
    id: fSxa3nCq
    template: /page_builder/highlight
    rows:
      -
        id: 45yZmdNM
        highlight_title: 'We’ve helped thousands  of businesses'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Sed lobortis convallis molestie. Duis nec sapien non nisl venenatis lobortis. Vestibulum tempor nisi commodo libero viverra, sed dignissim ex rutrum. Morbi consequat massa sed quam dictum mollis. Sed mattis commodo justo, nec imperdiet mi consectetur eu. Suspendisse varius orci eu interdum ultricies.'
        template_global: /global/default_image
        default_image: color-mode-dark.png
        buttons:
          -
            id: 0Axvpkze
            template_global: /components/buttons
            label: 'Read the documentation'
            link_type: url
            target_blank: false
            url: '#'
            button_type: button
        type: highlight-item
        enabled: true
      -
        id: JiK1TDJw
        highlight_title: 'We’ve helped thousands  of businesses'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Sed lobortis convallis molestie. Duis nec sapien non nisl venenatis lobortis. Vestibulum tempor nisi commodo libero viverra, sed dignissim ex rutrum. Morbi consequat massa sed quam dictum mollis. Sed mattis commodo justo, nec imperdiet mi consectetur eu. Suspendisse varius orci eu interdum ultricies.'
        template_global: /global/default_image
        default_image: color-mode-dark.png
        buttons:
          -
            id: vUP1Hf5V
            template_global: /components/buttons
            label: 'Read the documentation'
            link_type: url
            target_blank: false
            url: '#'
            button_type: button
        type: highlight-item
        enabled: true
    toggle_background: true
    reverse_alignment: true
    toggle_alignment: true
    type: highlight
    enabled: false
  -
    id: 3c8TZp98
    template: /components/section_title
    pre_title: Testimonials
    title: 'What our customer are saying 😍'
    toggle_color: false
    alignment: center
    testimonial:
      - cfd76af2-1e89-4264-b73b-1270a0a37a1a
      - 5470de51-4f5d-4a01-81ff-afffe73f680d
      - c8b148c7-3d15-487e-acef-54c45a653adf
    type: testimonial
    enabled: false
  -
    id: pMIWDHjj
    template: /components/section_title
    toggle_color: false
    faq_entries:
      - 57c83bb4-e74d-47f9-924b-1f6ddf8c854a
      - 236c12aa-a0ec-4e7e-8f4e-e67f29243f62
      - ec1dbb6f-3d34-49e2-a387-c28342c8ab42
      - a1c95fbe-5b46-427a-ab56-764bc1fa0e4d
      - a9f9ef1a-f20a-4e06-9353-98d810fa2fe7
      - ff4f50d5-1343-4f9f-bfd2-ded4d205c19a
    type: faq
    enabled: false
    pre_title: FAQ
    title: 'Frequently Asked Questions'
    textarea_field:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Nullam commodo bibendum accumsan. Morbi luctus mauris ac fringilla scelerisque. Proin elit sem, tempus consequat lectus nec, volutpat hendrerit ligula.'
      -
        type: paragraph
        content:
          -
            type: hardBreak
    alignment: center
  -
    id: 6ZH0EOSJ
    template: /page_builder/companies_logo
    companies_title: '1000+ Big brands trust us'
    company:
      -
        id: u5zJI6Hr
        template_global: /global/default_image
        default_image: brand-logos/nzonair.png
        type: companies
        enabled: true
      -
        id: HBDO8EKl
        template_global: /global/default_image
        default_image: brand-logos/vector.png
        type: companies
        enabled: true
      -
        id: EFc2OD7O
        template_global: /global/default_image
        default_image: brand-logos/nzme.png
        type: companies
        enabled: true
      -
        id: sBAsEag3
        template_global: /global/default_image
        default_image: brand-logos/asb.png
        type: companies
        enabled: true
      -
        id: yEL5YhNb
        template_global: /global/default_image
        default_image: brand-logos/lesmills.png
        type: companies
        enabled: true
      -
        id: bzHcrbnw
        template_global: /global/default_image
        default_image: brand-logos/harvey.png
        type: companies
        enabled: true
      -
        id: yq7Gijdk
        template_global: /global/default_image
        default_image: brand-logos/auckland-council.png
        type: companies
        enabled: true
      -
        id: rWqSFkZK
        template_global: /global/default_image
        default_image: brand-logos/nzpost.png
        type: companies
        enabled: true
      -
        id: BKbfLRdd
        template_global: /global/default_image
        default_image: brand-logos/dutyfree.png
        type: companies
        enabled: false
      -
        id: oscIEAZz
        template_global: /global/default_image
        default_image: brand-logos/asb.png
        type: companies
        enabled: false
      -
        id: OK6IL724
        template_global: /global/default_image
        default_image: brand-logos/asb.png
        type: companies
        enabled: false
      -
        id: jOi0u9Y0
        template_global: /global/default_image
        default_image: brand-logos/nzonair.png
        type: companies
        enabled: false
    type: companies_logo
    enabled: false
  -
    id: hTof5hu7
    template: /page_builder/latest_post
    pre-title: 'Stay in the loop'
    title_section: 'Our latest article'
    type: latest_post
    enabled: false
---

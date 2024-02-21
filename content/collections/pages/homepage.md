---
id: cf7040f4-473b-4c14-897d-5de59ce6d833
blueprint: home
template: general_content/index
title: Homepage
updated_by: bdf0548e-f14e-4b7d-9abd-d2223cb02cec
updated_at: 1708390447
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
---

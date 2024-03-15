---
id: cf7040f4-473b-4c14-897d-5de59ce6d833
blueprint: home
template: general_content/index
title: Homepage
updated_by: fa61bd1a-7054-4dd6-974f-a1764a47c4ec
updated_at: 1710477633
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
            text: 'Flexible, fast web hosting for busy developers'
    hero_home_description:
      -
        type: paragraph
        content:
          -
            type: text
            text: "Web hosting platforms for today's agencies. "
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
        label: 'Join Webslice now'
        iconamic: chevrons-right
        link_type: url
        target_blank: false
        url: 'https://console.webslice.com/register'
        button_type: button
    grid_features:
      -
        id: lrfrhuc3
        iconamic: expand
        text: Flexibility
      -
        id: lrfrigs8
        iconamic: globe
        text: 'Worldwide locations'
      -
        id: lrfrhv51
        iconamic: lock
        text: Security
      -
        id: lrfrhvr5
        iconamic: messages-square
        text: '24/7 Support'
      -
        id: lrfrhwd9
        iconamic: shield-plus
        text: 'Management Options'
      -
        id: lrfridoi
        iconamic: timer-reset
        text: 'Automated back-ups'
page_builder:
  -
    id: ltmc25t2
    template: /general_content/_multiple_text_columns
    display_title_section:
      -
        id: ltmc2b1y
        center_title_title: "It's about time"
        type: section_title
        enabled: true
    columns:
      -
        id: ltmc27j2
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'How much time and energy could your web development agency save if you never had to worry about hosting again? With that stress gone, what could you achieve?'
        type: column
        enabled: true
      -
        id: ltmc29wq
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Run every site and app on a global hosting platform built for developers. Robust infrastructure, and a feature-packed console that values your time as much as you do.'
        type: column
        enabled: true
    type: multiple_text_columns
    enabled: true
  -
    id: ltmabjhc
    template: /general_content/bento_highlight
    rows:
      -
        id: ltmabkt6
        template_global: /global/iconamic
        title: 'Powerful enough for all your clients, flexible enough for all your tech stacks (Bento HL)'
        description: "Host every website you work on through one platform. Powerful enough to power today's busiest agencies, and flexible enough to handle all the tech stacks you need to host."
        bentos:
          -
            id: ltmaby73
            type: box
            enabled: true
        type: feature_highlight-item
        enabled: true
    reverse_alignment: false
    toggle_alignment: false
    type: bento_highlight
    enabled: false
  -
    id: lrzox1cv
    template: page_builder/two_options
    title: 'There are two ways to Webslice'
    sub_title: "Choose your hosting technology - containers or serverless - and see how we've made it made easy to use, developer-friendly, fast, and flexible."
    boxes:
      -
        id: lrzoxcmj
        template_global: /global/default_image
        iconamic: boxes
        title: 'Webslice Containers'
        description: 'Join over 16,000 websites on a platform that lets you run as many independent, flexible environments as you need. One account, your own servers, dozens of pre-built images, and no technical headaches. You control it all.'
        url: 'entry::321f3638-6149-4686-a430-c179ad55fcbe'
        type: box
        enabled: true
        text_link: 'See Webslice Containers'
        image: color-mode-dark.png
        image_hover: default-optimized.jpg
      -
        id: lrzoyenc
        template_global: /global/default_image
        iconamic: expand
        title: 'Webslice Serverless'
        description: "Finally, serverless hosting that's PHP-friendly, easy to use, and simple to set up. Webslice Serverless is truly elastic hosting that stays fast when you’re busy, and shrinks bills in quiet times. Register for the Public Beta now."
        type: box
        enabled: true
        text_link: 'See Webslice Serverless'
        image: color-mode-dark.png
        image_hover: photo-1620287341056-49a2f1ab2fdc.jpeg
        url: 'entry::1e33d247-bf25-42a4-b455-b47eb8dcf557'
    type: two_options
    enabled: true
  -
    id: ltmbmkx8
    template: /page_builder/metrics_section
    bg_pattern: true
    metric_items:
      -
        id: ltmbmntf
        template_global: /global/iconamic
        iconamic: monitor-smartphone
        title: 16k
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'websites hosted'
        type: item
        enabled: true
      -
        id: ltmbmzi8
        template_global: /global/iconamic
        iconamic: thumbs-up
        title: 97%
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'customer satisfaction'
        type: item
        enabled: true
      -
        id: ltmbncl1
        template_global: /global/iconamic
        iconamic: users-round
        title: 20+
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: "years' experience"
        type: item
        enabled: true
      -
        id: ltmbrxue
        template_global: /global/iconamic
        iconamic: messages-square
        title: 24/7
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Support Team'
        type: item
        enabled: false
    type: metrics_section
    enabled: true
    title:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'See how well'
          -
            type: hardBreak
          -
            type: text
            marks:
              -
                type: bold
            text: 'our experience adds up.'
  -
    id: ltf4xz31
    template: /page_builder/highlight
    rows:
      -
        id: ltf4y011
        highlight_title: 'An experienced, smart, and reliable team'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: "We've been in the industry for over 20 years. Today we have thousands of happy customers, one of the highest-rated Support Teams you'll find anywhere, and the technical expertise to take a lot of stress off your shoulders. With Webslice on your side you can spend more time building great things for your clients, and less time worrying about servers and infrastructure."
        template_global: /global/default_image
        default_image: about-us/team-dec-23.jpg
        buttons:
          -
            id: ltf4zdxk
            template_global: /components/buttons
            label: 'Read About Us'
            iconamic: users-round
            link_type: entry
            target_blank: false
            entry: 128bc187-e58c-4ccc-a5f7-587727470a54
            button_type: secondary
        type: highlight-item
        enabled: true
        border: false
    toggle_background: false
    reverse_alignment: false
    toggle_alignment: false
    type: highlight
    enabled: true
  -
    id: ltmais9b
    template: /page_builder/testimonial_section
    title:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Join thousands of happy customers'
    bg_pattern: true
    type: testimonial_section
    enabled: true
    testimonial:
      - 9f75c212-eda7-496e-83bc-495c704572f1
      - b3ea2c50-bb47-48f9-8642-655b5b3bc0dd
      - 7eb7fbac-9430-4592-8a85-bd89b65acc40
meta_title: 'Webslice - Web hosting for busy developers'
meta_description: 'Webslice Containers and Webslice Serverless are fast, flexible, global hosting platforms for web developers and agencies. Start a risk-free trial today.'
---

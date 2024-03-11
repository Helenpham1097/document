---
id: cf7040f4-473b-4c14-897d-5de59ce6d833
blueprint: home
template: general_content/index
title: Homepage
updated_by: fa61bd1a-7054-4dd6-974f-a1764a47c4ec
updated_at: 1710127038
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
        url: 'https://webslice.com/register'
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
    id: ltma5cim
    template: /general_content/bento
    template_global: /global/iconamic
    title: "Today's developers need powerful Web Hosting (Bento Features)"
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: "Imagine hosting all the websites you work on through one platform. Powerful enough to power today's busiest agencies, and flexible enough to handle all the tech stacks you need to host."
    boxes:
      -
        id: ltma5dzu
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Here is a box 1'
        link_type: entry
        target_blank: false
        type: box
        enabled: true
        image: placeholders-to-delete/webslice-console-screen-2.png
    type: bento_features
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
    bg_pattern: false
    metric_items:
      -
        id: ltmbmntf
        template_global: /global/iconamic
        iconamic: boxes
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
            text: 'Hosting from a reliable, experienced supplier.'
  -
    id: ltmais9b
    template: /page_builder/testimonial_section
    title:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Thousands of happy customers'
    bg_pattern: true
    type: testimonial_section
    enabled: true
  -
    id: ltf4w1hv
    template: /general_content/_multiple_text_columns
    display_title_section:
      -
        id: ltf4w2tv
        center_title_title: 'Thousands of happy customers'
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
                text: '"If there is a problem with the hardware or environment I don’t need to wake up to deal with it. This used to be a significant point of stress for me and made it hard to go away on trips. So I would say peace of mind is one of the biggest factors."'
          -
            type: paragraph
            content:
              -
                type: text
                marks:
                  -
                    type: bold
                text: 'Karl von Randow'
              -
                type: text
                text: ', Co-founder, Cactuslab'
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
                text: '"As Silverstripe experts, we have a range of small to large clients and are always looking to add value. Our move to you has put our Silverstripe websites on fast, reliable infrastructure, with the confidence knowing everything will be kept up to date and secure. Support has incredible response times and often go above and beyond."'
          -
            type: paragraph
            content:
              -
                type: text
                marks:
                  -
                    type: bold
                text: 'Joe L.'
              -
                type: text
                text: ', Senior Developer, PS/Digital'
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
                text: '"We have hundreds of containers on multiple servers. Their uptime is amazing - I can''t recall us having a hardware-related outage over the past 4 years we have used them for our hosting."'
              -
                type: hardBreak
              -
                type: text
                text: ★★★★★
          -
            type: paragraph
            content:
              -
                type: text
                marks:
                  -
                    type: bold
                text: 'Andrew Mahon'
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
        highlight_title: 'An experienced, smart, and reliable team'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: "Hosting platforms from a team that's been in the industry for over 20 years. We have thousands of happy customers, one of the highest-rated Support Teams you'll find anywhere, and the technical expertise to take a lot of stress off your shoulders. With Webslice on your side you can spend more time building great things for your clients, and less time worrying about servers and infrastructure."
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
            iconamic: users-round
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
meta_title: 'Webslice - Web hosting for busy developers'
meta_description: 'Webslice Containers and Webslice Serverless are fast, flexible, global hosting platforms for web developers and agencies. Start a risk-free trial today.'
---

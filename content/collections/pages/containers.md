---
id: 321f3638-6149-4686-a430-c179ad55fcbe
blueprint: general_content
template: general_content/index
top_section:
  -
    id: 7I982tN5
    template: /general_content/hero
    hero_home_title: 'Focus on websites, leave the infrastructure to us'
    hero_home_description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Flexibility that developers love, dependability that clients need, prices that managers appreciate. This rock-solid platform already hosts 16,000+ sites, and now it’s gone global.'
    template_global: /global/default_image
    link: '#'
    select: background
    select_icon: chevron-left
    text: Click
    type: hero
    enabled: true
    iconamic: boxes
    buttons:
      -
        id: 2SEK87kA
        template_global: /global/buttons
        label: 'Start Risk-Free'
        iconamic: chevrons-right
        link_type: url
        target_blank: false
        button_type: button
        attr_title: 'Start risk-free for 7 days'
        url: 'https://console.webslice.com/register'
      -
        id: lro57zsk
        template_global: /components/buttons
        label: 'Read Documentation'
        link_type: url
        target_blank: false
        url: /docs/containers/getting-started/
        button_type: secondary
        iconamic: file
    pre: 'Webslice Containers'
    shape: triangle
    image: illustrations/container-cover-1710730424.png
title: Containers
updated_by: fa61bd1a-7054-4dd6-974f-a1764a47c4ec
updated_at: 1711083421
page_builder:
  -
    id: lrftv1b6
    type: bento_features
    enabled: true
    template: /general_content/bento
    title: 'Smart agencies work better on Webslice Containers'
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'We make it easier for you to develop and maintain better websites and products.'
    item:
      -
        id: lrfumsnp
        text: 'Clone/sync containers, leaving production untouched.*'
        link: /docs/containers/features/cloning-overwriting/
        target: true
      -
        id: lrimg4ag
        text: 'Restore from 14 days of back-ups in one click.*'
        target: true
        link: /docs/containers/features/backup-restore/
      -
        id: lrimgae8
        text: 'Flick a switch to turn on powerful Simple Cache.*'
        target: true
        link: /docs/containers/features/caching/
      -
        id: lrfund14
        text: 'Share files and folders between containers.'
        target: true
        link: /docs/containers/volumes/overview/
      -
        id: lrimhi4b
        text: 'Easily upgrade servers specs.'
        target: true
        link: /docs/containers/getting-started/
      -
        id: lrim4v2f
        text: 'Upgrade images in only a few seconds.'
        target: true
        link: /docs/containers/features/swapping-images/
      -
        id: lrimfz9z
        text: 'Install SSL in one click.'
        target: true
        link: /docs/containers/features/ssl/
      -
        id: lrimgcm0
        text: 'Track the resource usage of every container and server.'
        target: true
        link: /docs/containers/features/metrics/
      -
        id: lrimgit5
        text: 'Monitor server load, bandwidth, CPU and memory.'
        target: true
        link: /docs/containers/getting-started/
      -
        id: lu24osy2
        text: 'Access regular releases of new images.'
        link: /docs/containers/features/swapping-images
        target: true
      -
        id: lu24otds
        text: 'Leave server OS patching and upgrades to us.'
        link: /docs/containers/servers/overview
        target: true
      -
        id: lu24otu0
        text: 'Enjoy a 99.9% uptime guarantee.'
        link: /docs
        target: true
      -
        id: lu24oufs
        text: 'Get container auto-updates and maintenance.*'
        link: /docs/containers/features/auto-updates/
        target: true
    boxes:
      -
        id: lrfvep60
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Pick from dozens of '
              -
                type: text
                marks:
                  -
                    type: bold
                text: 'pre-built container images'
              -
                type: text
                text: ', all maintained by our team.'
        type: box
        enabled: true
        link: '#'
        label: 'Awesome link'
        link_type: url
        target_blank: true
        url: /docs/containers/features/creating-a-container/
        image: illustrations/container-images.png
      -
        id: lrfvew4y
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Run multiple '
              -
                type: text
                marks:
                  -
                    type: bold
                text: 'independent environments'
              -
                type: text
                text: ' on your own server without interference.'
        type: box
        enabled: true
        link_type: url
        target_blank: false
        url: /docs/containers/getting-started/
        image: illustrations/enviroments.png
      -
        id: lrfvf41q
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Manage '
              -
                type: text
                marks:
                  -
                    type: bold
                text: 'all your sites'
              -
                type: text
                text: ' and databases through the Webslice Console.'
        type: box
        enabled: true
        link_type: url
        target_blank: false
        url: /docs/containers/databases/overview/
      -
        id: lrfvfdga
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Stay close to your customers through our '
              -
                type: text
                marks:
                  -
                    type: bold
                text: 'range of global locations'
              -
                type: text
                text: .
        type: box
        enabled: true
        link_type: url
        target_blank: false
        url: /docs/containers/servers/locations
    bento_type: boxes
    template_global: /global/iconamic
    iconamic: lightbulb
    footer:
      -
        type: paragraph
        content:
          -
            type: text
            marks:
              -
                type: italic
            text: '*Add '
          -
            type: text
            marks:
              -
                type: link
                attrs:
                  href: 'statamic://entry::c983d54d-1d7e-434f-b789-ea74e7737653'
                  rel: null
                  target: null
                  title: null
              -
                type: italic
            text: 'Managed Services'
          -
            type: text
            marks:
              -
                type: italic
            text: ' to access these time-saving tools and services'
  -
    id: ltmdxmo7
    template: /page_builder/metrics_section
    bg_pattern: true
    metric_items:
      -
        id: ltmdykxt
        template_global: /global/iconamic
        iconamic: monitor-smartphone
        title: '16,000+'
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
        id: ltmdykns
        template_global: /global/iconamic
        iconamic: terminal-square
        title: 50+
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'pre-built container images'
        type: item
        enabled: true
      -
        id: ltmdyjvr
        template_global: /global/iconamic
        iconamic: globe
        title: '8'
        description:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'global locations'
        type: item
        enabled: true
    type: metrics_section
    enabled: true
    title:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Why join us? '
          -
            type: text
            marks:
              -
                type: bold
            text: 'Count the reasons.'
          -
            type: hardBreak
  -
    id: lthukf6c
    template: /page_builder/highlight
    rows:
      -
        id: lthukghp
        highlight_title: 'Manage your hosting through a friendly, powerful console'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'The Webslice Console puts a huge amount of control at your fingertips. Create and manage containers, servers and databases, track current performance, assign users, and much more. It all happens in one place.'
        template_global: /global/default_image
        default_image: console/containers-overview-light-1710813223.png
        type: highlight-item
        enabled: true
        border: true
        default_image_dark: console/containers-overview-dark-1710813244.png
      -
        id: lthuqphm
        highlight_title: 'Use simple controls to make big changes'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: "Webslice lets you do big things in a few seconds flat. It's a very quick job to enable SSL or Simple Cache, upgrade an image, or make a number of other choices that speed up your work and your websites."
        template_global: /global/default_image
        default_image: console/containers-settings-light-1710813278.png
        type: highlight-item
        enabled: true
        border: true
        default_image_dark: console/containers-settings-dark-1710813297.png
    toggle_background: false
    reverse_alignment: false
    toggle_alignment: false
    type: highlight
    enabled: true
  -
    id: lthty540
    template: /page_builder/pricing_table
    pricing_style: items
    template_global: /global/iconamic
    iconamic: boxes
    title: 'Packages & Pricing'
    description: 'Choose a server size, then start spinning up containers. You can always upgrade your server later, or ask us for a larger plan.'
    Items:
      -
        id: lthtyp4v
        highligh: false
        title: 1GB
        description: 'Test the platform or run a static site.'
        price: 10
        features:
          - '1 Core'
          - '1GB RAM'
          - '25GB Storage'
          - '1TB Bandwidth'
          - 'Automatic Backups'
          - 'Free SSL'
        type: column
        enabled: true
      -
        id: lthtzuj0
        highligh: false
        title: 2GB
        description: 'Suits one or two small projects.'
        price: 23
        features:
          - '1 Core'
          - '2GB RAM'
          - '50GB Storage'
          - '2TB Bandwidth'
          - 'Automatic Backups'
          - 'Free SSL'
        type: column
        enabled: true
      -
        id: lthtztjh
        highligh: true
        title: 4GB
        description: 'Entry-level for serious agencies.'
        price: 43
        features:
          - '2 Cores'
          - '4GB RAM'
          - '80GB Storage'
          - '4TB Bandwidth'
          - 'Automatic Backups'
          - 'Free SSL'
        type: column
        enabled: true
        highligh_text: 'Most popular'
      -
        id: lthtzsji
        highligh: false
        title: 8GB
        price: 82
        features:
          - '4 Cores'
          - '8GB RAM'
          - '160GB Storage'
          - '5TB Bandwidth'
          - 'Automatic Backups'
          - 'Free SSL'
        type: column
        enabled: true
        description: 'Four cores for higher performance.'
      -
        id: lthtzrk6
        highligh: false
        title: 16GB
        description: 'Large agencies running busy sites.'
        price: 153
        features:
          - '6 Cores'
          - '16GB RAM'
          - '320GB Storage'
          - '8TB Bandwidth'
          - 'Automatic Backups'
          - 'Free SSL'
        type: column
        enabled: true
      -
        id: lthtzqex
        highligh: false
        title: 32GB
        description: 'For big sites with big demands.'
        price: 288
        features:
          - '8 Cores'
          - '32GB RAM'
          - '640GB Storage'
          - '16TB Bandwidth'
          - 'Automatic Backups'
          - 'Free SSL'
        type: column
        enabled: true
    type: pricing_table
    enabled: true
    start_type:
      -
        content: '[null,null,{"attrs":{"values":{"buttons":[{"show_controls":false}]}}}]'
      -
        content: '[null,null,null,{"attrs":{"values":{"buttons":[{"show_controls":false}]}}}]'
  -
    id: lro5li2r
    template: /components/section_title
    toggle_color: false
    type: get_started
    enabled: true
    title: 'Get your first site live today'
    description: "Try Webslice Containers for seven days, and if it’s not for you don't worry - it's on us."
    rows:
      -
        buttons:
          - {  }
      -
        buttons:
          - {  }
    steps:
      -
        id: luw8iatb
        title: 'Create your account'
        description: 'Email, credit card, done'
        url: '#'
        type: step
        enabled: true
      -
        id: luw8j00o
        title: 'Provision a server'
        description: 'Start from $10'
        url: '#'
        type: step
        enabled: true
      -
        id: luw8jbbn
        title: 'Create a container'
        description: 'Choose an image and go'
        url: '#'
        type: step
        enabled: true
      -
        id: luw8jr0b
        title: 'Access the container'
        description: 'SSH in'
        url: '#'
        type: step
        enabled: true
      -
        id: luw8jz43
        title: 'Upload your files'
        description: 'Copy your site in'
        type: step
        enabled: true
      -
        id: luw8kb0b
        title: 'Deploy your website'
        description: 'Update your DNS'
        type: step
        enabled: true
    buttons:
      -
        id: luw8qc8b
        template_global: /components/buttons
        label: 'Create Account Now'
        iconamic: chevron-right
        link_type: url
        target_blank: false
        url: 'https://console.webslice.com/register'
        button_type: button
        attr_title: 'Create Account Now'
  -
    id: lthz8oal
    template: /general_content/bento_highlight
    reverse_alignment: false
    toggle_alignment: false
    type: bento_highlight
    enabled: true
    rows:
      -
        id: lru3mrwk
        template_global: /global/iconamic
        title: 'Add Support & Management for another productivity boost'
        description: 'Two tiers of Support & Management speed you up even more. Start using powerful, time-saving features in the Webslice Console. Leave round-the-clock infrastructure monitoring and incident response to us. And get broader, faster access to our support team.'
        buttons:
          -
            id: lru3n35l
            template_global: /components/buttons
            label: 'See Support & Management'
            link_type: entry
            target_blank: false
            button_type: secondary
            iconamic: chevron-right
            entry: c983d54d-1d7e-434f-b789-ea74e7737653
        bentos:
          -
            id: lru3nbaf
            image: illustrations/ill_1---managed_cloud_hosting.png
            items:
              -
                id: lru3nm9g
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Simple Cache.'
                type: link
                enabled: true
                target: true
                url: /docs/containers/features/caching/
              -
                id: lru3nqj8
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'One-click backup restore.'
                type: link
                enabled: true
                target: true
                url: /docs/containers/features/backup-restore/
              -
                id: lru3nyjc
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Container cloning and syncing.'
                type: link
                enabled: true
                target: true
                url: /docs/containers/features/cloning-overwriting/
              -
                id: lru3o2ef
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Scheduled container updates.'
                type: link
                enabled: true
                target: true
                url: /docs/containers/features/swapping-images/
            type: box
            enabled: true
          -
            id: lu26gi4q
            items:
              -
                id: lu26gjht
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Proactive monitoring of servers and containers.'
                target: false
                type: link
                enabled: true
              -
                id: lu26gz9v
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: '24/7 response to outages or excessive load.'
                target: false
                type: link
                enabled: true
            type: box
            enabled: true
          -
            id: lu26mtsg
            items:
              -
                id: lu26ne0o
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Broader support covers your platform and application.'
                target: false
                type: link
                enabled: true
              -
                id: lu26ns74
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'More ways to contact us.'
                target: false
                type: link
                enabled: true
              -
                id: lu26ny1k
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Customize your own support SLA.'
                target: false
                type: link
                enabled: true
            type: box
            enabled: true
        type: feature_highlight-item
        enabled: true
        iconamic: wrench
    buttons:
      - {  }
  -
    id: ltmf199l
    template: /page_builder/testimonial_section
    title:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Agencies love Webslice Containers'
    bg_pattern: true
    testimonial:
      - 85bf0248-4d5f-41ca-b370-38994540c388
      - 8ad0420a-a37a-44ad-8b1a-2366ad17f110
      - 93fa4ff4-a89b-4d51-8c02-1f54a0280152
    type: testimonial_section
    enabled: true
  -
    id: lrochdxy
    template: page_builder/head_to_documentation
    type: head_to_documentation
    enabled: true
    template_global: /global/iconamic
    iconamic: file
    title: 'Learn how Webslice Containers work'
    description: 'Webslice Containers are thoroughly documented. Have a look and see how many of your questions are already answered.'
    sub_title: 'Head to Documentation to see:'
    entry:
      -
        id: lrocq15l
        text: 'The introductory overview for developers.'
        type: entry
        enabled: true
        url: /docs/containers/overview
      -
        id: lrocq8tp
        text: 'How easy it is to get started.'
        type: entry
        enabled: true
        url: /docs/containers/getting-started/
      -
        id: lrocqfca
        text: 'How to create and manage containers.'
        type: entry
        enabled: true
        url: /docs/containers/features/creating-a-container/
      -
        id: lrocqj1k
        text: 'How to manage databases and permissions.'
        type: entry
        enabled: true
        url: /docs/containers/databases/overview/
      -
        id: lrocqlw5
        text: "How easy it is to swap a container's image."
        type: entry
        enabled: true
        url: /docs/containers/features/swapping-images/
      -
        id: ltgosedh
        text: 'And much, much more...'
        type: entry
        enabled: true
        url: /docs
page_description: 'A Faster, More Flexible Platform for Web Development.'
meta_title: 'Webslice Containers - Fast, Flexible, Global Web Hosting'
meta_description: 'Run multiple dev platforms, work faster, and spend less time managing servers with Webslice Containers. Fast, flexible and powerful hosting for web developers.'
---

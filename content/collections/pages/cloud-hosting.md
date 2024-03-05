---
id: 321f3638-6149-4686-a430-c179ad55fcbe
blueprint: general_content
template: general_content/index
top_section:
  -
    id: 7I982tN5
    template: /general_content/hero
    hero_home_title: 'A Faster, More Flexible Platform for Web Development'
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
    iconamic: cloud
    buttons:
      -
        id: 2SEK87kA
        template_global: /global/buttons
        label: 'Start Risk-Free for 7 Days'
        iconamic: chevrons-right
        link_type: entry
        target_blank: false
        entry: fee1a2b1-971c-4c72-9517-d2e6c989f49e
        button_type: button
        attr_title: 'Start risk-free for 7 days'
      -
        id: lro57zsk
        template_global: /components/buttons
        label: 'Read Documentation'
        link_type: url
        target_blank: false
        url: '#'
        button_type: secondary
        iconamic: file
    pre: 'Webslice Containers'
    shape: triangle
    dark_image: illustrations/cloud-containers.png
    light_image: illustrations/cloud-containers.png
title: Containers
updated_by: fa61bd1a-7054-4dd6-974f-a1764a47c4ec
updated_at: 1709606490
page_builder:
  -
    id: lrftv1b6
    type: bento_features
    enabled: true
    template: /general_content/bento
    title: 'Webslice Containers Are Built For Busy Agencies'
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Everything about Webslice Containers is designed to help you develop better websites and products, faster.'
    item:
      -
        id: lrfumsnp
        text: 'Never edit in production again - just clone and sync containers. (Managed servers only.)'
        link: 'entry::fee1a2b1-971c-4c72-9517-d2e6c989f49e'
        target: false
      -
        id: lrimgae8
        text: 'Flick a switch to turn on powerful Simple Cache. (Managed servers only.)'
        target: false
        link: '#'
      -
        id: lrimg4ag
        text: 'Restore from 14 days of back-ups in one click.  (Managed servers only.)'
        target: true
        link: '#'
      -
        id: lrfund14
        text: 'Share files and folders between containers, with granular access controls.'
        target: true
        link: '#'
      -
        id: lrimhi4b
        text: 'Easily scale server cores, RAM and storage; or disk space alone.'
        target: false
        link: '#'
      -
        id: lrim4v2f
        text: 'Upgrade images to the latest version in only a few seconds.'
        target: true
        link: '#'
      -
        id: lrimfz9z
        text: 'Install free SSL certificates for every website in one click.'
        target: false
        link: '#'
      -
        id: lrimgcm0
        text: 'Track server load stats, and resource usage for every container and server.'
        target: false
        link: '#'
      -
        id: lrimgit5
        text: "Monitor your servers' connectivity and set up email alerts."
        target: true
        link: '#'
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
                text: ', or build your own.'
        type: box
        enabled: true
        link: '#'
        label: 'Awesome link'
        link_type: url
        target_blank: true
        url: 'https://sitehost.nz/'
        attr_title: Sitehost
        attr_aria: 'this is a Aria label'
        image: ill_6---picked-a-region.svg
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
        url: '#1'
        image: ill_6---picked-a-region.svg
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
                text: ' and databases in one place, no matter what stack they run on.'
        type: box
        enabled: true
        link_type: url
        target_blank: false
        url: '#2'
      -
        id: lrfvfdga
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Choose from a '
              -
                type: text
                marks:
                  -
                    type: bold
                text: 'range of data centers'
              -
                type: text
                text: ' around the world.'
        type: box
        enabled: true
        link_type: url
        target_blank: false
        url: '#3'
    bento_type: boxes
    template_global: /global/iconamic
    iconamic: cube-transparent
  -
    id: lro5li2r
    template: /components/section_title
    toggle_color: false
    type: get_started
    enabled: true
    title: 'Get Started Today'
    description: 'You can get started on Webslice Containers now. Try it out for seven days with our risk-free money back guarantee.'
    start_type:
      -
        id: lro5rfps
        title: 'Take a test drive.'
        description: 'To test out one or two containers on a shared server:'
        content:
          -
            type: set
            attrs:
              id: ltc6zy3j
              values:
                type: step_list
                steps:
                  -
                    id: lrzg1qcg
                    text: 'Create a Webslice account.'
                    type: step
                    enabled: true
                  -
                    id: lrzg1rb3
                    text: "Select 'Shared Cloud Hosting'."
                    type: step
                    enabled: true
                  -
                    id: lrzg1s4x
                    text: 'Choose from our selection of pre-built containers.'
                    type: step
                    enabled: true
                  -
                    id: lrzg1u1n
                    text: 'Get developing!'
                    type: step
                    enabled: true
          -
            type: paragraph
            content:
              -
                type: text
                text: "Once you're sure that Webslice Containers are for you, it’s easy to migrate containers onto your own server."
          -
            type: set
            attrs:
              id: lrzfjvmo
              values:
                type: buttons
                buttons:
                  -
                    id: lrzfjxyk
                    template_global: /components/buttons
                    label: 'Create Your Account Now'
                    link_type: url
                    target_blank: false
                    url: '#'
                    button_type: button
                    attr_title: 'Create Your Account Now'
                    iconamic: chevrons-right
          -
            type: paragraph
        type: start
        enabled: true
        template_global: /global/iconamic
        iconamic: server-crash
      -
        id: lro5rs47
        title: 'Spin up your own server.'
        description: 'Then you can run as many containers as you like, and build your own images. It only takes a couple of minutes:'
        content:
          -
            type: set
            attrs:
              id: ltc9jmeh
              values:
                type: step_list
                steps:
                  -
                    id: lrzg6qra
                    type: step
                    enabled: true
                    text: 'Create a Webslice account.'
                  -
                    id: lrzg6ri3
                    type: step
                    enabled: true
                    text: 'Provision your server. Choose 1-8 cores.'
                  -
                    id: lrzg6sd7
                    type: step
                    enabled: true
                    text: "It's container time. Pick from dozens of pre-built images or create your own Docker images using our registry and build pipeline."
                  -
                    id: lrzg6sy9
                    type: step
                    enabled: true
                    text: 'Get developing!'
          -
            type: paragraph
            content:
              -
                type: text
                text: "Once you're sure that Webslice Containers are for you, it's quick and easy to scale up."
          -
            type: set
            attrs:
              id: lrzg6uqf
              values:
                type: buttons
                buttons:
                  -
                    id: lrzg6wod
                    template_global: /components/buttons
                    label: 'Create Your Account Now'
                    link_type: url
                    target_blank: false
                    url: '#'
                    button_type: button
                    attr_title: 'Create Your Account Now'
                    iconamic: chevrons-right
          -
            type: paragraph
        type: start
        enabled: true
        template_global: /global/iconamic
        iconamic: server
  -
    id: ltc9sxxe
    template: /page_builder/pricing_table
    pricing_style: items
    template_global: /global/iconamic
    title: 'Packages and Pricing'
    description: 'Choose a server size, then spin up as many containers as you like.'
    Items:
      -
        id: ltc9uurb
        highligh: false
        title: 25GB
        description: 'Test out the platform with a small project.'
        price: 10
        features:
          - '1GB RAM'
          - '1 core'
          - '25GB storage'
          - '1TB bandwidth'
          - 'Automatic backups'
          - 'Free SSL'
        type: column
        enabled: true
      -
        id: ltc9x9oi
        highligh: false
        title: 50GB
        description: 'Small-mid sized agencies.'
        price: 23
        features:
          - '2GB RAM'
          - '1 core'
          - '50GB storage'
          - '2TB bandwidth'
          - 'Automatic backups'
          - 'Free SSL'
        type: column
        enabled: true
      -
        id: ltca3uje
        highligh: true
        title: 80GB
        description: 'Two cores for higher performance.'
        price: 43
        features:
          - '4GB RAM'
          - '2 cores'
          - '80GB storage'
          - 'Automatic backups'
          - '2TB bandwidth'
          - 'Free SSL'
        type: column
        enabled: true
        highligh_text: 'Most Popular'
      -
        id: ltca54nc
        highligh: false
        title: 160GB
        description: 'Run 100+ containers on one server.'
        price: 82
        features:
          - '8GB RAM'
          - '4 cores'
          - '160GB storage'
          - '5TB bandwidth'
          - 'Automatic backups'
          - 'Free SSL'
        type: column
        enabled: true
      -
        id: ltca5ndb
        highligh: false
        title: 320GB
        description: 'Big agencies running busy sites.'
        price: 153
        features:
          - '16GB RAM'
          - '6 cores'
          - '320GB storage'
          - '8TB bandwidth'
          - 'Automatic backups'
          - 'Free SSL'
        type: column
        enabled: true
      -
        id: ltdgzq4n
        highligh: false
        title: 640GB
        description: 'Still not enough? Just ask for more.'
        price: 288
        features:
          - '32GB RAM'
          - '8 Core'
          - '640GB storage'
          - '16TB bandwidth'
          - 'Automatic backups'
          - 'Free SSL'
        type: column
        enabled: true
    type: pricing_table
    enabled: true
    iconamic: boxes
  -
    id: lru3419g
    template: /general_content/bento_highlight
    reverse_alignment: false
    toggle_alignment: true
    type: bento_highlight
    enabled: true
    rows:
      -
        id: lrr6gp8v
        title: 'Focus on code, and leave the infrastructure to us'
        textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Aliquam placerat eu enim ac faucibus. Donec ac diam congue, lobortis magna nec, fermentum arcu. Ut ornare enim at elit molestie congue. Nullam commodo bibendum accumsan. Morbi luctus mauris ac fringilla scelerisque.'
        template_global: /global/default_image
        label: Button
        iconamic: align-end-vertical
        link_type: url
        target_blank: false
        url: '#'
        button_type: button
        default_image: b8f5db7682a5fb3fa938f2e26c0e855c.webp
        type: feature_highlight-item
        enabled: true
        buttons:
          -
            id: lrr6xz7o
            template_global: /components/buttons
            label: 'Start risk-free for 7 days'
            link_type: url
            target_blank: false
            url: '#'
            button_type: button
            iconamic: chevrons-right
        description: 'Our experts are always working to keep servers and networks up to date and secure. You can just focus on developing great things.'
        bentos:
          -
            id: lrtu5ip2
            image: ill_3---infrastructure.svg
            items:
              -
                id: lrtvn103
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Server OS patching and upgrades.'
                url: '#'
                type: link
                enabled: true
                target: false
              -
                id: lru3k6z4
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: '99.9% uptime guarantee.'
                type: link
                enabled: true
                target: false
              -
                id: lru3kf1q
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Regular releases of new container images.'
                type: link
                enabled: true
                target: false
              -
                id: lru3kjq7
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Container updates and maintenance (Managed Servers only).'
                type: link
                enabled: true
                target: false
            type: box
            enabled: true
      -
        id: lru3mrwk
        template_global: /global/iconamic
        title: 'Add Managed Services and Advanced Developer Tools'
        description: 'Optional Managed Services do even more to speed you up. Our expert team will monitor and manage your server 24/7/365, and your hosting will include these time-saving features:'
        buttons:
          -
            id: lru3n35l
            template_global: /components/buttons
            label: 'More About Managed Services'
            link_type: entry
            target_blank: false
            button_type: inline
            entry: c983d54d-1d7e-434f-b789-ea74e7737653
        bentos:
          -
            id: lru3nbaf
            image: ill_1---managed_cloud_hosting.svg
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
                target: false
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
                target: false
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
                target: false
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
                target: false
            type: box
            enabled: true
          -
            id: ltclp6br
            items:
              -
                id: ltclqwk9
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
                id: ltclpr4o
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Faster response times for every ticket.'
                target: false
                type: link
                enabled: true
            type: box
            enabled: true
          -
            id: ltclt57g
            items:
              -
                id: ltclt7mq
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Container-level monitoring and response.'
                target: false
                type: link
                enabled: true
              -
                id: ltcltzbt
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Automated updates on a schedule you set.'
                target: false
                type: link
                enabled: true
            type: box
            enabled: true
        type: feature_highlight-item
        enabled: true
        iconamic: wrench
  -
    id: ltdp2ssg
    template: /general_content/_multiple_text_columns
    display_title_section:
      -
        id: ltdp2ucq
        center_title_title: 'Add Managed Services and Advanced Developer Tools'
        type: section_title
        enabled: true
    columns:
      -
        id: ltdp3xhb
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Optional '
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
                text: 'Managed Services'
              -
                type: text
                text: ' do even more to speed you up. Add these time-saving features:'
          -
            type: heading
            attrs:
              level: 3
            content:
              -
                type: text
                text: 'Enhanced Support'
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
                        text: 'More ways to contact us'
              -
                type: listItem
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Faster response times for every ticket'
        type: column
        enabled: true
      -
        id: ltdp30dz
        text:
          -
            type: heading
            attrs:
              level: 3
            content:
              -
                type: text
                text: 'Advanced Developer Tools'
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
                        text: 'Simple Cache'
              -
                type: listItem
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'One-click backup restore'
              -
                type: listItem
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Container cloning and syncing'
              -
                type: listItem
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Scheduled container updates'
        type: column
        enabled: true
      -
        id: ltdp3ogj
        text:
          -
            type: heading
            attrs:
              level: 3
            content:
              -
                type: text
                text: 'Monitoring and Management'
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
                        text: 'Container-level monitoring and response'
              -
                type: listItem
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Automated updates on a schedule you set'
        type: column
        enabled: true
    type: multiple_text_columns
    enabled: true
  -
    id: lrochdxy
    template: page_builder/head_to_documentation
    type: head_to_documentation
    enabled: true
    template_global: /global/iconamic
    iconamic: book-open
    title: 'Learn How Webslice Containers Work'
    description: 'After years of development, Webslice Containers are thoroughly documented. Almost anything you could want to know is probably already covered.'
    sub_title: 'Head to Documentation to see'
    entry:
      -
        id: lrocq15l
        text: 'The introductory Overview for developers'
        type: entry
        enabled: true
      -
        id: lrocq8tp
        text: 'How easy it is to Get Started'
        type: entry
        enabled: true
      -
        id: lrocqfca
        text: 'Info on creating and Using Containers, including images, variables, and more.'
        type: entry
        enabled: true
      -
        id: lrocqj1k
        text: 'How to manage databases and permissions.'
        type: entry
        enabled: true
      -
        id: lrocqlw5
        text: 'How to create and manage your own Custom Images.'
        type: entry
        enabled: true
    buttons:
      -
        id: lrqwq4m7
        template_global: /components/buttons
        label: 'Open Documentation'
        link_type: url
        target_blank: true
        url: '#'
        button_type: inline
page_description: 'A Faster, More Flexible Platform for Web Development.'
meta_title: 'Cloud Hosting from Webslice'
meta_description: 'Fast, flexible cloud hosting for web developers. Run multiple dev platforms, work faster, and spend less time managing servers.'
---

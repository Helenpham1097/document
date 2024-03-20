---
id: c983d54d-1d7e-434f-b789-ea74e7737653
blueprint: general_content
template: general_content/index
top_section:
  -
    id: mjO2sFpK
    shape: diagonal
    iconamic: expand
    pre: 'Managed Services'
    hero_home_title: 'Work Even Faster, With Fewer Things to Worry About'
    hero_home_description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Stop worrying about server monitoring and maintenance. Get quicker, broader access to our 24/7 Support Team. And access time-saving features on your hosting platform.'
    buttons:
      -
        id: lrzodymc
        template_global: /components/buttons
        label: 'Join Webslice'
        link_type: url
        target_blank: false
        url: 'https://console.webslice.com/register'
        button_type: button
        iconamic: chevrons-right
      -
        id: ltxslzeb
        template_global: /components/buttons
        label: 'Login to Add Services now'
        link_type: url
        target_blank: false
        url: 'https://console.webslice.com/login'
        button_type: secondary
        iconamic: chevron-right
    type: hero
    enabled: true
    dark_image: illustrations/expand.png
    template: /general_content/hero
    template_global: /global/iconamic
title: 'Managed Services'
page_description: 'Monitoring, incident response, time-saving tools, broader 24/7 support.'
meta_title: 'Managed Services - Webslice web hosting'
meta_description: 'Add Managed Services to Webslice hosting for time-saving developer tools, broader 24/7 technical support, and server management including incident response.'
updated_by: fa61bd1a-7054-4dd6-974f-a1764a47c4ec
updated_at: 1710881987
page_builder:
  -
    id: ltginaij
    template: /page_builder/highlight
    rows:
      -
        id: ltgincl4
        highlight_title: 'No more responding to incidents and alerts'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: "Every Webslice server is automatically monitored, and every Webslice customer can review up-to-date performance metrics. That's a handy way to know when you need to check up on something yourself. "
          -
            type: paragraph
            content:
              -
                type: text
                text: "With Managed Services we take care of the response for you. A lot of the time, things are solved before you'd even notice an issue."
        template_global: /global/default_image
        default_image: bb28417eb2b2507580ab0f08bf09ea69.webp
        type: highlight-item
        enabled: true
        border: false
      -
        id: ltgjb41x
        highlight_title: 'Even higher standards of 24/7 support'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: "Our Support Team is smart, highly rated by customers, and quick to act. If you're ever in a jam, this is your first point of call. With Managed Services you'll have more ways to contact us, more expertise to rely on, and with Premium services even a customized SLA."
        template_global: /global/default_image
        default_image: photo-1601933973783-43cf8a7d4c5f.jpeg
        type: highlight-item
        enabled: true
        border: false
      -
        id: ltgip6ay
        highlight_title: Time-saving
        template_global: /global/default_image
        type: highlight-item
        enabled: false
        border: false
      -
        id: ltgipldn
        highlight_title: 'Enhanced developer tools'
        template_global: /global/default_image
        type: highlight-item
        enabled: false
        border: false
    toggle_background: false
    reverse_alignment: false
    toggle_alignment: true
    type: highlight
    enabled: true
  -
    id: lt81flzj
    template: page_builder/head_to_documentation
    template_global: /global/iconamic
    iconamic: wrench
    title: 'Time-saving developer tools'
    description: 'When you add Business or Premium Services to your Webslice Containers, you unlock tools that supercharge your productivity.'
    entry:
      -
        id: lt81htdt
        text: 'Clone and overwrite containers.'
        type: entry
        enabled: true
        url: /docs/containers/features/cloning-overwriting/
      -
        id: lt81hxem
        text: 'Control caching, or switch on Simple Cache.'
        type: entry
        enabled: true
        url: /docs/containers/features/caching/
      -
        id: ltxsilxr
        text: 'One-click backup restore'
        url: /docs/containers/features/backup-restore/
        type: entry
        enabled: true
      -
        id: lt81i1vf
        text: 'Schedule automated image updates.'
        type: entry
        enabled: true
        url: /docs/containers/features/auto-updates/
    type: head_to_documentation
    enabled: true
  -
    id: ltxpm6yo
    template: /page_builder/pricing_table
    pricing_style: items
    template_global: /global/iconamic
    Items:
      -
        id: ltxqadj8
        highligh: false
        title: Standard
        description: 'Platform support for every customer, every container, and every server.'
        price: 0
        type: column
        enabled: true
        price_detail:
          -
            type: paragraph
            content:
              -
                type: text
                text: ' '
        features:
          - 'Support Method: Community & email'
          - 'Support Coverage: Platform Only'
          - 'Monitoring: Self-managed'
          - 'SLA: Standard'
      -
        id: ltxpqrz4
        highligh: true
        highligh_text: 'Most popular'
        title: Business
        description: 'More proactive services, broader support, and advanced platform features.'
        price: 50
        price_detail:
          -
            type: paragraph
            content:
              -
                type: text
                text: '+ $2.50 per container (USD, monthly)'
        type: column
        enabled: true
        features:
          - 'Support Method: Standard + Live Chat'
          - 'Support Coverage: Platform & App'
          - 'Monitoring: 24x7 Monitoring & Response'
          - 'SLA: Standard'
          - 'Container Feature: Automatic Image Updates'
          - 'Container Feature: Cloning & Sync'
          - 'Container Feature: Simple Cache'
          - 'Container Feature: One-Click Backup Restore'
      -
        id: ltxpm8fq
        highligh: false
        title: Premium
        description: 'All Business-tier services and developer tools, plus the highest level of 24/7 support.'
        price: 350
        price_detail:
          -
            type: paragraph
            content:
              -
                type: text
                text: '+ $5 per container (USD, monthly)'
        type: column
        enabled: true
        features:
          - 'Support Method: Business + Phone'
          - 'Support Coverage: Platform & App'
          - 'Monitoring: 24x7 Monitoring & Response'
          - 'SLA: Premium & Customisable'
          - 'Container Feature: Automatic Image Updates'
          - 'Container Feature: Cloning & Sync'
          - 'Container Feature: Simple Cache'
          - 'Container Feature: One-Click Backup Restore'
    type: pricing_table
    enabled: true
    iconamic: list-checks
    title: 'Managed services - Packages and pricing'
    description: 'Your selected services will apply across your whole team and all the servers and containers that you run. To add Managed Services, log into Webslice and head to your team settings.'
  -
    id: ltxrr6i7
    template: /general_content/_multiple_text_columns
    display_title_section:
      -
        id: ltxrr7mt
        center_title_title: 'Platform support vs Application support'
        type: section_title
        enabled: true
    columns:
      -
        id: ltxrsudq
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'What would you like our Support Team to help you with? '
              -
                type: text
                marks:
                  -
                    type: bold
                text: 'Platform support'
              -
                type: text
                text: ' is free and available to everyone. By adding Business or Premium Services, you and your team can also access '
              -
                type: text
                marks:
                  -
                    type: bold
                text: 'Application support'
              -
                type: text
                text: '. This broadens the range of issues that our Support Team can help you with.'
        type: column
        enabled: true
      -
        id: ltxrudjf
        text:
          -
            type: paragraph
            content:
              -
                type: text
                marks:
                  -
                    type: bold
                text: 'Platform support'
              -
                type: text
                text: " covers your Webslice platform. We'll help solve issues affecting your servers, containers and our network. We'll also answer questions about the Webslice Console's functions and features. This support does not cover anything running inside your Containers."
        type: column
        enabled: true
      -
        id: ltxrwj31
        text:
          -
            type: paragraph
            content:
              -
                type: text
                marks:
                  -
                    type: bold
                text: 'Application support'
              -
                type: text
                text: " covers parts of the software that run in your Containers, and more advanced technical questions. While we won't write or debug code for you, we'll answer questions about performance issues, crashes, or why your website may have stopped working."
        type: column
        enabled: true
    type: multiple_text_columns
    enabled: true
  -
    id: ltruaxvo
    template: /page_builder/testimonial_section
    title:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Save time and worry less, like these happy customers'
    bg_pattern: true
    testimonial:
      - 85bf0248-4d5f-41ca-b370-38994540c388
      - 4d1154e8-e6b1-4efb-8e2f-a2deb59d0fab
      - cf8f6cdf-5ddb-4e23-9892-4c31827cd046
    type: testimonial_section
    enabled: true
---

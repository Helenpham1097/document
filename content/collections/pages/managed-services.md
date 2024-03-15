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
        id: lrzodtof
        template_global: /components/buttons
        label: 'Request Managed Services'
        link_type: entry
        target_blank: false
        button_type: button
        entry: 178073b8-7594-4432-9b39-2461b487bce8
        iconamic: chevrons-right
      -
        id: lrzodymc
        template_global: /components/buttons
        label: 'Join Webslice Now'
        link_type: url
        target_blank: false
        url: 'https://console.webslice.com/register'
        button_type: secondary
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
updated_at: 1710478100
page_builder:
  -
    id: lt81rapn
    template: page_builder/two_options
    title: 'Managed Services'
    sub_title: 'Two levels to choose from. Are you here to save time and stress, or to protect mission critical assets?'
    boxes:
      -
        id: lt81sex0
        template_global: /global/iconamic
        title: 'Our Expertise, Your Infrastructure'
        description: 'With Managed Services 1, our team takes responsibility for a lot of infrastructure maintenance and management.'
        image: cube.png
        image_hover: aws-diagram.png
        type: box
        enabled: true
        iconamic: signal-medium
      -
        id: lt81spdc
        template_global: /global/iconamic
        title: 'Add Next Level Support'
        url: '#'
        text_link: 'Contact Us?'
        type: box
        enabled: true
        iconamic: signal-high
        description: 'With Managed Services 2, you get more ways to directly access our Support Team, and a higher SLA every time you do.'
    type: two_options
    enabled: false
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
                text: "Every Webslice server is automatically monitored, and every Webslice customer can receive incident alerts. That's a handy way to let you know when you need to check up on something yourself. "
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
    description: 'When you add Managed Services to your Webslice Containers, you unlock tools that supercharge your productivity.'
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
        id: lt81i1vf
        text: 'Schedule automated image updates.'
        type: entry
        enabled: true
        url: /docs/containers/features/swapping-images/
    type: head_to_documentation
    enabled: true
  -
    id: lt812bbp
    template: /general_content/bento_highlight
    rows:
      -
        id: lt812ck8
        template_global: /global/iconamic
        iconamic: wrench
        title: 'Bento Highlight Box'
        description: 'Bento highlight desc. When you add Managed Services to your Webslice Containers, you unlock tools that supercharge your productivity.'
        buttons:
          -
            id: lt815lhm
            template_global: /components/buttons
            label: 'Start With Webslice Now'
            iconamic: chevrons-right
            link_type: entry
            target_blank: false
            entry: 128bc187-e58c-4ccc-a5f7-587727470a54
            button_type: button
        bentos:
          -
            id: lt812uva
            items:
              -
                id: lt812xow
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Clone and overwrite containers.'
                url: '#'
                target: true
                type: link
                enabled: true
              -
                id: lt8138yn
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Control caching, or switch on Simple Cache.'
                url: '#'
                target: true
                type: link
                enabled: true
              -
                id: lt813lip
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Schedule automated image updates.'
                target: false
                type: link
                enabled: true
            type: box
            enabled: true
        type: feature_highlight-item
        enabled: false
    reverse_alignment: false
    toggle_alignment: false
    type: bento_highlight
    enabled: false
  -
    id: lt82em9t
    template: /page_builder/pricing_table
    pricing_style: items
    template_global: /global/iconamic
    iconamic: list-checks
    title: 'Managed Services - Packages and Pricing'
    Items:
      -
        id: ltgdxyl3
        highligh: false
        title: Standard
        description: 'Every Webslice customer has access to 24/7 support and platform monitoring.'
        price: 0
        features:
          - 'Support access: Community and email'
          - 'Support coverage: Platform only'
          - 'Monitoring: Receive automatic alerts'
          - 'Standard support SLA'
        type: column
        enabled: true
      -
        id: lt82h1tl
        highligh: true
        highligh_text: Recommended
        title: Business
        description: 'More proactive services, broader support, and advanced platform features.'
        price: 50
        features:
          - 'Support access: Add live chat'
          - 'Full support coverage: Platform + application support'
          - 'Monitoring: Proactive incident response'
          - 'Standard support SLA'
          - 'Webslice Containers: Add enhanced developer tools (automatic image updates, container cloning, caching and more)'
        type: column
        enabled: true
      -
        id: lt82hdtb
        highligh: false
        title: Premium
        description: 'All Business-tier services and developer tools, plus the highest level of 24/7 support.'
        price: 350
        features:
          - 'Support access: Add video and phone'
          - 'Full support coverage: Platform + application support'
          - 'Monitoring: Proactive incident response'
          - 'Premium, customisable support SLA'
          - 'Webslice Containers: Enhanced developer tools'
        type: column
        enabled: true
    type: pricing_table
    enabled: true
    description: "No matter what Webslice hosting platform you're on, and no matter what size hosting package you have, you can add either level of Managed Services."
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

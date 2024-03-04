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
    hero_home_title: 'You Have Great Hosting, Now Add a Dedicated Professional Team'
    hero_home_description:
      -
        type: paragraph
        content:
          -
            type: text
            text: "Add Managed Services to your Webslice hosting and we'll take care a lot of the things that can cause sleepless nights. You'll start working faster, too, by unlocking advanced features for developers."
    buttons:
      -
        id: lrzodtof
        template_global: /components/buttons
        label: 'Request Managed Services'
        link_type: entry
        target_blank: false
        button_type: button
        entry: 178073b8-7594-4432-9b39-2461b487bce8
      -
        id: lrzodymc
        template_global: /components/buttons
        label: 'Sign Up Now'
        link_type: url
        target_blank: false
        url: '#'
        button_type: secondary
    type: hero
    enabled: true
    dark_image: illustrations/expand.png
    template: /general_content/hero
    template_global: /global/iconamic
title: 'Managed Services'
page_description: 'Scalable hosting shrinks your bills in quiet times and keeps your website fast and available in the busiest periods.'
meta_title: 'Webslice page title'
meta_description: 'Scalable hosting shrinks your bills in quiet times and keeps your website fast and available in the busiest periods.'
updated_by: fa61bd1a-7054-4dd6-974f-a1764a47c4ec
updated_at: 1709506813
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
    enabled: true
  -
    id: lt81flzj
    template: page_builder/head_to_documentation
    template_global: /global/iconamic
    iconamic: wrench
    title: 'Enhanced Developer Tools'
    description: 'When you add Managed Services to your Webslice Containers, you unlock tools that supercharge your productivity.'
    entry:
      -
        id: lt81htdt
        text: 'Clone and overwrite containers.'
        type: entry
        enabled: true
      -
        id: lt81hxem
        text: 'Control caching, or switch on Simple Cache.'
        type: entry
        enabled: true
      -
        id: lt81i1vf
        text: 'Schedule automated image updates.'
        type: entry
        enabled: true
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
      -
        id: lt812n3x
        template_global: /global/iconamic
        title: 'Management Feature 2'
        type: feature_highlight-item
        enabled: true
    reverse_alignment: false
    toggle_alignment: false
    type: bento_highlight
    enabled: false
  -
    id: lt7yeh9b
    template: /general_content/bento
    template_global: /global/iconamic
    iconamic: wrench
    title: Maintenance
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: "I've been working on this stuff for way too long, and the biggest problem is that I genuinely do not know what managed vs unmanaged serverless hosting would look like. Advanced Developer Tools? Support SLA? Any difference in maintenance?"
    type: bento_features
    enabled: true
  -
    id: lt7yk05k
    template: /general_content/bento
    template_global: /global/iconamic
    iconamic: activity-square
    title: 'A Second Thing'
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'With a paragraph to describe it and everything. Things go on.'
    type: bento_features
    enabled: false
  -
    id: lt82em9t
    template: /page_builder/pricing_table
    pricing_style: items
    template_global: /global/iconamic
    iconamic: list-checks
    title: 'Managed Services - Packages and Pricing'
    description: "Two tiers of Managed Services. Save yourself time and stress, or go Advanced if you're running mission critical assets."
    Items:
      -
        id: lt82h1tl
        highligh: true
        highligh_text: 'Most popular'
        title: 'Managed Services 1'
        description: 'Free yourself from lot of the fiddly infrastructural stuff, and deliver more for your clients instead.'
        price: 200
        features:
          - 'Schedule automatic image updates'
          - 'Unlock enhanced developer tools'
          - 'Proactive monitoring and incident response'
        type: column
        enabled: true
      -
        id: lt82hdtb
        highligh: true
        highligh_text: 'The finest service'
        title: 'Managed Services 2'
        description: 'Add in our very highest levels of personalized service.'
        price: 600
        features:
          - 'Everything from Managed Service 1'
          - "Our Support Team's fastest SLA every time you contact us"
          - 'More ways to access support'
          - 'Top priority access to our expertise'
          - 'Support for managing your applications, not just your infrastructure'
        type: column
        enabled: true
    type: pricing_table
    enabled: true
---

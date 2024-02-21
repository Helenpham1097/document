---
id: 178073b8-7594-4432-9b39-2461b487bce8
blueprint: general_content
template: general_content/index
top_section:
  -
    template: /general_content/hero
    hero_home_title: 'Contact Us'
    hero_home_description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'We are always happy to answer any questions you have, help solve problems you might be facing, or even just have a chat.'
    template_global: /global/default_image
    type: hero
    enabled: true
sections:
  -
    template: /forms/contact_us
    type: contact_us_form
    enabled: true
title: 'Contact Us'
updated_by: bdf0548e-f14e-4b7d-9abd-d2223cb02cec
updated_at: 1667437965
page_builder:
  -
    template: general_content/feature_section
    add_intro_features: false
    add_highlight_features: true
    background_select: grid_background
    highlight_features_title: 'Looking for tech support?'
    features:
      -
        select_type: icon
        iconamic: phone
        title: 'Call us'
        description:
          -
            type: paragraph
            content:
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: '0800 454 537'
                      rel: noopener
                      target: null
                      title: null
                  -
                    type: italic
                text: '0800 454 537'
              -
                type: hard_break
                marks:
                  -
                    type: italic
              -
                type: text
                marks:
                  -
                    type: italic
                text: '24 hours, 7 days a week'
        type: highlight_feature
        enabled: true
      -
        select_type: icon
        iconamic: location-marker
        title: 'Snail mail'
        description:
          -
            type: paragraph
            content:
              -
                type: text
                marks:
                  -
                    type: italic
                text: "PO Box 11859\L Ellerslie"
              -
                type: text
                text: " \L"
              -
                type: text
                marks:
                  -
                    type: italic
                text: 'Auckland 1542'
              -
                type: text
                text: " \L"
              -
                type: text
                marks:
                  -
                    type: italic
                text: 'New Zealand'
        type: highlight_feature
        enabled: true
      -
        select_type: icon
        iconamic: office-building
        title: 'Our office'
        description:
          -
            type: paragraph
            content:
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: 'https://goo.gl/maps/WjGdjKFwtZnYpW1U9'
                      rel: noopener
                      target: null
                      title: null
                  -
                    type: italic
                text: '44 Olive Road Penrose'
              -
                type: hard_break
                marks:
                  -
                    type: italic
              -
                type: text
                marks:
                  -
                    type: italic
                text: 'Auckland 1061 - New Zealand'
        type: highlight_feature
        enabled: true
    type: feature_section
    enabled: true
---

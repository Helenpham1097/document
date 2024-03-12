---
id: 79c35c26-5009-4dbd-b647-d4f24eb357bb
blueprint: general_content
template: general_content/index
top_section:
  -
    id: lssbcijw
    template: /general_content/hero
    shape: diagonal
    template_global: /global/iconamic
    iconamic: signpost
    pre: Domains
    hero_home_title: 'Domains are in Private Beta'
    hero_home_description:
      -
        type: paragraph
        content:
          -
            type: text
            text: "We're an ICANN-accredited registrar, and soon you'll be able to use our tools to easily manage any number of domains, from renewal to DNS."
    type: hero
    enabled: true
    buttons:
      -
        id: lssbjxvg
        template_global: /components/buttons
        label: 'Contact Us'
        iconamic: mail
        link_type: email
        target_blank: false
        email: hello@sitehost.nz
        button_type: secondary
title: Domains
page_description: 'Register or transfer domains to Webslice for powerful bulk domain management tools, competitive pricing, reliable DNS, and professional service.'
updated_by: fa61bd1a-7054-4dd6-974f-a1764a47c4ec
updated_at: 1710275091
meta_title: 'Domain name registration, transfer, management'
meta_description: 'Register or transfer domains to Webslice for powerful bulk domain management tools, competitive pricing, reliable DNS, and professional service.'
page_builder:
  -
    id: ltjq2pzz
    template: /general_content/_multiple_text_columns
    display_title_section:
      -
        id: ltjq2rbe
        center_title_title: "We're an experienced domain registrar"
        type: section_title
        enabled: true
    columns:
      -
        id: ltjq3c30
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Through our sister companies, we already have thousands of customers who register, renew, and manage domains with us. From that experience we know how important it is for domain tools and platforms to be fully-featured and rock-solid before we open them up.'
        type: column
        enabled: true
      -
        id: ltjq3ecd
        type: column
        enabled: false
      -
        id: ltjq6rl5
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: "That's why Webslice's domain management features are still in Private Beta. We'll let all our users know as soon as they're ready for general release. In the meantime, if you want to know anything about domains on Webslice, email "
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: 'mailto:hello@webslice.com'
                      rel: noopener
                      target: null
                      title: null
                text: hello@webslice.com
              -
                type: text
                text: .
        type: column
        enabled: true
    type: multiple_text_columns
    enabled: true
  -
    id: ltjq8bfz
    template: /forms/contact_us
    type: contact_us_form
    enabled: false
  -
    id: ltjqlq4g
    template: /page_builder/highlight
    rows:
      -
        id: ltjqlro0
        highlight_title: 'Start hosting with Webslice today'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: "Our hosting customers will be the first to know when you can register and manage domains through the Webslice Console. If you haven't already seen what's possible with Webslice Containers, have a look now."
        template_global: /global/default_image
        default_image: placeholders-to-delete/webslice-console-screen-2.png
        buttons:
          -
            id: ltjqmxvb
            template_global: /components/buttons
            label: 'See Webslice Containers'
            iconamic: boxes
            link_type: entry
            target_blank: false
            entry: 321f3638-6149-4686-a430-c179ad55fcbe
            button_type: button
            attr_title: 'Webslice Containers'
        type: highlight-item
        enabled: true
    toggle_background: false
    reverse_alignment: false
    toggle_alignment: false
    type: highlight
    enabled: true
  -
    id: ltjqd4fy
    template: /page_builder/get_started
    title: 'Start hosting with Webslice today'
    description: 'Our hosting customers will be the first to know when you can register and manage domains through the Webslice Console.'
    start_type:
      -
        id: ltjqenal
        template_global: /global/iconamic
        iconamic: boxes
        title: 'Webslice Containers:'
        description: 'Faster websites, fewer worries.'
        type: start
        enabled: true
        content:
          -
            type: orderedList
            attrs:
              start: 1
            content:
              -
                type: listItem
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Create your Webslice account.'
              -
                type: listItem
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Select your server for as little as $10/mo.'
              -
                type: listItem
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Add containers.'
              -
                type: listItem
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Choose from dozens of pre-built images.'
              -
                type: listItem
                content:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Get developing!'
      -
        id: ltjqg0dy
        template_global: /global/iconamic
        iconamic: expand
        title: 'Webslice Serverless:'
        description: 'Stretch but never break with PHP-friendly, elastic hosting.'
        type: start
        enabled: true
    type: get_started
    enabled: false
---

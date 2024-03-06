---
id: 1e33d247-bf25-42a4-b455-b47eb8dcf557
blueprint: general_content
template: general_content/index
top_section:
  -
    id: lrzod0rt
    template: /general_content/hero
    shape: paper
    template_global: /global/default_image
    iconamic: expand
    pre: 'Webslice Serverless'
    hero_home_title: 'Stretch But Never Break With Incredibly Scalable Hosting'
    hero_home_description:
      -
        type: paragraph
        content:
          -
            type: text
            text: "Finally, a serverless hosting platform that's easy to use, PHP-friendly, and incredibly elastic."
    buttons:
      -
        id: lrzodtof
        template_global: /components/buttons
        label: 'Register For Public Beta'
        link_type: url
        target_blank: false
        url: '#'
        button_type: button
        iconamic: chevrons-right
      -
        id: lrzodymc
        template_global: /components/buttons
        label: 'Read Documentation'
        iconamic: file
        link_type: url
        target_blank: false
        url: '#'
        button_type: secondary
    type: hero
    enabled: true
    dark_image: illustrations/expand.png
    light_image: illustrations/expand.png
title: Serverless
updated_by: fa61bd1a-7054-4dd6-974f-a1764a47c4ec
updated_at: 1709691051
page_builder:
  -
    id: lrzoffkv
    template: /general_content/bento_highlight
    rows:
      -
        id: lrzofjxj
        template_global: /global/iconamic
        iconamic: expand
        title: 'Fast when you’re busy, cheap when it’s quiet'
        description: |-
          The Webslice Serverless platform gives you easy access to truly elastic hosting. Serve any number of instances of your site or app at any time. You set the parameters, then Webslice Serverless dials resources up and down as traffic arrives.

          Keep your sites fast and available for every visitor, even if they're all there at once, and never pay for resources you don’t need.
        buttons:
          -
            id: lrzog03w
            template_global: /components/buttons
            label: 'Register For Public Beta'
            link_type: url
            target_blank: false
            url: '#'
            button_type: secondary
            iconamic: chevrons-right
        type: feature_highlight-item
        enabled: true
        bentos:
          -
            id: lrzoheru
            image: ill_5---connect-your-github.svg
            items:
              -
                id: lrzohm07
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Connect your GitHub, GitLab, or Bitbucket repository for '
                      -
                        type: text
                        marks:
                          -
                            type: bold
                        text: 'direct deployment'
                      -
                        type: text
                        text: .
                type: link
                enabled: true
                target: false
            type: box
            enabled: true
          -
            id: lrzomqqc
            items:
              -
                id: lrzomt82
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
                        text: 'as many projects and websites'
                      -
                        type: text
                        text: ' as you need, all in one place.'
                type: link
                enabled: true
                target: false
            type: box
            enabled: true
          -
            id: lrzomror
            items:
              -
                id: lrzomv0q
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Choose from locations '
                      -
                        type: text
                        marks:
                          -
                            type: bold
                        text: 'all around the globe'
                      -
                        type: text
                        text: .
                type: link
                enabled: true
                target: false
            type: box
            enabled: true
    reverse_alignment: true
    toggle_alignment: false
    type: bento_highlight
    enabled: true
  -
    id: ltf1pkxq
    template: /page_builder/get_started
    title: 'Public Beta opens soon'
    description: 'Register now to be one of the first developers on Webslice Serverless. Invitations will be sent in the first half of 2024.'
    start_type:
      -
        id: ltf1ro4g
        template_global: /global/iconamic
        iconamic: mail
        title: 'Register Now.'
        description: 'Add yourself to the email list today.'
        content:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Can we have an email-collection form on this page?'
        type: start
        enabled: true
      -
        id: ltf1u45p
        template_global: /global/iconamic
        type: start
        enabled: true
    type: get_started
    enabled: true
  -
    id: lrzokns4
    template: /general_content/bento_highlight
    rows:
      -
        id: lrzofjxj
        template_global: /global/iconamic
        title: 'The real magic: AWS, but easy to use'
        description: |-
          Webslice Serverless is built on AWS. The heavy lifting is all done. You don't need to worry about complicated architectural decisions, or managing multiple services, or complex billing. We've taken care of all the hard stuff.

          We've been making hosting easy to use for 20 years. You manage everything through the Webslice Serverless console. It's powerful, friendly, and flexible - AWS made easy.
        buttons:
          -
            id: lrzog03w
            template_global: /components/buttons
            label: 'Register for Public Beta'
            link_type: url
            target_blank: false
            url: '#'
            button_type: secondary
            iconamic: chevrons-right
        type: feature_highlight-item
        enabled: true
        bentos:
          -
            id: lrzoheru
            image: ill_6---picked-a-region.svg
            items:
              -
                id: lrzohm07
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Pick an AWS region and then '
                      -
                        type: text
                        marks:
                          -
                            type: bold
                        text: 'never think about servers, or serverless'
                      -
                        type: text
                        text: ', or any other infrastructure again.'
                type: link
                enabled: true
                target: false
              -
                id: ltezki02
                target: false
                type: link
                enabled: false
            type: box
            enabled: true
          -
            id: ltezm7hd
            items:
              -
                id: ltezm8z0
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Run '
                      -
                        type: text
                        marks:
                          -
                            type: bold
                        text: 'serverless PHP stacks, including WordPress'
                      -
                        type: text
                        text: ', without static rendering or any other hassles.'
                target: false
                type: link
                enabled: true
            type: box
            enabled: true
          -
            id: ltf17onf
            items:
              -
                id: ltf17xpi
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Use '
                      -
                        type: text
                        marks:
                          -
                            type: bold
                        text: 'one console'
                      -
                        type: text
                        text: ' to manage all your hosting - concurrency limits, SSL, backups, databases, and more.'
                target: false
                type: link
                enabled: true
            type: box
            enabled: true
        iconamic: cloud-cog
      -
        id: ltey77tx
        template_global: /global/iconamic
        title: 'Clever infrastructure that you’ll never have to think about'
        description: |-
          The Webslice Scalable Hosting platform is your easy way into truly elastic hosting. You set the parameters, then Webslice Scalable dials resources up and down as required. 

          Keep your sites fast and available for every visitor, even if they all arrive at once, and never pay for resources you don’t need.
        buttons:
          -
            id: lrzog03w
            template_global: /components/buttons
            label: 'Start risk-free for 7 days'
            link_type: url
            target_blank: false
            url: '#'
            button_type: inline
        type: feature_highlight-item
        enabled: false
        bentos:
          -
            id: lrzoheru
            image: ill_6---picked-a-region.svg
            items:
              -
                id: lrzohm07
                text:
                  -
                    type: paragraph
                    content:
                      -
                        type: text
                        text: 'Once you’ve picked an AWS region, you won’t need to think about servers, or serverless, or any other infrastructure again. We’ll take care of all that while you develop great websites.'
                type: link
                enabled: true
                target: false
            type: box
            enabled: true
    reverse_alignment: true
    toggle_alignment: false
    type: bento_highlight
    enabled: true
  -
    id: ltf2ekr2
    template: /general_content/_multiple_text_columns
    display_title_section:
      -
        id: ltf2em82
        center_title_title: 'Go serverless without the learning curve'
        type: section_title
        enabled: true
    columns:
      -
        id: ltf2t9kv
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Before now, serverless hosting has been inaccessible to a lot of developers. Complex architecture and other complications, like rendering static copies of websites, were too much of a hassle.'
        type: column
        enabled: true
      -
        id: ltf31hlj
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: "But if you go serverless without stitching together dozens of web services for yourself, and without changing your development routines, there's a lot to gain."
        type: column
        enabled: true
      -
        id: ltf2tm2z
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'The Webslice Serverless platform is your easy way into truly elastic hosting. Bring your sites as they are, set your own parameters, then Webslice Serverless dials resources up and down as required.'
        type: column
        enabled: true
    type: multiple_text_columns
    enabled: true
  -
    id: ltf3e54y
    template: /general_content/_multiple_text_columns
    display_title_section:
      -
        id: ltf2em82
        center_title_title: 'Go serverless without the learning curve'
        type: section_title
        enabled: true
    columns:
      -
        id: ltf2t9kv
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Before now, serverless hosting has been inaccessible to a lot of developers. Complex architecture involves dozens of separate web services. Other complications, like rendering static copies of websites, abound.'
        type: column
        enabled: true
      -
        id: ltf31hlj
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: "But if you go serverless without stitching together dozens of web services for yourself, and without changing your development routines, there's a lot to gain."
        type: column
        enabled: false
      -
        id: ltf2tm2z
        text:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Now the Webslice Serverless platform is your easy way into truly elastic hosting. Bring your sites as they are, set your own parameters, then Webslice Serverless dials resources up and down as required. Get the benefits without the headaches.'
        type: column
        enabled: true
    type: multiple_text_columns
    enabled: true
  -
    id: lrzoqogi
    template: page_builder/head_to_documentation
    template_global: /global/iconamic
    iconamic: book-open
    title: 'Learn more about Webslice Serverless'
    description: 'Check out the Webslice Serverless documention to get familiar with the platform before your Public Beta invitation arrives.'
    sub_title: 'Head to Documentation to see:'
    entry:
      -
        id: lrzor64b
        text: 'The introductory overview for developers'
        url: '#'
        type: entry
        enabled: true
      -
        id: lrzord4z
        text: 'Getting started'
        url: '#'
        type: entry
        enabled: true
      -
        id: lrzorjxj
        text: 'Setting maximum and minimum parameters'
        url: '#'
        type: entry
        enabled: true
      -
        id: lrzorufc
        text: 'Importing PHP sites'
        url: '#'
        type: entry
        enabled: true
      -
        id: lrzorxhn
        text: 'Estimating your hosting bills'
        url: '#'
        type: entry
        enabled: true
    type: head_to_documentation
    enabled: true
  -
    id: ltevn6sn
    template: /page_builder/pricing_table
    pricing_style: items
    template_global: /global/iconamic
    iconamic: boxes
    title: 'Packages and Pricing'
    type: pricing_table
    enabled: false
page_description: 'Stretch but never break with incredibly scalable hosting.'
meta_title: 'Webslice page title'
meta_description: 'Scalable hosting shrinks your bills in quiet times and keeps your website fast and available in the busiest periods.'
---

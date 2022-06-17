---
id: 128bc187-e58c-4ccc-a5f7-587727470a54
blueprint: general_content
template: general_content/index
top_section:
  -
    template: /general_content/hero
    hero_home_title: 'About Us'
    hero_home_description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Aliquam rhoncus ultrices euismod. Morbi auctor scelerisque lacus, nec vehicula eros tempus at. Vestibulum scelerisque finibus leo ac aliquam. Fusce maximus non metus ac facilisis.'
    template_global: /global/default_image
    default_image: about-us/team.jpg
    type: hero
    enabled: true
sections:
  -
    template: /general_content/multiple_text_columns
    type: multiple_text_columns
    enabled: true
    columns:
      -
        markdown: |-
          We’re a small group of web hosting nerds who noticed something back in the 2010s when serverless infrastructure muscled its way onto the scene. It was an exciting, valuable evolution in hosting technology but we also saw some serious limitations.

          Serverless web hosting promises website owners and developers near-limitless scalability up and down, dramatic cuts to costs, and lets them forget all about servers. While your site handles any level of traffic and your hosting bills take a downward dive, you can just focus on what your website does for your customers. Cool!
        type: column
        enabled: true
      -
        markdown: 'But the real-world web, and most of its developers, were being left behind. Turns out this serverless stuff was built for technical teams with a deep understanding of web services. It didn’t suit the millions of websites, stores and blogs that already make up the bulk of the world wide web. It also didn’t suit a lot of the languages and technologies that will fuel the web development of the future. In particular, PHP sites (including sites on CMSs like WordPress and Craft) weren’t easy to take serverless. Some of our industry peers said it was basically impossible.'
        type: column
        enabled: true
    display_title_section:
      -
        center_title_title: 'We love the nuts and bolts of web hosting | We love PHP'
        type: section_title
        enabled: true
  -
    template: /general_content/highlight
    rows:
      -
        highlight_title: 'We understand that most people don’t love the nuts and bolts of web hosting'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'This problem bugged us. Even if it wasn’t literally impossible to put a new PHP project or an existing WordPress site live on serverless infrastructure, the complications were bad enough to stop almost anyone from trying.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Businesses, developers and agencies have enough to worry about without learning new web hosting paradigms and fiddling around in AWS.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'So while the rest of the web hosting industry ignored this problem, we quietly went to work.'
          -
            type: paragraph
            content:
              -
                type: hard_break
        template_global: /global/buttons
        default_image: about-us/2d34429616f83487ec069ebd911356db.webp
        type: highlight-item
        enabled: true
      -
        highlight_title: 'We love a challenge'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'This is why we decided to make Webslice - a platform that non-experts can use to put everyday PHP websites live on serverless infrastructure. No-one else with our level of technical expertise seemed interested enough in today’s developers and websites.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'Or maybe everyone else was scared off by the size of the challenge.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'We knew it wouldn’t be easy. We knew it would mean developing a brand new file system, amongst much else. It literally took us years to turn our original vision into reality.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'As far as we know, there’s nothing else in the world like Webslice.'
          -
            type: paragraph
            content:
              -
                type: hard_break
        template_global: /global/buttons
        default_image: about-us/c8dfd769f4b2c76ecc3222bedf6bd6e1.webp
        type: highlight-item
        enabled: true
      -
        highlight_title: 'Our web hosting chops go way back'
        highlight_textarea:
          -
            type: paragraph
            content:
              -
                type: text
                text: 'When we built Webslice we were leaning on decades of experience. The '
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: 'https://docs.google.com/document/d/177DjzGLALVJk3F39qbcahbYOiSdUTtEepwQ2S4y2C0g/edit#'
                      target: null
                      rel: null
                text: 'Webslice team'
              -
                type: text
                text: ' is part of '
              -
                type: text
                marks:
                  -
                    type: link
                    attrs:
                      href: 'https://docs.google.com/document/d/177DjzGLALVJk3F39qbcahbYOiSdUTtEepwQ2S4y2C0g/edit#'
                      target: null
                      rel: null
                text: 'SiteTech Group'
              -
                type: text
                text: ', which was founded by brothers Nathan and Quintin Russ in 2004. SiteTech is a collection of businesses that focus on infrastructure. We operate data centres, register domains, and manage hosting and other cloud-based solutions.'
          -
            type: paragraph
            content:
              -
                type: text
                text: 'We’re a proud New Zealand company with global ambitions for Webslice.'
        template_global: /global/buttons
        default_image: about-us/b59a3e521a070fd532a000228128afc0.webp
        type: highlight-item
        enabled: true
    toggle_background: false
    reverse_alignment: false
    toggle_alignment: true
    type: highlight
    enabled: true
title: 'About Us'
updated_by: bdf0548e-f14e-4b7d-9abd-d2223cb02cec
updated_at: 1655418514
---

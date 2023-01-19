---
id: ff2a4faf-58d3-4acd-a2fa-3e6a20ef23c8
blueprint: documentation
title: 'Image Guidelines'
parent: 1be80f64-bbbf-4a8f-a9f2-53a78f6fc936
updated_by: bdf0548e-f14e-4b7d-9abd-d2223cb02cec
updated_at: 1674165425
---
This page will outline instructions for adding images to the Knowledge Base.

## Key Principles

1. All screenshots should be captured using Skitch, which is linked to the SiteHost Evernote account. 
   * In the Skitch preferences it should be syncing the captured images to the "SiteHost Screenshots" Notebook.
   * A MacBook will likely be setup ready to go.
2. We typically capture the main page content, excluding the standard navigation elements etc.
3. Hide or rename all confidential details on the page
    * Use the inspector to rename Contacts, Company name, Server names, IPs, Domains etc.
    * Pixelate content as required using Skitch.
6. We only use the following Skitch tools:
    * Rectangle shapes.
    * Pixelation to blur content.
7. Rectangles added should always be in the SiteHost orange `#ec502e`.
8. Inserted screenshots over 500px in size should always:
    * Have the lightbox parameter.
    * Be resized to 500px.
    * Have a description added.

## How to Insert Screenshots into a Page

1. Capture and edit the image using Skitch.
2. Drag the image from Skitch to the Page Media section in Grav where it says "Drop your files here".
3. Hover over the image inside the Page Media section, you will see a menu appear next to the image - click the "+" symbol to insert the image into the page ([see screenshot](Grav___Inserting_Image.png?rel=lightbox)).
4. Edit the inline image link so that it looks like this:  
    `[Image description](imagefile.png?lightbox&resize=500)`
    
## Example Screenshot

This image was inserted using the following markdown:  
`![Example Screenshot](Domains___Toggle_Auto-Renew.png?lightbox&resize=500)`

![Example Screenshot](Domains___Toggle_Auto-Renew.png?lightbox&resize=500)

Note the following:

* Orange rectangle.
* Blurred content.
* Lightbox.
* Resized to 500px.
* Image description.

>>>>>> You can create a text link to a screenshot (even if it is not on the current page) that opens in lightbox. For example here is a text [link to the screenshot](Domains___Toggle_Auto-Renew.png?rel=lightbox) above. This was inserted using the following markdown: `[link to the screenshot](Domains___Toggle_Auto-Renew.png?rel=lightbox)`.
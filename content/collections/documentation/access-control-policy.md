---
id: 2a0c5938-83c2-498a-ac67-4daec07c0d06
blueprint: documentation
title: 'Access Control Policy'
parent: 1be80f64-bbbf-4a8f-a9f2-53a78f6fc936
updated_by: bdf0548e-f14e-4b7d-9abd-d2223cb02cec
updated_at: 1674163873
---
We all know we are trusted by thousands of customers to look after some of their most valuable data and in our basic [security briefing](https://documentation.shq.nz/everyone/handbook/security) we focus on the personal steps you should take to keep yourself and our customers safe.

Perhaps a more complicated aspect though is access control, particularly when providing access, data or passwords to our customers. This document explains our expectations and rules in these scenarios and will help prevent us from making mistakes and protect us from social engineering attacks.

## The Basics
Never provide account, data, or server access to anyone unless you are 100% sure they are an authorised contact. 

If you are providing access or information it must follow the rules outlined below. This holds true for any private data that belongs to our customers as well as for SiteHost team members.

These rules apply to all access we provide across our brands and systems. Think about SiteHost CP, MyHost Dashboard, SiteName, Domains Direct, FTP/SFTP/SSH access, email access, cPanel/Plesk logins, database user credentials, htpasswd based auth credentials and more.

## Escalation Contacts
Anytime you're unsure of the correct way to proceed when providing access, data or information ask Quintin, Paulus or Jishnu for guidance.

## The Rules

* Passwords should almost never be sent to anyone. If someone needs their password, teach them how to reset it themselves.
* In the very rare exceptions where a password must be sent use paste.sitehost.nz with a short expiry.
* If we are asked to provide access or make changes by someone who is not a direct customer of ours, such as a customer of a reseller, you should ask them to contact their reseller directly. If it's an urgent issue, assure them that we will reach out to their reseller directly, however we won't be able to take any action unless it's approved by the reseller.
* If a customer can't access the mailbox where password reset links are being sent because the domain has expired you must authenticate them using at least two [approved methods](#approved-authentication-methods).
* If someone has locked their account due to multiple login failures, authenticate the customer using one of the [methods below](#approved-authentication-methods) and unlock the account. Then get them to reset their password.
* Always encourage customers to enable Multi-Factor Authentication (MFA) for logins, especially for the SiteHost Control Panel and MyHost Dashboard.
* If you suspect an account has been compromised or if you feel there is a breach that has occurred escalate to the contacts above.
* If a colleague needs to reset their password and reaches out to you, ask them to get in touch with one of the contacts above. You should never reset the password for any team member working at SiteHost.

### Approved Authentication Methods
* [Phone Support Pin](https://kb.sitehost.nz/account/support#phone-support-pin) is best if they have access to the SiteHost Control Panel.
* Approval via email from a separate authorised contact on the account.
* Recent invoice or credit card information stored against the account.

## Prior Incidents & Learnings
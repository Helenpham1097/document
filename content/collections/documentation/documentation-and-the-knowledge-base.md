---
id: 7e75258e-ad3f-4de9-9675-76158ed6b10f
blueprint: documentation
title: 'Documentation & The Knowledge Base'
updated_by: bdf0548e-f14e-4b7d-9abd-d2223cb02cec
updated_at: 1674163927
---
Both [documentation.shq.nz](//documentation.sqh.nz) and [kb.sitehost.nz](https://kb.sitehost.nz) are built on the same system, [Grav](https://getgrav.org). The markdown and templates used between them is also identical (at least at the time of writing) so if you learn how to work with one you can work with the other, with some minor workflow differences.

Get started by reading through everything in [this section](/docs), it's important we're consistent in our style and methods. Once you're up to speed you can move onto the workflows below to actually start making changes.

## Internal Documentation – Editing Workflow
When you want to make changes to this website you have two options, _but the first is best for most situations_.

- Log in to the [admin panel](/admin) and edit the articles directly and click save, this will update the live site.
- Download [the repository](https://gitlab.sitehost.co.nz/Team/Documentation) make your changes locally, preview your changes by using the [local server](https://learn.getgrav.org/16/basics/installation#running-grav-with-the-built-in-php-webserver-using-router-php) and finally commit them as you would anything else to git.

The second one is more involved and is only worthwhile if you need to make bulk changes with a proper text editor or want to have a full git history for the changes you're making. If those two things don't matter to you, use the first method.

You should never make changes to the files in any other method, if you find yourself connecting to a server or using SSH, stop – you're doing it wrong (_unless you're purely running git commands_) and you're going to break something.

## Production Knowledge Base – Editing Workflow

When editing the knowledge base you should work in either the staging environment, or local, depending on your preference of using the CMS or editing the markdown files directly. At the time of writing the staging environment is at [kb.staging.shq.nz](http://kb.staging.shq.nz) and the [repository is in GitLab](https://gitlab.sitehost.co.nz/marketing/sitehost-kb).

Fow now, I'm going to assume you're editing on staging via the CMS. You should use your own login, see Adding Users below if you don't have one.

1. Go to [kb.staging.shq.nz/admin](http://kb.staging.shq.nz/admin) and login.
2. Navigate to the page you want to edit (or add a new one) and make the changes.
3. Once you've made your changes SSH into the staging box and `dockerssh` as the `kbstaging` user.
	```
		ssh sitehost@kb.staging.shq.nz
        sudo -i
        dockerssh kbstaging
        cd container/application/public/
	```
4. Create a branch for your changes and then push your changes for review:
	```
		git branch your-branch-name
		git checkout your-branch-name
        git add example-article.md
		git commit -m "Describe your changes in a short but sweet message."
		git push
```
5. Now you can [log in to GitLab](https://gitlab.sitehost.co.nz/marketing/sitehost-kb) and create a merge request to assign to someone. Assign to someone who you trust to review and edit content, think Paulus, Ben et al.

6. Pull the latest changes to the production container.

    ```
        ssh sitehost@kb.sitehost.nz
        sudo -i
        dockerssh knowledgebase
        cd container/application/public/
        git pull
    ```

## Adding Users
Rather than using the shared `sitehost` user for making changes everyone must use their own account. This is done through the CLI by following the steps after this command `php -f bin/plugin login newuser`, or you can read [the full steps here](http://blog.netgloo.com/2016/10/04/grav-creating-user-with-editor-role). You should do this on the staging server so that you can commit the user to repository – the password will be encrypted. Which means you need to remember to commit the user when you're done!

On production knowledge base:

```bash
ssh sitehost@kb.staging.shq.nz
sudo -i
docker exec -it $(shps | grep kb.staging | awk '{print $3}') bash
cd html/public/
php -f bin/plugin login new-user
```

On internal documentation:

```bash
ssh sitehost@documentation.shq.nz
sudo -i
docker exec -it $(shps | grep documentation | awk '{print $3}') bash
cd html/public/
php -f bin/plugin login new-user
```
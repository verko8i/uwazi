# Manage settings and configurations
## Edit your account information

Under **Settings**, you can edit your account information.

### To change your email address or password within Uwazi

1. Click on the gear icon in the top right corner of the site

<img src="https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/settings_link.jpg" width="300" height="100">

2. Click on **Account**

<img src="https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/account.jpg" width="800" height="400">


### To recover a new password if you are locked out

<img src="https://user-images.githubusercontent.com/56067374/72874751-019ce380-3cf3-11ea-812f-c0d23e464694.png" width="600" height="400">

## Manage users

If you work on a team or in collaboration with other people, Uwazi allows you to create users with specific permissions to help you update your collection of documents.

Roles
-----

Currently we support three different roles: **visitors, editors** and **admins**.

Any **visitor** to an Uwazi instance is able to:
- View all the documents, entities, properties, connections, etc in Uwazi (but cannot edit, create, or delete anything)
- User the search and filter functionalities

A user with the role of **editor** is able to:
- Do all the things that a _visitor_ can do
- Upload documents and create entities
- Delete documents and entities
- Organize the collection (as defined in the [user guide](https://github.com/huridocs/uwazi/wiki)), including: apply properties, create connections and references, create a table of contents
- Add/edit translations

A user with the role of **administrator** is able to:
- Do all the things that an _editor_ can do
- Manage settings (as defined in the [user guide](https://github.com/huridocs/uwazi/wiki))
- Configure the information architecture (as defined in the [user guide](https://github.com/huridocs/uwazi/wiki)), including: create document and entity types/templates, create dictionaries, name connections
- Configure filters
- Add and delete users

Creating users
-------------------

As you can notice, you don't need to create visitors. This is the basic role when anyone visits your collection!

But if you want to allow some people to perform specific actions into your collection, you can create Users that will allow them login the same way you login into your admin account.

To create a new user, you need to go to **Settings** and click on the **Users** section. It will appear a list with all current users inside your collection. You will be able to create new ones, edit or delete them if necessary.

![Users section](http://huridocs.github.io/uwazi-assets/wiki/screenshots/users-base.png)

A user has three fields to be completed:

- Username
- E-Mail
- Role (Editor or Admin).

We will send an email to that person with a link to set the user's password. 

Note that if you are hosting your own Uwazi, if you are accessing the instance as localhost, for instance: http://localhost:3000/settings to send the invitation, it will use that address as the instance URL.

So, if you have a proper domain, please, create the account from that url, for instance: http://yourdoumain.com/settings. This will send a 'yourdomain.com' URL.

If you are using a local IP, for an intranet installation, then use something like http://192.168.xx.yy/settings for it to send with that address.

![New user](http://huridocs.github.io/uwazi-assets/wiki/screenshots/users-new.png)

## Edit your site information

In your settings, you can edit your site information such as: the name of your site and the homepage.

1. Click on the gear icon in the top right corner of the site

![Gear icon](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/settings_link.jpg)

2. Click on _Collection_

![Site info](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/collection.jpg)

## Name
This is easy: your collection name :)

## Landing page
The landing page is the first thing users will see when visiting your Uwazi instance. By default, your landing page is the Library, without any filter applied and a list with all documents and entities.

However you can use any page from your Uwazi instance as a landing page, just copying and pasting the URL on the text box below custom page.

These are some examples:

- A [static page](https://github.com/huridocs/uwazi/wiki/Create-pages): `/page/dicxg0oagy3xgr7ixef80k9`
- A [library query](https://github.com/huridocs/uwazi/wiki/Filter): `/library/?searchTerm=test`
- A document or entity: `/document/4y9i99fadjp833di` `/entity/9htbkgpkyy7j5rk9`

Always use URLs relative to your site, starting with / and skipping the `https://yoursite.com`.

## Advanced settings

### Mailer configuration

This is a JSON configuration object that should match the options values required by Nodemailer, as explained [here](http://nodemailer.com/smtp/).

This setting takes precedence over all other mailer configuration. If left blank, then the configuration file in `/api/config/mailer.js` will be used.

### Google Analytics

You can use Google Analytics to track website visits by adding your [Google Analytics ID](https://support.google.com/analytics/answer/3123666?hl=en) to Uwazi under Settings > Collection. 

![Google Analytics field](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/analytics.jpg) 

### Custom header

Sadly is not possible to edit your header from Settings right now, but we will work to make it available soon. Meanwhile, you can create an [issue](https://github.com/huridocs/uwazi/issue/) and we will customise the header background image for you.

Requirements:

- Your logotype in PNG format (transparent background) and 72px height. Width is not fixed, but limited to 288px, so you can play until that size.
- Your brand colour to change the header background.

We will upload all the changes it for you once you have the final design.

![CEJIL](http://huridocs.github.io/uwazi-assets/wiki/screenshots/site-cejil.png)

Our partner [CEJIL](https://cejil.uwazi.io) is a great example of landing page and header customization.

## Create pages

In your settings, you can create static pages to your Uwazi document collection. You want to add a page that explains what the collection is, or shares your contact information. 

1. Click on the gear icon in the top right corner of the site

![Gear icon](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/settings_link.jpg)

2. Click on _Pages_

![Create pages](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/pages.jpg)

3. Click on _Add page_ to create a new page. You can use markdown or HTML to add formatting to your text. When finished click _Save_.

4. You can find the URL for each page you create by clicking on the page title itself in the list under the _Pages_ section, or by copying the URL that appears in the window after clicking _Save_:

![Find URL](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/pages_link.jpg)

### Formatting the content of your page

You can use HTML or [markdown syntax](https://guides.github.com/features/mastering-markdown/) to add images, lists, headers, quotes, and other formatting preferences. For help on using markdown, click on the _Help_ tab above the text field for the page. 

![markdown help](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/markdown_help.jpg)

We have also extended the markdown options to include some [custom syntax for Uwazi users](https://github.com/huridocs/uwazi/wiki/Custom-Syntax). This custom syntax allows users to embed lists of document/entity cards based on filter results, and embed YouTube videos.

## Submission forms

**Contact Form**

You can quickly setup a simple contact form by placing the code:
```
<ContactForm/>
```

in page. You can of course add any other contact information along with the form.

This form will send an e-mail to the address configured in settings > collection > contact e-mail.

***
**Public Intake Form**

The public form allows any Uwazi visitor to submit a form that will create an unpublished entity. You'll need to first define a Template for this form in a private instance, and then you can use the template ID (representing the numbers in the template URL) to add to the following code, which can then be included in any page: 

`<PublicForm template="ID_OF_THE_TEMPLATE" />`

Optionally you can add file or attachments field to the form like this:

`<PublicForm template="ID_OF_THE_TEMPLATE" file attachments />`

**For adequate synching of the form to the corresponding public instance, do the following:**

In both the public and private instance settings, under "_collection_":
1. add the private instance link (stopping at .io) to "public form destination";
2. add the template ID (the number in the URL) to "allowed public templates"

## Configuration of navigation menu links

In your settings, you can configure navigation menu links to display at the top of your site. These menu links can direct the user to either: the results of a specific filter, or a static page. 

1. Click on the gear icon in the top right corner of the site

![Gear icon](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/settings_link.jpg)

2. Click on _Menu_

![Menu links](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/menu_links.jpg)

3. Click on _Add link_ to add a new menu link. To add a link to a list of filter results, run that filter and copy the URL in your browser. Each filter you run in Uwazi has a unique URL so it is easy to share the results. 

Note: Use only relative URLs (starting with a /) and not fully formed URLs like http://www.google.com. If you copied a page universal URL, be sure to delete the first part (http://yourdomain.com).

## Configure filters

Settings > filters allows you to pick-up which document types and entities are going to be displayed atop the side panel with the filtering options in the library. It also lets you rearrange the order and group them so users have a better understanding on the structure of your document collection.

1. Click on the gear icon in the top right corner of the site

![Gear icon](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/settings_link.jpg)

2. Click on _Filters_

![Filters](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/filters_admin.jpg)

3. For each document or entity type that you want your user to be able to filter, drag and drop that item from the right column to the _Filterable types_ window. You can further organise these filters by creating _Groups_ of filters, meaning you can organise a group of filters together beneath  a label (such as the 'Documents' group in the screenshot above).

Users will see the available filters on the library:

![Available filters](https://raw.githubusercontent.com/huridocs/uwazi-assets/master/wiki/screenshots/filters_public.jpg)

### Default filters

Default filters can be configured in documents and entities metadata in settings by checking the option "Default filter". 

![](https://github.com/huridocs/uwazi-assets/raw/master/wiki/screenshots/default-filter-checkbox.png)

These filters are presented to the user when no document or entity type is selected. Ideally, use this option for relevant filters affecting several documents and entity types.

![](https://github.com/huridocs/uwazi-assets/raw/master/wiki/screenshots/default-filter-in-action.png)

## Make your collection private

If you are handling sensitive information or you just want your collection be accessible only via login, you can configure Uwazi to do so in Settings > Collection:

![](https://github.com/huridocs/uwazi-assets/raw/master/wiki/screenshots/private-collection.png)

By activating this option, your information won't be crawled by search engines and users will be prompted with a login screen when trying to access your documents or entities:

![](https://github.com/huridocs/uwazi-assets/raw/master/wiki/screenshots/login-screen.png)

## Editing web analytics

Uwazi supports both Google Analytics and Matomo for tracking visits. You can find the configuration options in settings > collection:

![](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/track-visits.png)

If you are hosting your Uwazi with us, we provide Matomo as part of the hosting. Please contact us in order to activate your account.


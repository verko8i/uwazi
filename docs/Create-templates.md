Templates are the foundation of your Uwazi platform as they allow you to attribute consistent, structured metadata to your documents and entities. Within each template, you can assign a variety of properties like:
* Text
* Numerics
* Select (needs thesaurus)
* Multi-select (needs thesaurus)
* Date, date range, multi date, multi date range
* Rich text
* Geo-location
* External links
* Media (for video and audio embedding or self hosting)
* Relationship - allow you to use items from another template as thesaurus items

## To create a template:
1. Click on **Settings**
2. Click on **Templates** in the Metadata section
3. Click **Add** templates

![](https://github.com/huridocs/uwazi/blob/quincywiele-patch-2/Create%20Templates.png)

4. There will be two default properties: Title and Date Added. 

![](https://github.com/huridocs/uwazi/blob/quincywiele-patch-2/templates.png)

5. Add new properties by dragging and dropping them into the designated area.
6. Give the template a name.
7. Click **Save**.


Note: 

1. In case the instance is planned to be in Arabic by default, the template and properties should be created in latin characters then translated into Arabic, otherwise it is going to trigger a bug. Developers are working to fix it.

2. When you add a **select** or **multi-select property** to a type, you will see a field titled _Thesauri_ in which you can select a _Thesaurus_ or a _Template_ that you have already created. See the section on [create thesauri](https://github.com/huridocs/uwazi/wiki/Create-thesauri) for more information on how to create these thesauri. 

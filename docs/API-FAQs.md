You can access the API for your Uwazi instance by adding _/api_ to the end of your URL, like this: 
https://yourinstancename.uwazi.io/api

For example, you can look at the available API calls for https://demo.uwazi.io/api/:


![Screenshot of API calls available](https://github.com/huridocs/uwazi-assets/blob/master/wiki/screenshots/Screen%20Shot%202019-10-16%20at%2011.47.39%20AM.png)


This is a work-in-progress so we will continue to add and improve on this. 

## Frequently asked questions

**1. Do you have an authorisation mechanism?**

We do have an authentication mechanism for editing / deleting any sort of data, but the public information does not require authorization.

**2. Do you have rate limiting?**

At this time, no. 

**3. Are documents and entities as exposed through the web interface both accessible through the /entities**
**endpoints?**

Yes, documents are entities that have a main file attached to them, so the entities/ endpoint will return both documents and entities.

**4. Is there a maximum amount of results returned by GET /search ?**

No, the search can return anywhere from 0 to all the documents.  The default is 30 but the LIMIT property (as you can check by selecting 'load more' in the library) can be set to any number you wish.  Higher numbers will take longer, be bigger and put extra toll on the server, so be careful.

**5. What is the templateId in GET /entities/count_by_template ?**

That is the mongo _id for a particular template type.  For the time being, you could ask the API for templates and then get the _id from those results.  Alternatively, the ID is shown in the URL if you edit a particular template.
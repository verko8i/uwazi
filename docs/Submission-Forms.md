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

Optionally you can add a file or attachments field to the form like this:

`<PublicForm template="ID_OF_THE_TEMPLATE" _file attachments_ />`


**For adequate synching of the form to the corresponding public instance, do the following:**

In both the public and private instance settings, under "_collection_":
1. add the private instance link (stopping at .io) to "public form destination";
2. add the template ID (the number in the URL) to "allowed public templates"


For adequate synching of the form to the corresponding public instance, do the following:
In both the public and private instance settings, under "collection":
* add the private instance link (stopping at .io) to "public form destination";
* add the template ID (the number in the URL) to "allowed public templates"



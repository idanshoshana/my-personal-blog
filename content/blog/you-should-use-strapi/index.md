---
title: You should use Strapi
date: "2020-08-18T22:40:32.169Z"
description: I'm very passionate about Strapi! It helps me to push my team towards being more professional. Every person who saw the connection between Strapi and our application was amazed! I stopped counting how many times a person from another team came to see it.
featuredImage: ../../assets/strapi.png
---

I'm very passionate about [Strapi](https://strapi.io/)! It helps me to push my team towards being more professional. Every person who saw the connection between Strapi and our application was amazed! I stopped counting how many times a person from another team came to see it.
So, If you want to be more professional, save time for yourself and your product manager, this article is for you! 

- In this article, I'm gonna talk about:
  * **What are CMS and Headless CMS**
  * **What is Strapi**
  * **My private story with Strapi**
  * **Bootstrap Strapi**

## What are CMS and Headless CMS

Before we'll talk about Strapi, you need to know what [CMS](https://en.wikipedia.org/wiki/Content_management_system) (Content Management System) and [Headless CMS](https://en.wikipedia.org/wiki/Headless_content_management_system) are.
Maybe you've already heard of [WordPress](https://wordpress.com/), the traditional CMS. WordPress allows us to update the content of our application in a nice UI, but there is a strong relation between our application and the interface that helps us update the content of the app. You need to build your app using WordPress to enjoy the ability to change its content.

Headless CMS shows us another perspective we can adopt.
From [headlesscms.org](https://headlesscms.org/about):

> Basically the frontend component of a Headless CMS is decoupled from the actual serving of the website or app.
> There’s a few ways the headless CMS can work (also look below). Either as purely API driven, where the end user connects to the api from the browser, or it can work by updating content in Git.
> Headless CMS' are opposite of legacy systems like Wordpress, Drupal, Joomla, etc. They are all CMS’ that traditionally have to be hosted and built together with the site every time it’s served.
> **A headless CMS doesn’t care where it’s serving its content to. It’s no longer attached to the frontend, and the content can be viewed on any platform.**

So as you can read, with Headless CMS I can hold another **decoupled** component that helps me edit my app content (of course with a nice UI) without coupling to my existing application. To receive the data from Headless CMS, I can send API requests from the frontend component of my application.

## What is Strapi

Now, when you know about Headless CMS let's talk about [Strapi](https://strapi.io/).

From [Strapi Documentation](https://strapi.io/documentation/v3.x/getting-started/introduction.html#what-is-strapi):

> Strapi is a **flexible**, **open-source** Headless CMS that gives developers the freedom to choose their favorite tools and frameworks while also allowing editors to easily manage and distribute their content. By making the admin panel and API extensible through a plugin system, Strapi enables the world's largest companies to accelerate content delivery while building beautiful digital experiences.

You've noticed that Strapi is an implementation for Headless CMS. Why do I think Strapi is better than other implementations? Because after research I've done I found Strapi is the best **open-source** option, has a **great community**, and is written in [Node.js](https://nodejs.org/) and [React](https://reactjs.org/) so you can custom it very easily. Strapi has a **great admin panel** that you can customize. You can consume the API from any client, mobile apps, or even IoT, using **REST** or [GraphQL](https://graphql.org/). Strapi simplifies the **API generation** (we'll see it later), gives you the ability to allow or prevent access to your API. Strapi has built-in the Auth system, comes with **awesome plugins** you can connect to. Strapi can integrate with [MongoDB](https://www.mongodb.com/), [MySQL](https://www.mysql.com/), [PostgreSQL](https://www.postgresql.org/), and [SQLite](https://www.sqlite.org/) databases.
There are a lot of features you can read about!

## My Private Story With Strapi

A few months ago, my friend has told me about Strapi and he was very excited about it. I've liked this concept but I couldn't find any usage for me as a Software Engineer.

After a few months, I've gotten a new feature from my product manager:

> "In our application, we have two places I want to change often. 
> The first is the **Updates** screen (usually after a new version) and the second is the **Help** screen. I'm tired of asking a developer to change the content in a "hard-coded" way! (requires to go inside the app's code, change the specific content, and publish a new version!) I must have an interface to change those sections in a perfect way!"

I understood his need, and I've started to think about a perfect solution for him. First I asked him if the feature could be in our existing app, a feature like Edit button for admin users, but He preferred an external application.

So, Should I build a new app from scratch? This app should include a nice **UI**, **Server**, and **Database**. I already did similar things in the past, but I've wanted to do the perfect solution in minimal time.

Before I started working on a new app, I remembered the concept of Headless CMS. It felt like a solution that could match. Yes, I remembered Strapi, but I did a research to find some alternatives (I want the best for my team!). After that research, I found Strapi is surely the best option for me (see Strapi's features in **What is Strapi** section).

I opened my computer, installed Strapi via `create-strapi-app` (more instructions later...), logged in, added new resources, added some users, connected Strapi to MongoDB, and did other things to make sure that Strapi is the best option.

Before I continue my story, let me show you Strapi!

## Bootstrap Strapi

Open a cli and start typing: 
```powershell
npx create-strapi-app my-dream-project --quickstart
```

> You can omit `--quickstart` and fill some inputs, like the DB type you want for example.

Now, start a Strapi application using this command in your application folder:
```powershell
npm run develop
```
Wait a few minutes and a new tab will open. Create a new admin user:

![registration](./registration.png)

This is the admin panel:

![strapi-dashboard](./strapi-dashboard.png)

You may say you like it! There is a lot of features you can do there. I'll focus on the main feature I want to cover, the API generation you can use later in your application.

Click the `Content-Types Builder` button, and you'll get this screen:

![content-types-builder](./content-types-builder.png)

Now you can create `Collection Type` and `Single Type`. 
Think about it like that: `Collection Type` is for an array with objects, and `Single Type` is for one object. For example, you might generate an array of products (`Collection Type`) and Add/Remove/Update the objects inside the array all the time. When you want to generate one object you can do it via (`Single Type`).

Do you remember our Updates Screen? this screen consists of `title` and `content` components: 
 - `title` component - consists of only plain text.
 - `content` component - can consists of images, videos, and designed text. It needs to support some features of a rich text editor.

Let's create a proper object in Strapi in order to consume it via REST and inject it into the Updates Screen component.
 
Press on `Create new single type`, and fill a name:

![create-a-single-type](./create-a-single-type.png)

> In my case, I choose the "UpdatesScreen" name

Press the `Continue` button and choose your object's fields. Give them a type and a name:

![types](./types.png)

I choose "Title" (text type) and "Content" (rich text editor type) fields corresponding to my Updates Screen:

![updates-screen-single-type](./updates-screen.png)

Click the `Save` button, your server will restart and you'll find new files on your codebase under the `api` folder. Now you can find your new single type under `Single Types` section, click on it. Feel free to edit and then click on the `Save` button:

![edit-updates-screen](./edit-updates-screen.png)

Awesome! now we want to be allowed to fetch this resource from our client.

Go to `Roles & Permissions`, Click on the edit button in the Public section. Under the Permission section, click on "find" checkbox:

![permissions](./permissions.png)

In the right side you can see the route you can go to, keep it for later:
![route](./route.png)

Then, press the `Save` button.
Add your saved route to your base URL. The result should be:
> http://localhost:1337/{YOUR_GENERATED_ROUTE}

Go to this URL and you will get your object as a JSON, for example:
```json
{
  "id": 1,
  "Title": "Hello!",
  "Content": "What's new?",
  "created_by": {
    "id": 1,
    "firstname": "Idan",
    "lastname": "Shoshana",
    "username": null
  },
  "updated_by": {
    "id": 1,
    "firstname": "Idan",
    "lastname": "Shoshana",
    "username": null
  },
  "created_at": "2020-08-12T07:28:32.132Z",
  "updated_at": "2020-08-12T07:28:32.186Z"
}
```

Wow, now you can fetch this resource from your application!


For my case, as you can guess I've created two single types "UpdatesScreen" and "HelpScreen", with `title` and `content` fields for each of them. I've replaced the Strapi's rich text editor with [React-Quill](https://github.com/zenoamaro/react-quill), in order to generate HTML instead of MARKDOWN. This is a [nice article](https://strapi.io/blog/how-to-change-the-wysiwyg-in-strapi) that can be helpful for you.

I've been sending requests to fetch some data from Strapi in my application, and the results are great.
I bounce a popup (Updates Screen) for an app's user when he needs to see new updates (usually after a new app's version). I added some frontend logic in order to check if a specific user already read the updates of a specific app's version. When the product manager writes content for another app's version (via Strapi!), I know that any user on my app will get a new popup with new content!

My clients see the data that comes from Strapi (They don't know 🤫)  and the product manager feels free to add new content without an effort of a developer!

![winner](./winner.jpg) Photo by [bruce mars](https://unsplash.com/@brucemars?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/)

I hope you enjoyed!
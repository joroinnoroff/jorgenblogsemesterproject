

#BRAINTHINK Report

Every page has a navigation where user can select options from; -Blog -About us -Contact us

this navigation turns into a hamburger menu on tablet / mobile layout.

Header Colors are choosen to not disturb, and create a calm environment. Body is set to a light blue to create contrast between articles and items on the page.
The Homepage is Created using Fetch Url https://exampleurl.com/wp/v2/posts/${postId}

Here it post all the postIds and adds it to the slider entered which are const postIds = [71, 69, 67, 65, 63, 61, 59, 57, 55, 53, 35, 33, 30];

This makes it easy to either change posts to different Ids and also edit content which is located at Wordpress. The slider is set to a autoloop every 25 seconds but will stop once an article is clicked and will start again once clicked outside of.

Under the slider is the main part of the page Here its created with normal HTML and fetch of right articles

Left articles and middle is written in


How good is enough? AI vs. human code
                        Published by Marc Luettecke, Nikolas Rist and Tom Gehder                         on 16 Dec 2022/ Data-science, Training                       

                    
where the Ahref goes to a new HTML page where the specific ID is fetched and posted. Here the HTML structur is only written with a few lines.

        
      
Left articles that are fetched is not displayed with images to not disturb and make it easier to read. articleEl.innerHTML = ` <a href="${postId === 61 ? "amazon.html" : "development.html"}">

${ title.rendered }
${excerptRendered}

this code snippet generates HTML content for each article element, including a link, title, and excerpt, based on the provided data (postId, title.rendered, and excerptRendered).

Right Articles are populated with creating and appending const rightIds = [92, 95, 98];

// Fetch the post data from the API endpoint         fetch(           https://exampleurl.com/wp-json/wp/v2/posts/${rightId}

Here the Ahref goes to the article fetched for the option to comment on articles and create discussions.

Every Article holder has a hover Effect so it highights to be more eyecatching.

above the middle section there is a button to "View All Articles" this takes the user to section of all articles where their filtered with a map const categoryMap = { 35: "technology", 30: "technology", 67: "technology", 65: "technology", 63: "technology", 61: "technology", 59: "technology", 84: "webDesign", 95: "webDesign", 98: "webDesign", 92: "webDesign", 69: "webDesign", 71: "trending", 57: "trending", 53: "trending", 55: "Trending", 33: "Trending", 24: "Trending", };

With this method the user can filter articles into catagories and also add catagories if needed. The Html structur here is All Technology releases Web Design Trending p

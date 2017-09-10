# For our first major project at Coder Academy in Sydney.

### You are to design, build, deploy and present a portfolio website.

## The website needs to have the following information:

		1. Your name and contact details.
		2. Links to your Github and LinkedIn accounts.
		3. Information about you to demonstrate your personality.
		4. Your study and work history.

You are allowed to use a CSS library such as Bootstrap
or even a theme you found on the internet.
It is advised that you demonstrate you have customised the library or theme.


## Deliverables

### Design Documentation
    1. Demonstrate your understanding of your site's audience.

Concepts should be clear,
this is a portfolio of work, it can be fun
and showcase skill but it needs to be professional as
potential employers will be looking at it.
I will be using bootstrap where possible.

 	2. Demonstrate the design decisions made:

##### Key concepts I know I want to include


* design must be easy to navigate.
* black and white, color on hover.

 * ##### Instead include Parrallax and single page above the fold

>I had this idea of a single page above the fold website which had static images and when you scroll it would push the content up into view on a parrallax. adding a depth and having the scrolling content on a higher Z index and with shadows to formulate the depth.
>
>The parrallax and fixed positions unfortunately looked terrible and I
was forced to abandon it.
>

> my original wireframe can be seen on figma here : https://www.figma.com/file/W9rRusHxPYtdYLt4C5s9j96B/Portfolio


###### _Lessons learned_
Style has to be updated to fit more modern conventions.

My wireframe idea looked quite good but technically it was proving really difficult to make it not look like it was from the 80s, fixed images also don't scale well for mobiles and building a website that doesn't work on mobile to showcase myself isn't the best start.

It was rewarding learning how to get this working and exciting when I had the slick sliding function, but overall it looked tacky and cheap.

I will consider this a todo for the future to revisit this concept utilising future technical skills.


---


* ##### Snake Minigame. pj5.js
> Snake was a bit ambitious as an easter egg, but I really enjoy the idea of some interaction with the user, so I managed to implement an example from p5.js
> seen here https://p5js.org/
>
>Which is a really cool js framework that allows for fun and quite easily implementation of graphics and art. You can create a canvas and track mouse conditions inside the area and easily draw objects based on the input.
>
> My new redesign will feature a large area for this to occupy the user.


###### _Lessons learned_

The main focus here was to include a fun easter egg, and also also for some interaction to excite the user.

Wednesday 6th
Easter eggs should be value adds, and unfortunately after an entire redesign learning the logic for snake is a bit too overwhelming.  

With the working prototype of the new p5.js example instead it will feature in my redesign.


---


* ##### Color changing ~~background~~ Name plaque - Implemented JS
>One feature I really enjoyed from another website is a large section which changed color based on mouse click, I wanted to reimplement this as a name plaque in my one page design.

###### _Lessons learned_

This was a cool trick to learn, it involved learning about EventHandlers in js, I was able to get it working with only a few lines of code, and infact found two different ways to make it work; both were only a few lines of code, but it was an enjoyable learning curve and getting it to work was quite rewarding.

Limiting the color choices in the future will improve the aesthetics as one of the ways involved randomly asigning hex codes using MATH.random, while it allowed for semi-infinite colors, it also allowed or some really ugly ones.

It will still be a feature point of my new design and a larger size frame will allow the color to pop more.

This feature also got scrapped with the additional js plugins used, the clicker didn't suit the overall style of the new website.

And using the random color generator it also looked quite tacky if it chose an odd color, one of the key form factors  I wanted was to keep black and whites and use colors on hover or as highlights.

---
* #####  Scaleable portfolio section with mouse interaction.
-- Carousel on separate separate page
> It's important that my portfolio page can easily be scaled as my portfolio grows, originally I considered a carousel, as you can easily just add pages, but based on the new design with the pagepiling plugin, I decided to make the page my achievements instead of just my portfolio, so I could add a bit more flavour,

>The cards can easily be scaled by adding the description text to a modal in the future.

###### _Lessons learned_
This was a good lesson about time management, and sometimes just keep it simple stupid is the right way to go.


---
* ##### vr room
>This was another sprinkles feature; which would be cool to implement as it also shows some exciting additional skills set, and it will be definitely be a future feature I would like to implement. Maybe something to work on over our week off. Or maybe once I learn a bit more about javascript.

---
* ##### Contact Us Page
> This is basic functionality, but originally it was planned to be on a popup under the original design, but evolved into a simple full page at the end of the website.
---


* ##### Link to browse happy for outdated browsers-
> It's important to either support of show people using older browsers, that they need to update. I've included a link to Browsehappy in the header of my index.html, which sends people to browsehappy.com if they are using an older version of IE;


---		

* ##### Demonstrate that you considered usability heuristics

My portfolio should be able to tick the 10 heuristics from this page
https://blog.prototypr.io/10-usability-heuristics-with-examples-4a81ada920c

This is super important as I know personally that I hate it whenever I use something and it doesn't react or interact in the expected way, Websites should scroll, buttons should do stuff. etc This was also the flaw with my original design in that I was trying to go against the grain.

---

* ###### Any wireframes
Figma wireframes https://www.figma.com/file/W9rRusHxPYtdYLt4C5s9j96B/Portfolio

---Updated second wireframe
https://www.figma.com/file/e6AbtSmmAWLlQUQlMUhjo9VA/Redesign

-- Third and final wireframe
https://www.figma.com/file/KIvRPCZJN9PSMKjsFR9RH60t/Untitled

---
* ####  Style guide
###### Original Design

Main focus is professional clean image.
Reactive tiles for sections to navigate put on a parrallax;
Focus on black and white and color only on hover.
moodboard done on pinterest with monotone colors and yellow highlights
https://au.pinterest.com/jim_is55/portfolio/


###### Second Design
For my second design I wanted to focus on a large interactive area with color changing and keep the one page over the fold layout using a carousel to display my portfolio work.

I decided that the color changer actually looked really tacky and again had to scrap the entire design.


###### Third and final redesign
After some fruitful googling I realised that I was not as design savvy as I originally thought (which was already pretty low) . So the next step was to start looking for plugins which would help me speed up the process. This kept me after hours on wednesday  and unfortunately it then took me several hours to get home, which not only stressed me out as I lost quite a bit of work time, it also infuriated me to the point of working from home on the thursday and after 12 hours of solid testing and retesting, I finally figured out how to run my plugin.

There were three I was considereing Pagepiling.js  fullpage.js (from the same author) and another one which scrolled the screen in panes that tiled 45degrees and faded as you scroll, it visually looked the best but reported poor performance and had the least commits and closed issues on Github.

Pagepiling was deemed the winner and I went about restructuring my page, I knew I wanted the big black and white photo and a landing page to be kept simple and elegant.


##### _ KEY OVERALL Lessons Learned_ ::
> This was a herculean effort accross thursday and friday to move my site from essentially broken testing pieces to a fulled fledged website, unfortunately I then found that my pagepiling.js had problems with bootstrap 4 beta, So I had to relearn my entire bootstrap vocabulary and relearn it all in 3.7 to get my nav bar working.

>While this wasn't the worst thing in the world, as the syntax is very similar it was still fustrating. It did however add an magnificent sense of accomplishment when I finally had it all working.

> This then lead it self to the next problem, while importing to rails was quite easy  when moving to heroku, I learned I had to use some erb tags for my images to render properly which mean't renaming index to index.html.erb as I only had one page I was not using separate layouts just to minimise risk of more problems with the plugin.

>My biggest challenge, now with the new plugins was that you could scroll and it was beautiful but if you click on a link in my nav bar, the plugin would crash and you were stuck in the page you clicked on, you could click to another page but you couldn't scroll anymore and this was a huge problem.

> I acutally couldn't solve this problem : and stack overflow seemed to think it had something to do with turbolinks which is a feature of rails.

	Turbolinks is a brand new piece of JavaScript that is going to be integrated as part of Rails 4. It is similar to pjax. When enabled on a site, Turbolinks will fetch a part of a page and replace the contents of the current page with a new page.

> The only way I could get my plugin to work was to run it with a window.onload event listener and the plugin itself was jquery but wouldn't respond to $.document.ready  

> My friend was convinced that the problem was turbolinks, but I tired several otherways to call my function including  on turbolinks:load, which was said to help solve the error on stack overflow; but none of them worked, my friend suggested I simply remove Turbolinks from my website entirely as it was a single page website and quite small it shouldn't be needed.

>BAM it worked. Cheering was had, in two days I went from a broken design which channelled the 80s to a modern and fully functional portfolio page.


###### Overall impression :
>  This was a dauting challenge, and it took me not only several attempts, but also challenged me to learn new technologies which I was unsure about and mesh them together and hope.

> Making a modern website without really knowing javascript is not a fun experience, and I Would Not Recommend.
---
##### 6. Personal Logo
>As a logo I went with a simple and plain black and white 'J', and decided to use it in my navbar with sight overlap of the rest in size, to allow for a break in the lines of the menu.

---
title: "PLADD (The Website You Are Already On)"
shortdesc: "Paul describes features, problems, code, and other nerdy stuff about the workings of itspladd.com. Clearly, this is the most meta post on the entire site."
preview-image:
  file: "banner-itspladd-website-code-project.png"
type: "website"
live-url: "http://www.itspladd.com"
source-url: "https://github.com/itspladd/itspladd.github.io"
live-url-message: "Go to the homepage"
---

PLADD is my personal website. It features a blog, samples of my writing, my drawings, and code projects I've worked on.

### Hosting and Domain ###

PLADD is hosted via [GitHub Pages](https://pages.github.com/) (referred to hereafter as just "Pages"). Pages allows me to manage the source code for the website through GitHub. Pages automatically rebuilds the site when I commit new changes to the master branch.<!--more-->

Pages uses my GitHub username to create the website domain, so the original domain was *itspladd.github.io*. The domain *itspladd.com* is registered with Google Domains. I had to learn how to set up a CNAME file and DNS records to redirect the domain.

### Languages and Tools ###

PLADD is built on [Jekyll](http://jekyllrb.com/). Jekyll is pretty neat; it allows me to write custom HTML and CSS, and then use [Liquid](http://liquidmarkup.org/) templates and logic to generate static pages from very few HTML source files.

Jekyll is installed on all of my development machines. This allows me to build and view any changes I make to the website before putting them on the live site.

### Challenges and Lessons Learned ###

I've been working with HTML and CSS for a while, so the design and layout of the site's individual pages wasn't terribly challenging. I had to do a non-trivial amount of experimenting with CSS positioning attributes (especially [float](http://www.w3schools.com/css/css_float.asp)) to get everything functioning reliably.

Most of the challenges I faced came from learning Jekyll and the Liquid templating system entirely from scratch. Jekyll makes frequent use of [YAML](http://yaml.org/) in configuration files and frontmatter, and I had never even _heard_ of YAML before starting this project.

### Planned Features ###

If you have a suggestion for the site, email <a href="mailto:support@itspladd.com">support@itspladd.com</a> with a feature request. If I like it, I'll add it to the list!

* Hide sidebar if display window is too small
    * Right now, if your browser window is too small, the sidebar and the main content of a page will overlap. Instead, the sidebar should be replaced with a small icon that can be expanded into the full sidebar whenever you actually want it.
* 

### Known Issues ###

See any problems with the site that aren't listed here? Email <a href="mailto:support@itspladd.com">support@itspladd.com</a> with a description of the problem, and I'll add it to the list!

* 
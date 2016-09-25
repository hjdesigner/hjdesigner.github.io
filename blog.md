---
layout: page
title: Blog
permalink: /blog/
---

<div class="page-banner {{ page.title }}">
	<h1>{{ page.title }}</h1>
</div>

<div class="page-content">
 	<div class="page-center">

 		{% if site.posts.size == 0 %}

		  <h2>No posts found =(</h2>
		  
		{% else %}
		  {% for post in site.posts %}
		    <section class="card-blog">
		    	<a href="{{ post.url | prepend: site.baseurl }}">
			        <small class="card-blog-date">
			          <time>{% include post-date.html %}</time>
			        </small>
			        <h2 class="card-blog-title">
			          {{ post.title }}
			        </h2>
			        <p>{{ post.introducao }}</p>
		        </a>
		    </section>
		  {% endfor %}

		{% endif %}

	</div>
</div>
---
layout: default
title: Home
---

<div class="profile-container">
    <div class="profile-content">
{% capture my_content %}

Hi! I'm Katrina, a researcher at Anthropic. I [graduated magna cum laude from Harvard University]({{ '/courses' | relative_url }}) ('25) with an undergraduate degree in Computer Science and Math, as well as a masters degree in Statistics. On campus, I conducted machine learning research, taught CS & Statistics courses, and helped run the undergraduate Women in Computer Science (WiCS) group.

I hail from the cornfields of Indiana, and since then I've passed my time living in San Francisco, Cambridge MA, NYC, and Chicago. In my spare moments, I love to hike the trails of SF, road bike, run half-marathons, [read voraciously]({{ '/reading' | relative_url }}), sing in the shower, and infuse baked goods and smoothies with vegetables. My creative side manifests in violin, which I studied seriously under Mimi Zweig at the IU Jacobs School of Music from 5-16 years old, and more sporadically since. 

My favorite pastime is meeting new people. 
Reach out to **katr.rbrown [AT] gmail.com** if you'd like to say hello!
{% endcapture %}
{{ my_content | markdownify }}
    </div>
    <img src="{{ '/assets/KatrinaBrownGrad2025Cropped.jpg' | relative_url }}" alt="Katrina Ruth Brown" class="profile-image">
</div>
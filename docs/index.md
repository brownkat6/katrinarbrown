---
layout: default
title: Home
---

<div class="profile-container">
    <div class="profile-content">
{% capture my_content %}

Hi! I'm Katrina, a researcher at Anthropic. I graduated magna cum laude from Harvard University ('25) with an undergraduate degree in Computer Science and Math, as well as a masters degree in Statistics. On campus, I conducted machine learning research at the Harvard Kempner Institute, where my interests centered on **fairness, robustness, and capabilities** of **language and multimodal foundation models**.

I hail from the cornfields of Indiana, and since then I've [passed my time]({{ '/travel' | relative_url }}) living in Cambridge MA, NYC, and Chicago. In my spare moments, I love to urban hike the streets of NYC or the trails of SF, road bike in Colorado, read Substack voraciously, and infuse baked goods and smoothies with vegetables. My creative side manifests in violin, which I studied seriously under Mimi Zweig at the IU Jacobs School of Music from 5-16 years old, and more sporadically since. 

Reach out to **katrinabrown [AT] college.harvard.edu** if you'd like to say hello!
{% endcapture %}
{{ my_content | markdownify }}
    </div>
    <img src="{{ '/assets/KatrinaBrownGrad2025Cropped.jpg' | relative_url }}" alt="Katrina Ruth Brown" class="profile-image">
</div>
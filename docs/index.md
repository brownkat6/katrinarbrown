---
layout: default
title: Home
---

<div class="profile-container">
    <div class="profile-content">
{% capture my_content %}

Hi! I'm Katrina, an undergraduate senior at Harvard University, where I'm obtaining an undergraduate degree in Computer Science and Math, as well as a masters in Statistics. On campus, I conduct machine learning research at the Harvard Kempner Institute, where I'm interested in **fairness, robustness, and capabilities** of **language and multimodal foundation models**.

I hail from the cornfields of Indiana, and since then I've [passed my time]({{ '/travel' | relative_url }}) living in Cambridge MA, NYC, and Chicago. In my spare moments, I love to urban hike the streets of NYC, road bike in Colorado, read Substack voraciously, and infuse baked goods and smoothies with vegetables. My creative side manifests in violin, which I studied seriously under Mimi Zweig at the IU Jacobs School of Music from 5-16 years old, and more sporadically since. I enjoy [teaching]({{ '/teaching' | relative_url }}), [speaking to crowds]({{ '/speaking' | relative_url }}), [working]({{ '/work' | relative_url }}) with interesting people, [taking hard courses]({{ '/courses' | relative_url }}), and [researching]({{ '/research' | relative_url }}) problems that are technical, challenging, and fun.

Reach out to **katrinabrown [AT] college.harvard.edu** if you'd like to say hello!
{% endcapture %}
{{ my_content | markdownify }}
    </div>
    <img src="{{ '/assets/Brown_Katrina Ruth.png' | relative_url }}" alt="Katrina Ruth Brown" class="profile-image">
</div>
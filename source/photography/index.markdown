---
layout: page
title: "Photography"
date: 2014-06-28 13:54
comments: true
sharing: true
footer: true
---

<script src="{{ root_url }}/js/glisse.js" type="text/javascript"> </script>

<div id='gallery'>

    <img class='photo' src="/images/photography/0580_thumb.jpg" data-glisse-big="/images/photography/0580.jpg" alt="" rel='group1'>

</div>

<script>
jQuery(function () {
    jQuery('.photo').glisse({
        changeSpeed: 550, 
        speed: 500,
        effect:'fade',
        fullscreen: false
    }); 
});
</script>
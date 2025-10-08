---
path: /
title: 2025 Conference
year: 2025
register_text: Register Now!
cssClass: conference
---

<div class="branding">

# {% exultrochester %}

## 2025 Rochester Catholic Men's Conference

</div>

<img src="/assets/2021 Ultima Cena-640.png" >

<div class="theme">
<h1>
{{ theme }}{% if tagline %} - {{ tagline }}{% endif %}
</h1>
</div>

<div class="text-center no-bullets">

* **Saturday, November 15, 2025**
* 8:00 AM - 12:30 PM
* 8:30 AM Mass with The Most Reverend Bishop Salvatore Matano
* Featured Speaker:  Rev. Gerard D'Souza, Abbot of the Abbey of the Genesee
* Conference ends at 12:30 PM; Lunch served and Conversations start at this time


{% if agenda_path -%}* [Full Agenda]({{ agenda_path }})\{% endif %}

</div>

<div class="text-center">

The Parish of the Holy Family at St. Jude\
[4100 Lyell Rd]({{ map_url }})\
Rochester, NY 14606

</div>

<div class="text-center">
  <ul class="no-bullets">
    <li style="display: 'inline-block'">
      $20
    </li>
  </ul>
  <p>
    (Includes lunch)<br/>
    {%- if agenda %}<a href="#agenda">See Agenda below</a>{% endif -%}
  </p>
</div>

{% include 'register-links' %}

{% if speakers %}
{% include 'speakers' %}

{% include 'register-links' %}
{% endif %}

{% comment %}<Promos items={DATA.promos} />{% endcomment -%}

{% if agenda %}
{% include 'agenda' %}
{% include 'register-links' %}
{% endif %}

To get involved, call Mike Sauter at 585-328-3228 (x1337) or email Micheal.Sauter@dor.org  

&nbsp;

May Jesus, ever present in the most Holy Eucharist, remain the source and
summit of our faith and lead us to live out our daily lives as Christian witnesses. 

<div style="clear: both;"></div>

{% comment %}
// TODO: Mailchimp Sign-up
{% endcomment %}

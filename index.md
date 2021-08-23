---
year: '2021'
path: /
type: conference
theme: St. Joseph
tagline: A Man of God
map_url: https://www.google.com/maps/place/St.+Jude+Church/@43.1663474,-77.7404722,17z/data=!4m8!1m2!3m1!2sSt.+Jude+Church!3m4!1s0x89d6b2873cfafb47:0x8cb7c6cd2e16ecce!8m2!3d43.1663473!4d-77.7382781
register_url: https://rcmc2021.eventbrite.com/
speakers:
- name: Deacon Thomas Jack
  image: https://placekitten.com/500
  # image: /assets/dr-ray-guarendi.png
  descriptionMarkdown: |
    TODO FIXME
- name: Dr. Mark Miravalle
  image: /assets/mark-miravalle-flipped.png
  descriptionMarkdown: |
    Dr. Mark Miravalle earned his Sacred Theological Doctorate at the Pontifical University of St. Thomas in Rome. He holds the Saint John Paull II Chair of Mariology at Franciscan University of Steubenville, where he has been teaching since 1986. 

    Dr. Miravalle is the founder and senior editor of Ecce Mater Tua, an international journal of Mariology research. He is also president of the International Marian Association, comprised of more than 130 theologians, bishops, clergy, and laity worldwide who seek to promote Marian devotion and doctrine.

    Well known throughout the world for his lectures on Mariology, Dr. Miravalle has addressed several Episcopal conferences, including those of South India, Nigeria, Venezuela, and Costa Rica. He has also assisted bishops with preliminary investigations into reported apparitions.

    Dr. Miravalle has spoken at numerous international conferences and has appeared on EWTN, National Public Radio, BBC and Fox News. 

    Dr. Miravalle is the author and editor of over 20 books in Mariology and Spiritual Theology, including his most recent works, Meet Your Mother: An Introduction to Mary, Meet Your Spiritual Father: An Introduction to St. Joseph; Time to Meet the Angels, and Jesus in You: The Indwelling Trinity in the Souls of the Just. 
promos: []
agenda:
  - start: "7:00"
    end: "7:55"
    lines_markdown:
      - Registration
  - start: "7:30"
    end: "7:50"
    lines_markdown:
      - Rosary
  - start: "7:55"
    end: "8:00"
    lines_markdown:
      - Welcoming Remarks by Fr. McGrath
  - start: "8:00"
    end: "9:30"
    lines_markdown:
      - "**Mass - Bishop Salvatore Matano presiding**"
  - start: "9:30"
    end: "10:00"
    lines_markdown:
      - Break (15 minutes)
      - Confessions begin at 10:05 - FIXME maybe?
  - start: "10:00"
    end: "11:00"
    lines_markdown:
      - "**Speaker #1 - Deacon Thomas Jack**"
  - start: "11:00"
    end: "11:15"
    lines_markdown:
      - Break (15 minutes)
  - start: "11:15"
    end: "12:15"
    lines_markdown:
      - "**Speaker #2 - Mark Miravalle**"
  - start: "12:15"
    end: "12:30"
    lines_markdown:
      - Announcements, closing remarks
  - # start: "12:30"
    end: "12:30"
    lines_markdown:
      - Adjourn
---


<img src="/images/exulttopbar-small.jpg" style="float: right" />

# {% exultrochester %}

## 2021 Rochester Catholic Men's Conference

# {{ theme }} - {{ tagline }}

<div class="text-center no-bullets">

* **Saturday, October 23, 2021**
* 7:30 AM - 12:30 PM
* Doors open at 7:00
* 8:00 AM Mass with The Most Reverend Bishop Salvatore Matano
* Conference ends at 12:30 PM
* Online simulcast available
{% if agenda_path -%}* [Full Agenda]({{ agenda_path }})\{% endif %}

</div>

<div class="text-center">

St Jude the Apostle Church\
[4100 Lyell Rd]({{ map_url }})\
Rochester, NY 14606

</div>

<div class="text-center">
  <ul class="no-bullets">
    <li style="display: 'inline-block'">
      $15 Livestream
    </li>
    <li style="display: 'inline-block'">
      $25 In-person
    </li>
    <li style="display: 'inline-block'">
      $30 at the door
    </li>
  </ul>
  <p>
    (Includes a light snack)<br/>
    <a href="#agenda">See Agenda below</a>
  </p>
</div>

{% include register-link %}

{% include speakers %}

{% include register-link %}

{% comment %}<Promos items={DATA.promos} />{% endcomment -%}

{% include agenda %}

{% include register-link %}

&nbsp;

May Jesus, ever present in the most Holy Eucharist, remain the source and
summit of our faith and lead us to live out our daily lives as Christian witnesses. 

<div style="clear: both;"></div>

{% comment %}
// TODO: Mailchimp Sign-up
{% endcomment %}

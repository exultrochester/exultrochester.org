---
title: Parish Men's Groups
---
# Parish Men's Groups

Looking to join a men's group? Interested in starting one at your
parish? Check the list below to see if your parish already has an
established Men's Group.

The mission of the Exult Rochester Catholic Men's Conference is to
encourage the formation of parish based groups.

If you don't see one and would like to inquire about how to start one
in your parish, please contact Dan Hilsdorf at: <fishers-of-men@saintpiustenth.org>

Is your parish men\'s group not listed here?
[Click here to add it!](/list-my-parish-mens-group)

<table class='parish-mens-groups'>
<thead>
<tr>
<th>Town</th>
<th>Parish</th>
<th>Group</th>
<th>Details</th>
</tr>
</thead>
<tbody  >
{% for group in parishMensGroups -%}
<tr>
<td>{{ group.Town }}</td>
<td>{{ group.Parish }}</td>
<td>
{% assign href = group['Website'] -%}
{% assign text = group['Group_Name'] -%}
{% ExternalLink href text -%}
</td>
<td>
<div>{{ group.Contact_Name }}</div>
{% if group['Contact_Email'] -%}
<p>
<a href="mailto:{{group['Contact_Email']}}"
>{{ group.Contact_Email }}</a>
</p>
{% endif -%}
{% if group['Contact Phone (Public)'] -%}
<p>{{ group['Contact Phone (Public)'] }}</p>
{% endif -%}
{% if group.Address -%}
<p style="white-space: pre;">{{ group.Address }}</p>
{% endif -%}
</td>
</tr>
{% endfor -%}
</tbody>
</table>

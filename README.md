# TaxCalc
Tax Calculator 2014/2015 for Salaried and Hourly Employees

You do have to make your own local_settings.py but it doesn't have any special or private information.
# local_settings.py
from settings import *

The file Architecture is also structured so that certain files are easily found by django.

You'll notice this has template inheritance and that my CDNs are in my templates/base/base.html file.
I did the entire tax library coding in my static/js/main.js file.

The next step I'm going to include the following:
<ul>
  <li>Tax Calc for hourly employees</li>
  <li>Develop a simple UI for the best UX</li>
  <li>Create dropdowns for those two selections through JQuery</li>
<ul>

Any suggestions or pull requests will be highly welcomed.
